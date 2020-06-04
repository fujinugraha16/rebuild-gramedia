import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";

import { rupiahFormat } from "../../../store/utility";

const listGroupItem = (props) => (
  <ListGroupItem
    style={{ background: props.background, borderColor: props.border }}
  >
    <Row className="px-2 py-1 d-flex align-items-center">
      <Col xs="3" className="p-0">
        <div
          className="p-0"
          style={{
            width: "80px",
            height: "80px",
            overflow: "hidden",
          }}
        >
          <img src={props.book.cover} alt="" />
        </div>
      </Col>
      <Col xs="7" className="pl-4">
        <Row className="mb-2">
          <small>{props.book.title}</small>
        </Row>
        <Row className="mb-2">
          <small>Rp. {rupiahFormat(props.book.price * props.quantity)}</small>
        </Row>
        <Row className={props.notRmvBtn}>
          <small
            className="text-muted"
            onClick={props.rmvClicked}
            style={{ cursor: "pointer" }}
          >
            REMOVE
          </small>
        </Row>
      </Col>
      <Col xs="2">
        <div
          className="border border-secondary pt-2 text-center"
          style={{ width: "40px", height: "40px" }}
        >
          {props.quantity}
        </div>
      </Col>
    </Row>
  </ListGroupItem>
);

export default listGroupItem;
