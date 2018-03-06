import React from "react";
import PropTypes from "prop-types";

import { Wizard } from "../core/components/wizard/wizard";
import { SenderAddress } from "../shared/components/sender-address";
import { ReceiverAddress } from "../shared/components/receiver-address";
import { PackageWeight } from "../shared/components/package-weight";

export class ShippingLabelMaker extends React.Component {
  state = {
    title: "Shipping Label Maker"
  };
  componentWillMount() {
    this.steps = [SenderAddress, ReceiverAddress, PackageWeight];
  }

  render() {
    return (
      <Wizard
        title={this.state.title}
        steps={this.steps}
        onComplete={this.onComplete}
      />
    );
  }

  onComplete = wizardContext => {
    console.log(wizardContext);
  };

  PropTypes = {
    steps: PropTypes.array,
    title: PropTypes.string
  };
}
