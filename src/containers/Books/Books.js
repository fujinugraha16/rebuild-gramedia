import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";

import classes from "./Books.module.css";
import Book from "../../components/Book/Book";
import BookTabs from "../../components/BookTabs/BookTabs";
import BookLoader from "../../components/UI/BookLoader/BookLoader";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class Books extends Component {
  componentDidMount() {
    this.props.onInitBooks();
  }

  onCardClickHandler = (slug) => {
    this.props.onInitDetailBookStart();
    this.props.history.push("/detail-book/" + slug);
  };

  addToCartHandler = () => {
    console.log("add to cart");
  };

  render() {
    const book = this.props.books.length ? (
      this.props.books.map((book) => (
        <Col xs="6" className="mb-4" key={book.slug}>
          <Book
            title={book.title}
            cover={book.cover}
            price={rupiahFormat(book.price)}
            clicked={() => this.onCardClickHandler(book.slug)}
            addToCart={this.addToCartHandler}
          />
        </Col>
      ))
    ) : this.props.search ? (
      <Row>
        <h5 className="text-danger ml-5">
          [Books not found. Please retype the search field]
        </h5>
      </Row>
    ) : (
      <Row>
        <BookLoader />
        <BookLoader />
      </Row>
    );

    return (
      <div className={classes.Books}>
        <Row>
          <BookTabs />
        </Row>
        <Row>{book}</Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.book.books,
    search: state.book.search,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onInitBooks: () => dispatch(actionCreators.initBooks()),
    onInitDetailBookStart: () => dispatch(actionCreators.initDetailBookStart()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Books));
