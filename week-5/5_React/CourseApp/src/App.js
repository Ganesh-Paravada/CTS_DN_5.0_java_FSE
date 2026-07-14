import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohorts = [
    {
      cohortCode: "INTADMDF10",
      technology: ".NET FSD",
      startDate: "22-Feb-2022",
      currentStatus: "Ongoing",
      coach: "John",
      trainer: "John"
    },
    {
      cohortCode: "ADM21JF014",
      technology: "Java FSD",
      startDate: "10-Sep-2021",
      currentStatus: "Completed",
      coach: "Peter",
      trainer: "Peter"
    },
    {
      cohortCode: "CDBJF21025",
      technology: "Java FSD",
      startDate: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "David",
      trainer: "David"
    }
  ];

  return (
    <div>
      {cohorts.map((item, index) => (
        <CohortDetails key={index} cohort={item} />
      ))}
    </div>
  );
}

export default App;