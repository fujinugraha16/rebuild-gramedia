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
import { NavLink, withRouter } from "react-router-dom";

import classes from "./Header.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Logo from "../../assets/Logo/Logo.svg";
import Troli from "../../assets/Icon/troli.svg";
import Avatar from "../../assets/Icon/avatar.svg";
import CartModal from "../CartModal/CartModal";

import * as actionCreators from "../../store/actions";

class Header extends Component {
  state = {
    isOpen: false,
    dropDownOpen: false,
    cartModalOpen: false,
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

  toggleCartModal = () => {
    this.setState({
      cartModalOpen: !this.state.cartModalOpen,
    });
  };

  closeDropdown = () => {
    this.setState({
      dropDownOpen: false,
    });
  };

  render() {
    const { pathname } = this.props.location;

    const navText = this.props.isAuth ? (
      <div>
        <NavbarText
          className={
            pathname === "/checkout" || pathname === "/order"
              ? "d-none"
              : "mr-2"
          }
          style={{ position: "relative" }}
        >
          <div
            className={classes.Circle + " rounded-circle bg-danger"}
            onClick={this.toggleCartModal}
            style={{ cursor: "pointer" }}
          >
            {this.props.amountCart}
          </div>
          <img alt="" src={Troli} onClick={this.toggleCartModal} />
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
                  <NavLink to="/my-order">My Order</NavLink>
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
        <CartModal
          isOpen={this.state.cartModalOpen}
          clicked={this.toggleCartModal}
          dataCart={this.props.dataCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token ? true : false,
    dataAuth: state.auth.dataAuth,
    token: state.auth.token,
    dataCart: state.cart.dataCart,
    amountCart: state.cart.amountCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
    onModalLogout: (isLogout) => dispatch(actionCreators.modalLogout(isLogout)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
