import React from "react";
import { render } from "react-dom";

import { ShippingLabel } from "./components/shipping-label";
import { SenderAddress } from "./shared/components/sender-address";
import { ReceiverAddress } from "./shared/components/receiver-address";
import { PackageWeight } from "./shared/components/package-weight";

class App extends React.Component {
  componentWillMount() {
    this.steps = [SenderAddress, ReceiverAddress, PackageWeight];
  }
  render() {
    return <ShippingLabel title="Wizard" steps={this.steps} />;
  }
}

render(<App />, document.getElementById("root"));
