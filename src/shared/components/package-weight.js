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
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ weight: value });
  };
}
