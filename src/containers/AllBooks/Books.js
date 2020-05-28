import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import classes from "./Books.module.css";
import Book from "../../components/Book/Book";
import BookTabs from "../../components/BookTabs/BookTabs";

class Books extends Component {
  render() {
    return (
      <div className={classes.Books}>
        <Row>
          <BookTabs />
        </Row>
        <Row>
          <Col xs="6" className="mb-4">
            <Book />
          </Col>
          <Col xs="6" className="mb-4">
            <Book />
          </Col>
          <Col xs="6" className="mb-4">
            <Book />
          </Col>
          <Col xs="6" className="mb-4">
            <Book />
          </Col>
          <Col xs="6" className="mb-4">
            <Book />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Books;
