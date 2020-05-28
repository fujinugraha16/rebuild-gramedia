import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Aux from "../Auxiliary/Auxiliary";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import BookTabs from "../../components/BookTabs/BookTabs";
import Books from "../../containers/AllBooks/Books";
import DetailBook from "../../components/DetailBook/DetailBook";

class BodyHomepage extends Component {
  render() {
    return (
      <Aux>
        <Row style={{ padding: "0 72px", marginTop: "75px" }}>
          <Col xs="3">
            <Sidedrawer />
          </Col>
          <Col xs="12" sm="9">
            <Row>
              {/* <Books /> */}
              <DetailBook />
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BodyHomepage;
