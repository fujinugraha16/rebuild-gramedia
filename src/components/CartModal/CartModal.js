import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Row,
  Col,
  ListGroup,
} from "reactstrap";

import classes from "./CartModal.module.css";
import ListGroupItem from "./ListGroupItem/ListGroupItem";

import * as actionCreators from "../../store/actions";

class CartModal extends PureComponent {
  render() {
    return (
      <div
        className={this.props.isOpen ? classes.CartModal + " shadow" : "d-none"}
      >
        <Card style={{ background: "#2d3034" }}>
          <CardHeader>
            <Row className="d-flex justify-content-between px-3 py-2">
              <Col>
                <small>MY CART</small>
              </Col>
              <Col className="text-right">
                <small
                  className={classes.BtnClose}
                  onClick={this.props.clicked}
                  style={{ cursor: "pointer" }}
                >
                  X
                </small>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ListGroup>
              {this.props.dataCart.map((item) => (
                <ListGroupItem
                  book={item.book}
                  quantity={item.quantity}
                  key={item.book_id}
                />
              ))}
            </ListGroup>
          </CardBody>
          <CardFooter>
            <Row className="d-flex justify-content-between my-2 px-3">
              <Col>Subtotal</Col>
              <Col className="text-right">Rp. 340.000</Col>
            </Row>
            <Row className="mb-3 px-3">
              <NavLink
                to="/checkout"
                className="d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                <Button
                  size="sm"
                  className={classes.BtnCheckout}
                  onClick={this.props.clicked}
                >
                  CONTINUE CHECKOUT
                </Button>
              </NavLink>
            </Row>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataCart: state.cart.dataCart,
  };
};

export default connect(mapStateToProps)(CartModal);
