import React, { Component } from "react";

export const DisplaySteps = props => {
  return (
    <div>
      {props.steps &&
        props.steps.map((step, index) => {
          return (
            <span
              key={`displaySteps${index}`}
              style={{ marginRight: 100, display: "inline-block" }}
            >
              {index + 1}
            </span>
          );
        })}
    </div>
  );
};
