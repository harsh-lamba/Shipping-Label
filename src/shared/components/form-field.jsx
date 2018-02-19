import React from "react";

export class FormField extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <label key={this.props.id}>
        {this.props.label}
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </label>
    );
  }

  onChange = e => {
    this.setState({ value: e.target.value });
    this.props.onValueChange(e.target.value)
  };
}
