import React from "react";

import { PackageWeight } from "../shared/components/package-weight";

export class ShippingLabel extends React.Component {
  render() {
    return (
      <div>
        Wizrad Component
        <PackageWeight />
      </div>
    );
  }
}
