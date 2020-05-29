import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Input } from "reactstrap";

import classes from "./Sidedrawer.module.css";

import * as actionCreators from "../../store/actions";

class Sidedrawer extends Component {
  onSearchChangeHandler = (event) => {
    this.props.onSearchBooks(event.target.value);
  };

  render() {
    const inputSearch =
      this.props.match.path === "/" ? (
        <Row>
          <Col xs="9">
            <Input
              className={classes.Input}
              placeholder="Search : Title, Author ..."
              onChange={this.onSearchChangeHandler}
            />
          </Col>
        </Row>
      ) : (
        ""
      );

    return (
      <div className={classes.Sidedrawer}>
        {inputSearch}
        <ListGroup className={classes.List}>
          <ListGroupItem tag="a" href="#" action>
            <strong>Popular Subject</strong>
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Biographies
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Business & Money
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Children's Books
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Computer and Technology
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            Parenting & Families
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBooks: (keyword) => dispatch(actionCreators.searchBooks(keyword)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Sidedrawer));
