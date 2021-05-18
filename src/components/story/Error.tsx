import React from "react";
import { Err } from "src/interfaces";


const ErrorComp = ({errorMessage}:Err) => {
  return (
    <div>
      <h3 className="request-error">{errorMessage}</h3>
    </div>
  );
};

export default ErrorComp;
