import React from "react";
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

import classes from "./Book.module.css";
import Cover from "../../assets/Images/cover.svg";
import Star from "../../assets/Icon/star-group.svg";

const book = () => {
  return (
    <div>
      <Card className={classes.Book + " p-0"}>
        <CardBody>
          <Row>
            <Col xs="5">
              <img src={Cover} alt="" width="100%" />
            </Col>
            <Col xs="7">
              <CardTitle>
                <h4>The Upside of Falling : Alex Light</h4>
              </CardTitle>
              <CardText>
                <small className="text-muted">Romance</small>
              </CardText>
              <CardText>
                <img src={Star} alt="" />
              </CardText>
              <CardText className="text-success">Rp. 100.000</CardText>
              <Button className="rounded-pill">
                <b>+</b> &nbsp;Add to cart
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default book;
