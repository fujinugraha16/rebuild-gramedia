import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BodyHomepage from "../BodyHomepage/BodyHomepage";
import BodyCheckout from "../../containers/BodyCheckout/BodyCheckout";
import BodyOrder from "../../containers/BodyOrder/BodyOrder";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        {/* <BodyHomepage /> */}
        {/* <BodyCheckout /> */}
        <BodyOrder />
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
