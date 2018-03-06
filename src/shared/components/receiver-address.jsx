import React from "react";

import { FormField } from "./form-field";

export class ReceiverAddress extends React.Component {
  state = {
    receiver: ""
  };
  render() {
    const { receiver } = this.state;
    return (
      <form>
        <FormField
          id="receiver"
          label="Receiver Address:"
          onValueChange={this.onInputValueChange}
        />
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ receiver: value });
  };
}
