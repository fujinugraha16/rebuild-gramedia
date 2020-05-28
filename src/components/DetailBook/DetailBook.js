import React from "react";
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

const detailBook = () => {
  const contentTab1 = `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin erature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, `;
  const contentTab2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat iure aspernatur accusantium! Asperiores facilis cupiditate repellendus at corporis ratione amet laudantium quos. Dignissimos, fuga? Illum facere doloremque consequuntur laudantium.`;

  return (
    <div className={classes.DetailBook}>
      <Row className="mb-4">
        <Col>
          Home{" "}
          <b style={{ color: "#234090" }}>
            / The Upside of Falling: Alex Light
          </b>
        </Col>
      </Row>
      <Row className={classes.DetailBookBox}>
        <Col>
          <Card style={{ width: "100%" }}>
            <CardBody>
              <Row>
                <Col xs="5">
                  <img src={Cover} alt="" width="100%" />
                </Col>
                <Col xs="7">
                  <CardTitle>
                    <h3>The Upside of Falling : Alex Light</h3>
                  </CardTitle>
                  <CardText>
                    <h5 className="text-muted">Romance</h5>
                  </CardText>
                  <CardText className="mt-4">
                    <img src={Star} alt="" />
                  </CardText>
                  <CardText className="mt-4">
                    <h4 className="font-weight-bold">Rp. 100.000</h4>
                  </CardText>
                  <CardText className="mt-4">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature,
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

export default detailBook;
