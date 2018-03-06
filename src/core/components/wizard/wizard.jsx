import React, { Component } from "react";
import PropTypes from "prop-types";

import { DisplaySteps } from "../../../shared/components/display-steps";
import WizardStep from "../wizard-step/wizard-step";

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
        <WizardStep
          startIndex={0}
          endIndex={stepsLength}
          currentIndex={currentStep}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        >
          <CurrentComponent ref={step => (this.stepRef = step)} />
        </WizardStep>
      </div>
    );
  }

  onPreviousClick = index => {
    this.setState({ currentStep: index });
  };

  onNextClick = index => {
    this.setState({ currentStep: index });

    let stepValue = this.state.context.slice();
    stepValue[index] = this.stepRef.state;

    this.setState({
      context: [...stepValue]
    });

    if (this.state.currentStep === this.props.steps.length - 1) {
      this.props.onComplete(stepValue);
    }
  };
}
