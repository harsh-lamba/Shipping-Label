import React from "react";

import { PackageWeight } from "../shared/components/package-weight";
import { ReceiverAddress } from "../shared/components/receiver-address";
import { SenderAddress } from "../shared/components/sender-address";

export class ShippingLabel extends React.Component {
  render() {
    return (
      <div>
        Wizrad Component
        <ReceiverAddress />
        <SenderAddress />
      </div>
    );
  }
}
