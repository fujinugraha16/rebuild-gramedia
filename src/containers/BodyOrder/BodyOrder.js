import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

import classes from "./BodyOrder.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";

import PageTab from "../../components/PageTab/PageTab";
import Button from "../../components/Button/Button";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";
import SelectUI from "../../components/UI/SelectUI/SelectUI";

class BodyOrder extends PureComponent {
  state = {
    subtotal: 0,
    selectedProvince: null,
    selectedCity: null,
    selectedDistrict: null,
    selectedCourier: null,
    selectedShipping: null,
    rawData: null,
  };

  componentDidMount() {
    this.props.onInitProvince(this.props.token);
    this.props.onInitCourier(this.props.token);
    this.props.onInitListAddress(this.props.token);
  }

  componentDidUpdate(prevState) {
    if (prevState.selectedProvince !== this.state.selectedProvince) {
      this.setState({
        selectedCity: null,
        selectedDistrict: null,
      });
    }

    if (prevState.selectedCity !== this.state.selectedCity) {
      this.setState({
        selectedDistrict: null,
      });
    }
  }

  onContinueShopping = () => {
    this.props.history.push("/");
  };

  selectedProvinceHandler = (selectedProvince) => {
    this.setState({
      selectedProvince,
    });

    if (selectedProvince) {
      this.props.onInitCity(this.props.token, selectedProvince.value);
      console.log(`Option province:`, selectedProvince);
    }
  };

  selectedCityHandler = (selectedCity) => {
    this.setState({
      selectedCity,
    });

    if (selectedCity) {
      this.props.onInitDistrict(this.props.token, selectedCity.value);
      console.log(`Option city:`, selectedCity);
    }
  };

  selectedDistrictHandler = (selectedDistrict) => {
    this.setState({
      selectedDistrict,
    });

    if (selectedDistrict) {
      console.log(`Option district:`, selectedDistrict);
    }
  };

  selectedCourierHandler = (selectedCourier) => {
    this.setState({
      selectedCourier,
    });

    if (selectedCourier) {
      console.log(`Option courier:`, selectedCourier);
      let totalQty = 0;
      this.props.dataCart.map((item) => {
        totalQty = totalQty + item.quantity;
        this.setState({
          totalQty: this.state.Qty + parseInt(item.quantity),
        });
      });

      this.props.address.map((item) => {
        this.props.onInitShippingMethod(this.props.token, {
          destination: item.district,
          weight: 250 * totalQty,
          courier: selectedCourier.value,
          label: selectedCourier.label,
        });
      });
    }
  };

  selectedShippingHandler = (selectedShipping) => {
    this.setState({
      selectedShipping,
    });

    if (selectedShipping) {
      const books = [];
      this.props.dataCart.map((item) => {
        books.push({
          id: item.book_id,
          quantity: item.quantity,
        });
      });

      const ongkir = selectedShipping.value;
      const courier = this.state.selectedCourier.value;

      this.setState({
        rawData: {
          books,
          ongkir,
          courier,
        },
      });

      console.log(`Option shipping:`, selectedShipping);
    }
  };

  onCalculateShippingHandler = () => {
    let totalQty = 0;
    this.props.dataCart.map((item) => {
      totalQty = totalQty + item.quantity;
      this.setState({
        totalQty: this.state.Qty + parseInt(item.quantity),
      });
    });

    this.props.address.map((item) => {
      this.props.onInitShippingMethod(this.props.token, {
        destination: item.district,
        weight: 250 * totalQty,
        courier: this.state.selectedCourier.value,
      });
    });
  };

  onOrderHandler = () => {
    this.props.onPlaceOrder(this.props.token, this.state.rawData);
    // console.log(JSON.stringify(JSON.stringify(this.state.rawData)));
  };

  render() {
    const redirect =
      !this.props.dataCart.length || !this.props.isAuth ? (
        <Redirect to="/" />
      ) : (
        ""
      );

    let total = 0;
    const listGroup = (
      <ListGroup>
        {this.props.dataCart.map((item) => {
          total += parseInt(item.book.price) * parseInt(item.quantity);
          this.setState({
            subtotal: total,
          });
          return (
            <ListGroupItem
              className="border-0"
              key={item.id}
              style={{ width: "100%" }}
            >
              <Row className="d-flex align-items-center">
                <Col xs="4">
                  <div
                    width="10"
                    style={{ overflow: "hidden", height: "60px" }}
                  >
                    <img src={item.book.cover} alt="" width="70" />
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="mb-2">
                    <small>
                      <b>{item.book.title}</b>
                    </small>
                  </Row>
                  <Row className="mb-2">
                    <small>
                      Rp. {rupiahFormat(item.book.price * item.quantity)}
                    </small>
                  </Row>
                </Col>
                <Col xs="1">
                  <div
                    className="border pt-2 text-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #444 !important",
                    }}
                  >
                    {item.quantity}
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );

    return (
      <Aux>
        {redirect}
        <Row
          style={{
            padding: "0 170px",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Col>
            <PageTab title="Order" path="Order" />
            <Row className="mt-5">
              <Col xs="7">
                <Card className="border-dark rounded">
                  <CardHeader tag="h6" className={classes.CardHeaderOrder}>
                    <strong>Delivery</strong>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>
                      <b>Address</b>
                    </CardTitle>
                    <hr className="my-2" />
                    {/* <Row>
                      <Col>
                        <SelectUI
                          id="province"
                          options={this.props.province}
                          selectedHandler={this.selectedProvinceHandler}
                        />
                      </Col>
                      <Col>
                        <SelectUI
                          id="city"
                          options={this.props.city}
                          selectedHandler={this.selectedCityHandler}
                        />
                      </Col>
                      <Col>
                        <SelectUI
                          id="district"
                          options={this.props.district}
                          selectedHandler={this.selectedDistrictHandler}
                        />
                      </Col>
                    </Row> */}

                    {/* <Row className="mt-2">
                      <Col>
                        <Label for="detail_address">Detail Address</Label>
                        <Input
                          type="textarea"
                          name="text"
                          id="detail_address"
                        />
                      </Col>
                    </Row> */}

                    <Row>
                      {this.props.address.map((item) => (
                        <Col>
                          <label>
                            <b>{item.name}</b>
                          </label>
                          <p className="text-muted m-0">{item.address}</p>
                          <p className="text-muted m-0">
                            {item.district_name}, {item.city_name},{" "}
                            {item.province_name}, 40411
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <hr className="my-2" />

                    <Row>
                      <Col>
                        <Button
                          classBtn={classes.BtnChoose + " rounded-pill"}
                          size="sm"
                        >
                          <FaExchangeAlt /> choose address
                        </Button>
                      </Col>
                    </Row>

                    <CardTitle className="mt-3">
                      <b>Delivery Method</b>
                    </CardTitle>
                    <Row>
                      <Col xs="6">
                        <SelectUI
                          id="courier"
                          options={this.props.courier}
                          selectedHandler={this.selectedCourierHandler}
                        />
                      </Col>
                      <Col xs="6">
                        <SelectUI
                          id="shipping"
                          options={this.props.shipping}
                          selectedHandler={this.selectedShippingHandler}
                          disabled={!this.state.selectedCourier}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <Button
                          classBtn={
                            (this.state.selectedCourier &&
                            this.state.selectedShipping
                              ? classes.BtnCS
                              : classes.BtnNotAllowed) +
                            " btn btn-dark rounded mt-2"
                          }
                          size="sm"
                          width="100%"
                          disabled={
                            !this.state.selectedCourier ||
                            !this.state.selectedShipping
                          }
                          clicked={this.onCalculateShippingHandler}
                        >
                          CALCULATE SHIPPING
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Row className="mt-4">
                  <Col>
                    <Button
                      classBtn={classes.BtnCS + " btn btn-dark mb-2 rounded"}
                      size="sm"
                      clicked={this.onContinueShopping}
                    >
                      CONTINUE SHOPPING
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs="1"></Col>
              <Col xs="4">
                <Row className="mb-4">
                  <Card
                    className="border-dark rounded"
                    style={{ width: "100%" }}
                  >
                    <CardHeader tag="h6" className={classes.CardHeaderOrder}>
                      <strong>Summary</strong>
                    </CardHeader>
                    <CardBody
                      className="p-1"
                      style={{
                        maxHeight: "227px",
                        overflow: "scroll",
                      }}
                    >
                      {listGroup}
                    </CardBody>
                  </Card>
                </Row>
                <Row>
                  <Card
                    className="border-dark rounded"
                    style={{ width: "100%" }}
                  >
                    <CardHeader tag="h6" className={classes.CardHeaderOrder}>
                      <strong>Payment</strong>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col>
                          <small>
                            <b>Total Price</b>
                          </small>
                        </Col>
                        <Col className="text-right">
                          <small>Rp. {rupiahFormat(this.state.subtotal)}</small>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <small>
                            <b>Shipping Price</b>
                          </small>
                        </Col>
                        <Col className="text-right">
                          <small>
                            Rp.{" "}
                            {this.state.selectedShipping
                              ? rupiahFormat(this.state.selectedShipping.value)
                              : 0}
                          </small>
                        </Col>
                      </Row>
                      <hr className="border border-secondary" />
                      <Row>
                        <Col>
                          <small>
                            <b>Total Payment</b>
                          </small>
                        </Col>
                        <Col className="text-right">
                          <small>
                            Rp.{" "}
                            {this.state.selectedShipping
                              ? rupiahFormat(
                                  this.state.selectedShipping.value +
                                    this.state.subtotal
                                )
                              : rupiahFormat(this.state.subtotal)}
                          </small>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col className="d-flex justify-content-end">
                          <Button
                            classBtn={
                              (this.state.selectedCourier &&
                              this.state.selectedShipping
                                ? classes.BtnCS
                                : classes.BtnNotAllowed) + " btn"
                            }
                            size="sm"
                            background="#234090"
                            clicked={this.onOrderHandler}
                            width="30%"
                            disabled={
                              !this.state.selectedCourier ||
                              !this.state.selectedShipping
                            }
                          >
                            <small>
                              <b>ORDER</b>
                            </small>
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
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
    subtotal: state.cart.subtotal,
    token: state.auth.token,
    province: state.order.province,
    city: state.order.city,
    district: state.order.district,
    courier: state.order.courier,
    address: state.order.address,
    shipping: state.order.shipping,
    isAuth: state.auth.token ? true : false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProvince: (token) => dispatch(actionCreators.initProvince(token)),
    onInitCity: (token, provinceId) =>
      dispatch(actionCreators.initCity(token, provinceId)),
    onInitDistrict: (token, cityId) =>
      dispatch(actionCreators.initDistrict(token, cityId)),
    onInitCourier: (token) => dispatch(actionCreators.initCourier(token)),
    onInitListAddress: (token) =>
      dispatch(actionCreators.initListAddress(token)),
    onInitShippingMethod: (token, dataShipping) =>
      dispatch(actionCreators.initShippingMethod(token, dataShipping)),
    onSetShippingMethod: (shipping, shippingMethod) =>
      dispatch(actionCreators.setShippingMethod(shipping, shippingMethod)),
    onPlaceOrder: (token, rawData) =>
      dispatch(actionCreators.placeOrder(token, rawData)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BodyOrder)
);
