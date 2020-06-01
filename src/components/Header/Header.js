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
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Logo from "../../assets/Logo/Logo.svg";
import Troli from "../../assets/Icon/troli.svg";
import Avatar from "../../assets/Icon/avatar.svg";

import * as actionCreators from "../../store/actions";

class Header extends Component {
  state = {
    isOpen: false,
    dropDownOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    });

    this.props.onModalLogout(this.state.dropDownOpen);
  };

  closeDropdown = () => {
    this.setState({
      dropDownOpen: false,
    });
  };

  render() {
    const navText = this.props.isAuth ? (
      <div>
        <NavbarText className="mr-2">
          <img alt="" src={Troli} />
        </NavbarText>
        <NavbarText className="mr-2">
          <img alt="" src={Avatar} onClick={this.toggleDropdown} />
        </NavbarText>
        <NavbarText onClick={this.toggleDropdown} style={{ cursor: "pointer" }}>
          Hi, {this.props.dataAuth.data.name}
        </NavbarText>
      </div>
    ) : (
      <NavbarText>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          onClick={this.props.onModalToggle}
        >
          Login
        </Button>
      </NavbarText>
    );

    const dropDown = (
      <div
        className={
          this.state.dropDownOpen ? classes.MenuDropdown + " shadow" : "d-none"
        }
      >
        <Button
          className={classes.BtnPrimary}
          color="secondary"
          onMouseLeave={this.toggleDropdown}
          onClick={this.props.onModalToggle}
        >
          Logout
        </Button>
      </div>
    );

    return (
      <div
        className={classes.Header + " shadow fixed-top"}
        onMouseLeave={this.closeDropdown}
      >
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
                {this.props.isAuth ? (
                  <NavLink to="/order" activeClassName={classes.active}>
                    My Order
                  </NavLink>
                ) : (
                  <a href="#" onClick={this.props.onModalToggle}>
                    My Order
                  </a>
                )}
              </NavItem>
            </Nav>
            {navText}
          </Collapse>
        </Navbar>
        {dropDown}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token ? true : false,
    dataAuth: state.auth.dataAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
    onModalLogout: (isLogout) => dispatch(actionCreators.modalLogout(isLogout)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
