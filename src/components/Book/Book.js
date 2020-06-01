import React from "react";
import { connect } from "react-redux";
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

import * as actionCreators from "../../store/actions";

const book = (props) => {
  return (
    <div>
      <Card className={classes.Book + " p-0 hvr-backward"}>
        <CardBody>
          <Row>
            <Col xs="5">
              <img
                src={props.cover}
                alt=""
                width="100%"
                onClick={props.clicked}
              />
            </Col>
            <Col xs="7">
              <CardTitle onClick={props.clicked}>
                <h4>{props.title}</h4>
              </CardTitle>
              <CardText>
                <small className="text-muted">Romance</small>
              </CardText>
              <CardText>
                <img src={Star} alt="" />
              </CardText>
              <CardText className="text-success">Rp. {props.price}</CardText>
              <Button
                className="rounded-pill"
                onClick={props.isAuth ? props.addToCart : props.onModalToggle}
              >
                <b>+</b> &nbsp;Add to cart
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token ? true : false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(book);
