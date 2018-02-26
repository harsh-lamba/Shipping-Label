import React from "react";
import PropTypes from "prop-types";

import { DisplaySteps } from "../shared/components/display-steps";

export class ShippingLabel extends React.Component {
  state = {
    currentStep: 0
  };

  render() {
    const { title, steps } = this.props;
    const CurrentComponent = steps[this.state.currentStep];
    return (
      <div>
        <h1>{title}</h1>
        <DisplaySteps steps={steps} />
        {
          <CurrentComponent
            onPreviousClick={this.onPreviousClick.bind(this)}
            onNextClick={this.onNextClick.bind(this)}
          />
        }
      </div>
    );
  }

  onPreviousClick(e) {
    e.preventDefault();
    this.setState({
      currentStep:
        this.state.currentStep === 0
          ? this.state.currentStep
          : this.state.currentStep - 1
    });
  }


  onNextClick(e) {
    e.preventDefault();
    this.setState({
      currentStep:
        this.state.currentStep === this.props.steps.length - 1
          ? this.state.currentStep
          : this.state.currentStep + 1
    });
  };

  PropTypes = {
    steps: PropTypes.array,
    title: PropTypes.string,
    onComplete: PropTypes.func
  };
}
