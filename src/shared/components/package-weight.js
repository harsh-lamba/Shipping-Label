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
        {this.state.weight}
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = e => {
    this.setState({ weight: e.target.value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
