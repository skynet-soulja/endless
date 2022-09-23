import "./Section.css";

import React from "react";

export function Section() {
  const [steps, setSteps] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw response;
      })
      .then((results) => {
        const sortedAndSimplifiedSteps = sortAndSimplifySteps(results);

        setSteps(sortedAndSimplifiedSteps);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="section">
      <div className="gutter">
        <h3 className="section-h3">How It Works</h3>
        <ul className="step-list">
          {steps.map((step) => {
            return (
              <li key={step.stepNumber} className="step">
                <div className="step-h1-wrapper">
                  <h1 className="step-h1">0{step.stepNumber}</h1>
                </div>
                <h4 className="step-h4">{step.title}</h4>
                <p className="step-p">{step.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function sortAndSimplifySteps(steps) {
  return steps
    .sort((a, b) => {
      if (a.stepNumber < b.stepNumber) {
        return -1;
      }

      if (a.stepNumber > b.stepNumber) {
        return 1;
      }

      return 0;
    })
    .map((step) => {
      step.versionContent.sort((a, b) => {
        if (a.effectiveDate < b.effectiveDate) {
          return 1;
        }

        if (a.effectiveDate > b.effectiveDate) {
          return -1;
        }

        return 0;
      });

      const latestContent = step.versionContent[0];

      const simplifiedStep = {
        stepNumber: step.stepNumber,
        title: latestContent.title,
        body: latestContent.body,
      };

      return simplifiedStep;
    });
}
