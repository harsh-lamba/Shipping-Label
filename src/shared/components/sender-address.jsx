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
        <div>
          <button onClick={() => this.props.onPreviousClick}>Previous</button>
          <button onClick={() => this.props.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = value => {
    this.setState({ sender: value });
  };
}
