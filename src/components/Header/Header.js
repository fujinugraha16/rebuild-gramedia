import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import classes from "./Header.module.css";
import Logo from "../../assets/Logo/Logo.svg";
import Troli from "../../assets/Icon/troli.svg";
import Avatar from "../../assets/Icon/avatar.svg";

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
              <NavItem>
                <NavLink href="#" className={classes.Active}>
                  Bookstore
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Wishlist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">My Order</NavLink>
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

export default Header;
