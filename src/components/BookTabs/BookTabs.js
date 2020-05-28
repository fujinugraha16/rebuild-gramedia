import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

import classes from "./BookTabs.module.css";
import GridIcon from "../../assets/Icon/grid.svg";
import ListIcon from "../../assets/Icon/list.svg";

const bookTabs = () => {
  return (
    <div className={classes.BookTabs}>
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink className={classes.Active} href="#">
              For You
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">New Release</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Best Seller</NavLink>
          </NavItem>
        </Nav>
        <Nav
          className="border border-light rounded-pill p-2 px-3"
          style={{ marginLeft: "230px" }}
        >
          <NavItem className="mr-3">
            <img src={GridIcon} alt="" />
          </NavItem>
          <NavItem>
            <img src={ListIcon} alt="" />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default bookTabs;
