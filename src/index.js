import React from "react";
import { render } from "react-dom";

import { ShippingLabelMaker } from "./components/shipping-label";

class App extends React.Component {
  render() {
    return <ShippingLabelMaker />;
  }
}

render(<App />, document.getElementById("root"));
