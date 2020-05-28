import React from "react";
import { Row, Col } from "reactstrap";

import classes from "./PageTab.module.css";

const pageTab = (props) => {
  return (
    <div className={classes.PageTab}>
      <Row className="justify-content-between">
        <Col xs="3">
          <div className={classes.BoxTitle + " pb-3"}>
            <h2>{props.title}</h2>
          </div>
        </Col>
        <Col xs="3" className="d-flex align-items-center justify-content-end">
          <div>
            <h6>
              Home / Cart / <b>{props.path}</b>
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default pageTab;
