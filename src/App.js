import React from "react";

import SquaresYears from "./components/SquaresYears";
import SquaresWeeks from "./components/SquaresWeeks";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <h1>2-year calendar</h1>
      <p>For long-term trend tracking</p>
      <div style={{ height: "400px" }}>
        <SquaresYears />
      </div>
      <h1>4-week calendar</h1>
      <p>For short-term pulse checks</p>
      <div style={{ height: "400px" }}>
        <SquaresWeeks />
      </div>
    </div>
  );
};

export default App;
