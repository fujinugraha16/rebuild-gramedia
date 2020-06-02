import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import classes from "./BodyOrder.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import PageTab from "../../components/PageTab/PageTab";
import Button from "../../components/Button/Button";

class BodyOrder extends Component {
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
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>

                    <CardTitle>
                      <b>Delivery Method</b>
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="1"></Col>
              <Col xs="4">
                <Row className="mb-4">
                  <Card className="border-dark rounded">
                    <CardHeader tag="h6" className={classes.CardHeaderOrder}>
                      <strong>Summary</strong>
                    </CardHeader>
                    <CardBody></CardBody>
                  </Card>
                </Row>
                <Row>
                  <Card className="border-dark rounded">
                    <CardHeader tag="h6" className={classes.CardHeaderOrder}>
                      <strong>Payment</strong>
                    </CardHeader>
                    <CardBody></CardBody>
                  </Card>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-between mt-4">
              <Col xs="3">
                <Button classBtn="btn btn-dark mb-2 rounded" size="sm">
                  CONTINUE SHOPPING
                </Button>
                <Button classBtn="btn btn-dark rounded" size="sm">
                  CALCULATE SHIPPING
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BodyOrder;
