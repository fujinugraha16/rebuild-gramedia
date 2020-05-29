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

const book = (props) => {
  return (
    <div>
      <Card
        className={classes.Book + " p-0 hvr-backward"}
        onClick={props.clicked}
      >
        <CardBody>
          <Row>
            <Col xs="5">
              <img src={props.cover} alt="" width="100%" />
            </Col>
            <Col xs="7">
              <CardTitle>
                <h4>{props.title}</h4>
              </CardTitle>
              <CardText>
                <small className="text-muted">Romance</small>
              </CardText>
              <CardText>
                <img src={Star} alt="" />
              </CardText>
              <CardText className="text-success">Rp. {props.price}</CardText>
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
