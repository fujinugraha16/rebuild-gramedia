import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

import classes from "./FilterCategoryBook.module.css";
import Book from "../../components/Book/Book";
import BookTabs from "../../components/BookTabs/BookTabs";
import BookLoader from "../../components/UI/BookLoader/BookLoader";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class FilterCategoryBook extends Component {
  onCardClickHandler = (slug) => {
    this.props.onInitDetailBookStart();
    this.props.history.push("/detail-book/" + slug);
  };

  addToCartHandler = (token, bookId, value) => {
    console.log("add to cart");
    this.props.onIncDecCart(token, bookId, value);
  };

  nextPageHandler = (event) => {
    console.log("ok next: ", event.target.value);
    this.props.onInitBooks(event.target.value);
  };

  prevPageHandler = (event) => {
    console.log("ok prev: ", event.target.value);
    this.props.onInitBooks(event.target.value);
  };

  render() {
    const book = this.props.books.length ? (
      this.props.books.map((book) => (
        <Col xs="6" className="mb-4" key={book.slug}>
          <Book
            title={book.title}
            cover={book.cover}
            author={book.author}
            price={rupiahFormat(book.price)}
            clicked={() => this.onCardClickHandler(book.slug)}
            addToCart={() =>
              this.addToCartHandler(this.props.token, book.id, 1)
            }
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
      <Row className="pl-5">
        <BookLoader />
        <BookLoader />
      </Row>
    );

    return (
      <div className={classes.FilterCategoryBooks}>
        <Row>
          <BookTabs slug={this.props.slug} />
        </Row>
        <Row>{book}</Row>
        <Row className="float-right mr-2">
          <button
            className={classes.pageButton}
            type="button"
            value={this.props.dataPage.prevPage}
            onClick={(event) => this.prevPageHandler(event)}
            disabled={this.props.dataPage.prevPage < 1}
          >
            {"<<"}
          </button>
          {this.props.dataPage.currentPage}/{this.props.dataPage.lastPage}
          <button
            className={classes.pageButton}
            type="button"
            value={this.props.dataPage.nextPage}
            onClick={(event) => this.nextPageHandler(event)}
            disabled={
              this.props.dataPage.nextPage > this.props.dataPage.lastPage
            }
          >
            {">>"}
          </button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.book.books,
    search: state.book.search,
    dataPage: state.book.dataPage,
    token: state.auth.token,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onInitDetailBookStart: () => dispatch(actionCreators.initDetailBookStart()),
    onIncDecCart: (token, bookId, value) =>
      dispatch(actionCreators.incDecCart(token, bookId, value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(FilterCategoryBook)
);
