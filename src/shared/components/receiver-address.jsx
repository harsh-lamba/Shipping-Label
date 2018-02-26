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
        <div>
          <button onClick={this.props.onPreviousClick}>Previous</button>
          <button onClick={this.props.onNextClick.bind(this.state.receiver)}>
            Next
          </button>
        </div>
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ receiver: value });
  };
}
