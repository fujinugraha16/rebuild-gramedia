import React from "react";
import { Row, Col } from "reactstrap";

import { FaShoppingBag } from "react-icons/fa";
import { rupiahFormat } from "../../../store/utility";

const useRowItem = (props) => {
  return (
    <tr>
      <td>
        <Row>
          <Col xs="2">
            <div
              className="rounded-circle"
              style={{
                width: "48px",
                height: "48px",
                fontSize: "28px",
                color: "#234090",
              }}
            >
              <FaShoppingBag />
            </div>
          </Col>
          <Col xs="10" className="d-flex align-items-center">
            <div>
              <Row className="ml-2">
                <h5>
                  <b>Shopping-{props.id}</b>
                </h5>
                &nbsp;&nbsp;
                <small style={{ color: "#234090" }}>detail</small>
              </Row>
              <Row className="ml-2">
                <small>
                  Purchase Date:{" "}
                  <b style={{ color: "#ff5722" }}>
                    {props.purchaseDate
                      ? props.purchaseDate.substring(0, 10)
                      : "-"}
                  </b>
                </small>
              </Row>
            </div>
          </Col>
        </Row>
      </td>
      <td>
        <Row className="pt-3">
          <Col>
            <strong>
              Rp.{" "}
              {rupiahFormat(
                parseInt(props.totalPrice) + parseInt(props.postalFee)
              )}
            </strong>
          </Col>
        </Row>
      </td>
      <td>
        <Row className="pt-3">
          <Col>
            <span className="badge badge-secondary">{props.status}</span>
          </Col>
        </Row>
      </td>
      <td>
        <Row className="pt-3">
          <Col>
            <small style={{ color: "#234090" }}>Batalkan Pembayaran</small>
          </Col>
        </Row>
      </td>
    </tr>
  );
};

export default useRowItem;
