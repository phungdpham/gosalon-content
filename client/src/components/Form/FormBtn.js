import React from "react";

export const FormBtn = props => (
  <button {...props}  className="btn btn-warning float-right mx-3 mb-3 mt-3">
    {props.children}
  </button>
);
