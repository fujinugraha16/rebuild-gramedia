import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";

import classes from "./DetailBook.module.css";
import Button from "../Button/Button";
import Cover from "../../assets/Images/cover.svg";
import Star from "../../assets/Icon/star-group.svg";
import FB from "../../assets/Icon/fb-dark.svg";
import IG from "../../assets/Icon/ig-dark.svg";
import TW from "../../assets/Icon/tw-dark.svg";
import BookTabContent from "../BookTabContent/BookTabContent";

import { rupiahFormat } from "../../store/utility";

const detailBook = (props) => {
  // let element = "";
  // for (let i = 0; i < props.detailBook.categories.length; i++) {
  //   element = element + ", " + props.detailBook.categories[i].name;
  // }

  const contentTab1 = props.detailBook.description;
  const contentTab2 = (
    <div>
      <b>Title: </b> {props.detailBook.title}
      <br />
      <b>Author: </b> {props.detailBook.author}
      <br />
      <b>publisher: </b> {props.detailBook.publisher}
      <br />
      <b>price: </b> {props.detailBook.price}
      <br />
      <b>stock: </b> {props.detailBook.stock} pcs
      <br />
      <b>category: </b> {props.categories}
      <br />
    </div>
  );
  return (
    <div className={classes.DetailBook}>
      <Row className="mb-4">
        <Col>
          Home <b style={{ color: "#234090" }}>/ {props.detailBook.title}</b>
        </Col>
      </Row>
      <Row className={classes.DetailBookBox}>
        <Col>
          <Card style={{ width: "100%" }}>
            <CardBody>
              <Row>
                <Col xs="5">
                  <img src={props.detailBook.cover} alt="" width="100%" />
                </Col>
                <Col xs="7">
                  <CardTitle>
                    <h3>{props.detailBook.title}</h3>
                  </CardTitle>
                  <CardText>
                    <h5 className="text-muted mt-3">
                      {props.detailBook.author}
                    </h5>
                  </CardText>
                  <CardText className="mt-4">
                    <img src={Star} alt="" />
                  </CardText>
                  <CardText className="mt-4">
                    <h4 className="font-weight-bold">
                      Rp. {rupiahFormat(props.detailBook.price)}
                    </h4>
                  </CardText>
                  <CardText className="mt-4">
                    <p className="text-justify">
                      {props.detailBook.description}
                    </p>
                  </CardText>
                  <CardText className="mt-4">
                    <h6>
                      <b>Availability:</b> In Stock
                    </h6>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col>
                        <InputGroup className="mt-2">
                          <InputGroupAddon addonType="prepend">
                            <Button classBtn="btn btn-light">-</Button>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="border-0 text-center"
                            value="0"
                          />
                          <InputGroupAddon addonType="append">
                            <Button classBtn="btn btn-light">+</Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                      <Col>
                        <Button
                          classBtn="rounded-pill"
                          background="#2d3034"
                          width="100%"
                          height="47px"
                        >
                          <b>+</b> &nbsp;Add to cart
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          classBtn="rounded-pill"
                          background="#234090"
                          width="100%"
                          height="47px"
                        >
                          Buy Now
                        </Button>
                      </Col>
                    </Row>
                  </CardText>
                  <CardText className="mt-4">
                    <h6>
                      <b>Share:</b>
                    </h6>
                    <Row>
                      <Col xs="1">
                        <img alt="" src={FB} />
                      </Col>
                      <Col xs="1">
                        <img alt="" src={IG} />
                      </Col>
                      <Col xs="1">
                        <img alt="" src={TW} />
                      </Col>
                    </Row>
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <BookTabContent
            tab1="Description"
            contentTab1={contentTab1}
            tab2="Detail"
            contentTab2={contentTab2}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detailBook: state.book.detailBook,
    categories: state.book.categories,
  };
};

export default connect(mapStateToProps)(detailBook);
