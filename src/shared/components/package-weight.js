import React from "react";

import { FormField } from "./form-field";

export class PackageWeight extends React.Component {
  state = {
    weight: ""
  };
  render() {
    const { weight } = this.state;
    return (
      <form>
        <FormField
          id="weight"
          label="Package Weight"
          onValueChange={this.onInputValueChange}
        />
        <div>
          <button onClick={this.props.onPreviousClick}>Previous</button>
          <button onClick={this.props.onNextClick.bind(this.state.weight)}>
            Next
          </button>
        </div>
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ weight: value });
  };
}
