import { sortAndSimplifySteps } from "./components/Section";

test("test sorting and simplifying function of steps api results", () => {
  const mockSteps = [
    {
      id: "abc",
      stepNumber: "3",
      versionContent: [
        {
          title: "outdated",
          body: "lorem ipsum outdated",
          effectiveDate: "2019-04-04T05:04:05.000Z",
        },
        {
          title: "latest",
          body: "lorem ipsum latest",
          effectiveDate: "2019-05-04T03:04:05.000Z",
        },
      ],
    },
    {
      id: "def",
      stepNumber: "1",
      versionContent: [
        {
          title: "latest",
          body: "lorem ipsum latest",
          effectiveDate: "2019-05-20T03:04:05.000Z",
        },
      ],
    },
    {
      id: "ghi",
      stepNumber: "2",
      versionContent: [
        {
          title: "outdated 1",
          body: "lorem ipsum outdated",
          effectiveDate: "2019-04-04T03:04:05.000Z",
        },
        {
          title: "latest",
          body: "lorem ipsum latest",
          effectiveDate: "2019-04-04T05:04:05.000Z",
        },
        {
          title: "outdated 2",
          body: "lorem ipsum outdated",
          effectiveDate: "2019-02-04T08:04:05.000Z",
        },
      ],
    },
  ];

  const sortedAndSimplifiedSteps = sortAndSimplifySteps(mockSteps);

  expect(sortedAndSimplifiedSteps).toStrictEqual([
    {
      stepNumber: "1",
      title: "latest",
      body: "lorem ipsum latest",
    },
    {
      stepNumber: "2",
      title: "latest",
      body: "lorem ipsum latest",
    },
    {
      stepNumber: "3",
      title: "latest",
      body: "lorem ipsum latest",
    },
  ]);
});
