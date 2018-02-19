import React from "react";
import { render } from "react-dom";

import { ShippingLabel } from './components/shipping-label';

class App extends React.Component{
  render(){
    return (
      <ShippingLabel/>
    )
  }
}


render(<App />, document.getElementById("root"));
