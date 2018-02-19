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
        {this.state.receiver}
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ receiver: value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
