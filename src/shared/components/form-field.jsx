import React from "react";

export class FormField extends React.Component {
  render() {
    const {value=''} = this.props; 
    return (
      <label key={this.props.id}>
        {this.props.label}
        <input type="text" value={this.props.value} onChange={this.onChange} />
      </label>
    );
  }

  onChange = e => {
    this.props.onValueChange(e.target.value);
  };
}
