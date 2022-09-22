import "./Main.css";

import photoCouch from "../../assets/photo-couch.jpg";
import photoCouchLarge from "../../assets/photo-couch_2x.jpg";

import { Button } from "../Button";

export function Main() {
  return (
    <main
      style={{
        backgroundImage: `-webkit-image-set(url(${photoCouch}) 1x, url(${photoCouchLarge}) 2x)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="main-horizontal-split">
        <div className="gutter">
          <h3 className="main-h3">New Games & Accessories</h3>
          <h1 className="main-h1">
            Monthly Packages. <br />
            Excitement delivered daily.
          </h1>
          <p className="main-p">
            What’s the best way to shop for the latest video games and
            peripherals? How about never shopping at all? You’ll get new stuff
            on your doorstep — every month.
          </p>

          <Button />
        </div>
      </div>
    </main>
  );
}
