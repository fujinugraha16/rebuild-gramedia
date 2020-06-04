import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
} from "reactstrap";

import Button from "../../../components/Button/Button";
import { FaTimes } from "react-icons/fa";

import { rupiahFormat } from "../../../store/utility";
import classes from "./RowItem.module.css";

const useRowItem = (props) => {
  const [qty, setQty] = useState(props.quantity);

  const incHandler = () => {
    setQty(qty + 1);
    props.inc();
  };

  const decHandler = () => {
    setQty(qty - 1);
    props.dec();
  };

  return (
    <tr>
      <td className="p-0" style={{ padding: 0 }}>
        <Card className="border-0 mb-3">
          <CardBody className="py-0">
            <Row>
              <Col xs="3" className="px-0">
                <div
                  style={{
                    width: "81px",
                    height: "107px",
                    overflow: "hidden",
                  }}
                >
                  <img src={props.book.cover} alt="" width="100%" />
                </div>
              </Col>
              <Col xs="5" className="d-flex align-items-center">
                <div className="text-left">
                  <h6 style={{ margin: 0, fontWeight: "bold" }}>
                    {props.book.title}
                  </h6>
                  <small className="text-muted">{props.author}</small>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </td>
      <td className="pt-5">
        <small>
          <strong>Rp. {rupiahFormat(props.book.price)}</strong>
        </small>
      </td>
      <td className="d-flex justify-content-center pt-5">
        <InputGroup style={{ width: "50%" }}>
          <InputGroupAddon addonType="prepend">
            <Button size="sm" classBtn="btn btn-light" clicked={decHandler}>
              -
            </Button>
          </InputGroupAddon>
          <Input
            type="text"
            className="border-0 text-center"
            value={qty}
            bsSize="sm"
            style={{ fontWeigth: "bold" }}
            readOnly
          />
          <InputGroupAddon addonType="append">
            <Button size="sm" classBtn="btn btn-light" clicked={incHandler}>
              +
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </td>
      <td className="pt-5">
        <small>
          <strong>Rp. {rupiahFormat(props.book.price * qty)}</strong>
        </small>
      </td>
      <td className="pt-5">
        <div
          onClick={props.rmvClicked}
          className={classes.BtnRmv}
          style={{ cursor: "pointer" }}
        >
          <FaTimes />
        </div>
        {/* <small onClick={props.rmvClicked} style={{ cursor: "pointer" }}>
          <strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
        </small> */}
      </td>
    </tr>
  );
};

export default useRowItem;
