import React from "react";
// import '../spinnerLoader/'
import "./spinner.css";
const SpinnerLoader = () => {
  return (
    <div className="spinner" data-testid="spinner">
      <p className="p" data-testid="spinner-Element"></p>
    </div>
  );
};

export default SpinnerLoader;
