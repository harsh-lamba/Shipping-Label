import React from "react";

export class SenderAddress extends React.Component {
  state = {
    sender: ""
  };
  render() {
    const { sender } = this.state;
    return (
      <form>
        <label for="sender">
          Receiver Address
          <input
            id="sender"
            type="text"
            value={sender}
            onChange={this.onInputValueChange}
          />
        </label>
        {this.state.sender}
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = e => {
    this.setState({ sender: e.target.value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
