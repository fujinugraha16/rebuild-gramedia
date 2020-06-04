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
  Spinner,
} from "reactstrap";

import classes from "./CartModal.module.css";
import ListGroupItem from "./ListGroupItem/ListGroupItem";
import { FaTimes } from "react-icons/fa";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class CartModal extends PureComponent {
  state = {
    subtotal: 0,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.dataCart.length !== this.props.dataCart.length) {
      this.setState({
        loading: false,
      });
    }
  }

  removeHandler = (token, cartId) => {
    this.props.onDeleteItemCart(token, cartId);
    this.props.onInitCart(token);
    this.setState({
      loading: true,
    });
  };

  render() {
    const spinner = (
      <Row className="d-flex justify-content-center">
        <Spinner
          color="light"
          style={{ width: "7rem", height: "7rem", margin: "20px auto" }}
        />
      </Row>
    );

    let total = 0;
    const listGroup = !this.props.dataCart.length ? (
      <ListGroup className="text-center">
        Please, add item to cart. Thankyou {":)"}
      </ListGroup>
    ) : (
      <ListGroup>
        {this.props.dataCart.map((item) => {
          total += parseInt(item.book.price) * parseInt(item.quantity);
          this.setState({
            subtotal: total,
          });
          return (
            <ListGroupItem
              book={item.book}
              quantity={item.quantity}
              key={item.book_id}
              rmvClicked={() => this.removeHandler(this.props.token, item.id)}
              background="#2d3034"
              border="#2d3034"
            />
          );
        })}
      </ListGroup>
    );

    const subtotal = `Rp. ${
      this.props.dataCart.length ? rupiahFormat(this.state.subtotal) : 0
    }`;

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
                <div
                  className={classes.BtnClose}
                  onClick={this.props.clicked}
                  style={{ cursor: "pointer" }}
                >
                  <FaTimes />
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>{this.state.loading ? spinner : listGroup}</CardBody>
          <CardFooter>
            <Row className="d-flex justify-content-between my-2 px-3">
              <Col>Subtotal</Col>
              <Col className="text-right">
                {this.state.loading ? <Spinner size="sm" /> : subtotal}
              </Col>
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
                  disabled={!this.props.dataCart.length}
                  style={{
                    cursor: this.props.dataCart.length
                      ? this.state.loading
                        ? "not-allowed"
                        : "pointer"
                      : "not-allowed",
                  }}
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
    token: state.auth.token,
    dataCart: state.cart.dataCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItemCart: (token, cartId) =>
      dispatch(actionCreators.deleteItemCart(token, cartId)),
    onInitCart: (token) => dispatch(actionCreators.initCart(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
