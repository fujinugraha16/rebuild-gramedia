import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BodyHomepage from "../../containers/BodyHomepage/BodyHomepage";
import BodyDetailBook from "../../containers/BodyDetailBook/BodyDetailBook";
import BodyCheckout from "../../containers/BodyCheckout/BodyCheckout";
import BodyOrder from "../../containers/BodyOrder/BodyOrder";
import ModalAuth from "../../components/ModalAuth/ModalAuth";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <ModalAuth />
        <Switch>
          <Route path="/checkout" component={BodyCheckout} />
          <Route path="/order" component={BodyOrder} />
          <Route path="/detail-book/:slug" component={BodyDetailBook} />
          <Route path="/" exact component={BodyHomepage} />
        </Switch>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
