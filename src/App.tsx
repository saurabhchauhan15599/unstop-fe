import React from "react";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <React.Fragment>
      {/* <AssessmentOverview
        assessmentOverviewData={[
          {
            Icon: GlobeRedIcon,
            title: "Candidates",
            secondaryCount: 89,
            primaryCount: 11145,
            subTitle: "Total Candidates",
          },
          {
            Icon: GlobeRedIcon,
            title: "Candidates",
            secondaryCount: 89,
            primaryCount: 11145,
            subTitle: "Total Candidates",
          },
        ]}
      /> */}
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
