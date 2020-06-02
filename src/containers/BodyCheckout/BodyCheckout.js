import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, NavLink } from "react-router-dom";
import { Row, Col, Table } from "reactstrap";

import classes from "./BodyCheckout.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import RowItem from "./RowItem/RowItem";
import PageTab from "../../components/PageTab/PageTab";
import Button from "../../components/Button/Button";
// import Cover from "../../assets/Images/cover.svg";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class BodyHomepage extends PureComponent {
  state = {
    subtotal: this.props.subtotal,
  };

  componentDidMount() {
    this.props.onInitCart(this.props.token);
  }

  onIncDecHandler = (token, bookId, value) => {
    this.props.onIncDecCart(token, bookId, value);
  };

  onRemoveHandler = (token, cartId) => {
    this.props.onDeleteItemCart(token, cartId);
  };

  onContinueShopping = () => {
    this.props.history.push("/");
  };

  render() {
    let total = 0;
    const rowItem = this.props.dataCart.map((item) => {
      total += parseInt(item.book.price) * parseInt(item.quantity);
      this.setState({
        subtotal: total,
      });
      return (
        <RowItem
          key={item.book_id}
          book={item.book}
          quantity={item.quantity}
          author={item.book.author}
          inc={() => this.onIncDecHandler(this.props.token, item.book_id, 1)}
          dec={() => this.onIncDecHandler(this.props.token, item.book_id, -1)}
          rmvClicked={() => this.onRemoveHandler(this.props.token, item.id)}
        />
      );
    });

    const redirect = !this.props.dataCart.length ? <Redirect to="/" /> : "";

    return (
      <Aux>
        {redirect}
        <Row
          style={{
            padding: "0 170px",
            marginTop: "100px",
            marginBottom: "75px",
          }}
        >
          <Col xs="12" className="p-0">
            <PageTab title="Checkout" path="Checkout" />
            <Table className={classes.TableCheckout + " mt-4"} borderless>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rowItem}</tbody>
            </Table>
            <Row className="justify-content-between">
              <Col xs="2">
                <Button
                  classBtn="btn btn-dark mb-2"
                  size="sm"
                  clicked={this.onContinueShopping}
                >
                  CONTINUE SHOPPING
                </Button>
                <Button classBtn="btn btn-dark" size="sm">
                  CALCULATE SHIPPING
                </Button>
              </Col>
              <Col
                xs="3"
                className={
                  classes.BoxCheckoutBottom +
                  " d-flex align-items-center justify-content-center"
                }
              >
                <small>SUBTOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
                <b>
                  Rp.{" "}
                  {this.props.dataCart.length
                    ? rupiahFormat(this.state.subtotal)
                    : 0}
                </b>
              </Col>
            </Row>
            <Row>
              <Col xs="9"></Col>
              <Col
                xs="3"
                className="d-flex align-items-center justify-content-center float-right"
              >
                <NavLink to="/order" style={{ width: "100%" }}>
                  <Button
                    classBtn="btn"
                    size="sm"
                    background="#234090"
                    width="100%"
                  >
                    <small>ORDER</small>
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataCart: state.cart.dataCart,
    token: state.auth.token,
    subtotal: state.cart.subtotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCart: (token) => dispatch(actionCreators.initCart(token)),
    onIncDecCart: (token, bookId, value) =>
      dispatch(actionCreators.incDecCart(token, bookId, value)),
    onDeleteItemCart: (token, cartId) =>
      dispatch(actionCreators.deleteItemCart(token, cartId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BodyHomepage)
);
