import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import Books from "../Books/Books";

class BodyHomepage extends Component {
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
              <Books />
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default BodyHomepage;
