import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  Card,
  CardBody,
  CardText,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import classes from "./BodyCheckout.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import PageTab from "../../components/PageTab/PageTab";
import Button from "../../components/Button/Button";
import Cover from "../../assets/Images/cover.svg";

class BodyHomepage extends Component {
  render() {
    return (
      <Aux>
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
              <tbody>
                <tr>
                  <td className="p-0">
                    <Card className="p-0 border-0">
                      <CardBody>
                        <Row>
                          <Col xs="3">
                            <img src={Cover} alt="" width="90%" />
                          </Col>
                          <Col xs="5" className="d-flex align-items-center">
                            <CardText>
                              <h6 style={{ margin: 0, fontWeight: "bold" }}>
                                The Upside of Falling
                              </h6>
                              <small className="text-muted">Alex Light</small>
                            </CardText>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </td>
                  <td className="pt-5">
                    <small>
                      <strong>Rp. 120.000</strong>
                    </small>
                  </td>
                  <td className="d-flex justify-content-center pt-5">
                    <InputGroup style={{ width: "50%" }}>
                      <InputGroupAddon addonType="prepend">
                        <Button size="sm" classBtn="btn btn-light">
                          -
                        </Button>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="border-0 text-center"
                        value="0"
                        size="sm"
                        style={{ fontWeigth: "bold" }}
                      />
                      <InputGroupAddon addonType="append">
                        <Button size="sm" classBtn="btn btn-light">
                          +
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="pt-5">
                    <small>
                      <strong>Rp. 120.000</strong>
                    </small>
                  </td>
                  <td className="pt-5">
                    <small>
                      <strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </strong>
                    </small>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row className="justify-content-between">
              <Col xs="2">
                <Button classBtn="btn btn-dark mb-2" size="sm">
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
                <b>Rp. 120.000</b>
              </Col>
            </Row>
            <Row>
              <Col xs="9"></Col>
              <Col
                xs="3"
                className="d-flex align-items-center justify-content-center float-right"
              >
                <Button classBtn="btn" size="sm" background="#234090">
                  <small>CHECKOUT</small>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BodyHomepage;
