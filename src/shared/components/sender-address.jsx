import React from "react";

import { FormField } from "./form-field";

export class SenderAddress extends React.Component {
  state = {
    sender: ""
  };
  render() {
    const { sender } = this.state;
    return (
      <form>
        <FormField
          id="sender"
          label="Sender Address:"
          onValueChange={this.onInputValueChange}
        />
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ sender: value });
  };
}
