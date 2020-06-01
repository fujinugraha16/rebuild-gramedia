import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Layout from "./hoc/Layout/Layout";

import * as actionCreators from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.onInitAuth();
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitAuth: () => dispatch(actionCreators.initAuth()),
  };
};

export default connect(null, mapDispatchToProps)(App);
