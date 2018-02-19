import React from "react";

export class PackageWeight extends React.Component {
  state = {
    weight: ""
  };
  render() {
    const { weight } = this.state;
    return (
      <form>
        <label for="weight">
          Package Weight
          <input
            id="weight"
            type="text"
            value={weight}
            onChange={this.onInputValueChange}
          />
        </label>
        <div>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      </form>
    );
  }

  onInputValueChange = e => {
    this.setState({ package: e.target.value });
  };

  onPreviousClick = () => {};

  onNextClick = () => {};
}
