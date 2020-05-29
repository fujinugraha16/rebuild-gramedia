import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import Logo from "../../assets/Logo/Logo.svg";
import Troli from "../../assets/Icon/troli.svg";
import Avatar from "../../assets/Icon/avatar.svg";

import * as actionCreators from "../../store/actions";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className={classes.Header + " shadow fixed-top"}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#">
            <img alt="" src={Logo} style={{ width: "85%" }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="mr-4">
                <NavLink to="/" exact activeClassName={classes.active}>
                  Bookstore
                </NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <a href="#" onClick={this.props.onModalToggle}>
                  My Order
                </a>
                {/* <NavLink to="/order" activeClassName={classes.active}>
                  My Order
                </NavLink> */}
              </NavItem>
            </Nav>
            <NavbarText className="mr-2">
              <img alt="" src={Troli} />
            </NavbarText>
            <NavbarText className="mr-2">
              <img alt="" src={Avatar} />
            </NavbarText>
            <NavbarText>
              Hi, <b>Fuji</b>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
