import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, NavLink } from "react-router-dom";
import { Row, Col, Table, Spinner } from "reactstrap";

import classes from "./BodyMyOrder.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import PageTab from "../../components/PageTab/PageTab";
import Button from "../../components/Button/Button";
import RowItem from "./RowItem/RowItem";
import ModalMyOrder from "../../components/ModalMyOrder/ModalMyOrder";
import ModalShoppingDetail from "../../components/ModalShoppingDetail/ModalShoppingDetail";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class BodyMyOrder extends PureComponent {
  state = {
    dataOrder: this.props.dataOrder,
    modalOpen: false,
    modalOpenDetail: false,
  };

  onContinueShopping = () => {
    this.props.history.push("/");
  };

  onModalToggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  onModalToggleDetail = () => {
    this.setState({
      modalOpenDetail: !this.state.modalOpenDetail,
    });
  };

  onCancelOrderHandler = (token, orderId) => {
    this.props.onCancelOrder(token, orderId);
    this.onModalToggle();
  };

  onDetailOrderHandler = (token, orderId) => {
    this.props.onDetailOrder(token, orderId);
    this.onModalToggleDetail();
    this.props.onClearDetailOrder();
  };

  render() {
    const redirect = !this.props.isAuth ? <Redirect to="/" /> : "";

    const rowItem = this.props.dataOrder.map((item) => (
      <RowItem
        id={item.id}
        purchaseDate={item.created_at}
        totalPrice={item.total_price}
        postalFee={item.postal_fee}
        status={item.status_order}
        statusNo={item.status}
        cancelOrder={() => this.onCancelOrderHandler(this.props.token, item.id)}
        detailOrder={() => this.onDetailOrderHandler(this.props.token, item.id)}
      />
    ));

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
            <PageTab title="My Order" path="My Order" />
            <Table className={classes.TableMyOrder + " mt-4"} borderless>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>TOTAL PRICE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rowItem}</tbody>
            </Table>
            <Row className="mt-5">
              <Col xs="2">
                <Button
                  classBtn={classes.BtnCS + " btn btn-dark mb-2"}
                  size="sm"
                  clicked={this.onContinueShopping}
                >
                  CONTINUE SHOPPING
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <ModalMyOrder
          modalOpen={this.state.modalOpen}
          toggle={this.onModalToggle}
        />
        <ModalShoppingDetail
          modalOpen={this.state.modalOpenDetail}
          toggle={this.onModalToggleDetail}
        />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token ? true : false,
    token: state.auth.token,
    dataOrder: state.order.dataOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelOrder: (token, orderId) =>
      dispatch(actionCreators.cancelOrder(token, orderId)),
    onDetailOrder: (token, orderId) =>
      dispatch(actionCreators.detailOrder(token, orderId)),
    onClearDetailOrder: () => dispatch(actionCreators.clearDetailOrder()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BodyMyOrder)
);
