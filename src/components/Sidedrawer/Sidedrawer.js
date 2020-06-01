import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Input } from "reactstrap";

import classes from "./Sidedrawer.module.css";

import * as actionCreators from "../../store/actions";

class Sidedrawer extends Component {
  onSearchChangeHandler = (event) => {
    this.props.onSearchBooks(event.target.value);
  };

  componentDidMount() {
    this.props.onInitCategoryBook();
  }

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
          {this.props.categoryBook.map((item) => (
            <ListGroupItem tag="a" href="#" action key={item.slug}>
              <NavLink
                to={"/category/" + item.slug}
                activeClassName={classes.active}
                key={item.slug}
              >
                {item.name}
              </NavLink>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryBook: state.book.categoryBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBooks: (keyword) => dispatch(actionCreators.searchBooks(keyword)),
    onInitCategoryBook: () => dispatch(actionCreators.initCategoryBook()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidedrawer)
);
