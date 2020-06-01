import React from "react";
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
  ListGroupItem,
} from "reactstrap";

import classes from "./CartModal.module.css";

const cartModal = (props) => (
  <div className={props.isOpen ? classes.CartModal + " shadow" : "d-none"}>
    <Card style={{ background: "#2d3034" }}>
      <CardHeader>
        <Row className="d-flex justify-content-between px-3 py-2">
          <Col>
            <small>MY CART</small>
          </Col>
          <Col className="text-right">
            <small
              className={classes.BtnClose}
              onClick={props.clicked}
              style={{ cursor: "pointer" }}
            >
              X
            </small>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <ListGroup>
          <ListGroupItem
            style={{ background: "#2d3034", borderColor: "#2d3034" }}
          >
            <Row className="px-2 py-1 d-flex align-items-center">
              <Col xs="3" className="p-0">
                <div
                  className="p-0"
                  style={{ width: "80px", height: "80px", overflow: "hidden" }}
                >
                  <img
                    src="https://cdn.gramedia.com/uploads/items/9786020522838_bExJO9f__w414_hauto.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs="7" className="pl-4">
                <Row className="mb-2">
                  <small>Woman in moonlight</small>
                </Row>
                <Row className="mb-2">
                  <small>Rp. 154.000</small>
                </Row>
                <Row>
                  <small className="text-muted">REMOVE</small>
                </Row>
              </Col>
              <Col xs="2">
                <div
                  className="border border-secondary pt-2 text-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  1
                </div>
              </Col>
            </Row>
          </ListGroupItem>
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
              onClick={props.clicked}
            >
              CONTINUE CHECKOUT
            </Button>
          </NavLink>
        </Row>
      </CardFooter>
    </Card>
  </div>
);

export default cartModal;
