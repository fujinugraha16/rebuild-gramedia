import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import DetailBook from "../../components/DetailBook/DetailBook";

import * as actionCreators from "../../store/actions";

class BodyHomepage extends Component {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.onInitDetailBook(slug);
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
              <DetailBook />
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitDetailBook: (slug) => dispatch(actionCreators.initDetailBook(slug)),
  };
};

export default connect(null, mapDispatchToProps)(BodyHomepage);
