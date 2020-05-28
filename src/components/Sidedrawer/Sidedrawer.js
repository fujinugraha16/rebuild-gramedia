import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem, Input } from "reactstrap";

import classes from "./Sidedrawer.module.css";

class Sidedrawer extends Component {
  render() {
    return (
      <div className={classes.Sidedrawer}>
        <Row>
          <Col xs="9">
            <Input
              className={classes.Input}
              placeholder="Search : Title, Author ..."
            />
          </Col>
        </Row>
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

export default Sidedrawer;
