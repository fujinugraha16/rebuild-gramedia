import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import FilterCategoryBook from "../FilterCategoryBook/FilterCategoryBook";

import * as actionCreators from "../../store/actions";

class BodyCategoryBook extends Component {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.onFilterCategoryBook(slug);
  }

  componentDidUpdate() {
    const slug = this.props.match.params.slug;
    this.props.onFilterCategoryBook(slug);
  }

  render() {
    return (
      <Aux>
        <Row
          style={{
            padding: "0 72px",
            marginTop: "75px",
            marginBottom: "75px",
          }}
        >
          <Col xs="3">
            <Sidedrawer />
          </Col>
          <Col xs="12" sm="9">
            <Row>
              <FilterCategoryBook slug={this.props.match.params.slug} />
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterCategoryBook: (slug) =>
      dispatch(actionCreators.filterCategoryBook(slug)),
  };
};

export default connect(null, mapDispatchToProps)(BodyCategoryBook);
