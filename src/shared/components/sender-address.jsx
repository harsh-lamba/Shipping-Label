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
        {this.state.sender}
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ sender: value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
