import React from "react";
import "./spinner.css";

const Spinner = () => {
  const style = {
    padding: "0 180px",
    margin: "15px auto"
  };

  return (
    <div style={style}>
      <div className="lds-css ng-scope">
        <div
          style={{ width: "100%", height: "100%" }}
          className="lds-double-ring"
        >
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
