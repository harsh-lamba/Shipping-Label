import React from "react";

export class ReceiverAddress extends React.Component {
  state = {
    receiver: ""
  };
  render() {
    const { receiver } = this.state;
    return (
      <form>
        <label for="receiver">
          Receiver Address
          <input
            id="receiver"
            type="text"
            value={receiver}
            onChange={this.onInputValueChange}
          />
        </label>
        {this.state.receiver}
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = e => {
    this.setState({ receiver: e.target.value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
