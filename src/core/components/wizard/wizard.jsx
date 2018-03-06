import React, { Component } from "react";
import PropTypes from "prop-types";

import { DisplaySteps } from "../../../shared/components/display-steps";

export class Wizard extends Component {
  static propTypes = {
    title: PropTypes.string,
    steps: PropTypes.array,
    onComplete: PropTypes.func
  };

  state = {
    context: [],
    currentStep: 0
  };

  render() {
    const { steps, title, onComplete } = this.props;
    const { currentStep } = this.state;
    const CurrentComponent = steps[currentStep];
    const stepsLength = steps.length - 1;

    return (
      <div>
        <h1>{title}</h1>
        <DisplaySteps steps={steps} />
        <CurrentComponent ref={step => (this.stepRef = step)} />
        <div>
          {
            this.state.currentStep !== 0 && (
            <button onClick={this.onPreviousClick}>Previous</button>
          )}
          <button onClick={this.onNextClick}>
            {
             currentStep === stepsLength?
              <span>Complete</span> :
              <span>Next</span>
            }
          </button>
        </div>
      </div>
    );
  }

  onPreviousClick = e => {
    e.preventDefault();
    this.setState({
      currentStep:
        this.state.currentStep === 0
          ? this.state.currentStep
          : this.state.currentStep - 1
    });
  };

  onNextClick = e => {
    e.preventDefault();
    let stepValue = this.state.context.slice();
    console.log(stepValue);
    stepValue[this.state.currentStep] = this.stepRef.state;
    this.setState({
      currentStep:
        this.state.currentStep === this.props.steps.length - 1
          ? this.state.currentStep
          : this.state.currentStep + 1
    });

    this.setState({
      context: [...stepValue]
    });

    if (this.state.currentStep === (this.props.steps.length-1)){
      this.props.onComplete(stepValue)
    }
  };
}
