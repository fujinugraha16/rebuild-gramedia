import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Modal,
  ModalBody,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardBody,
  Spinner,
} from "reactstrap";

import classes from "./ModalShoppingDetail.module.css";

import * as actionCreators from "../../store/actions";
import { rupiahFormat } from "../../store/utility";

class ModalShoppingDetail extends PureComponent {
  state = {
    loading: true,
    dataDetailOrder: null,
    address: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.dataDetailOrder !== this.props.dataDetailOrder) {
      if (this.props.dataDetailOrder) {
        this.setState({
          dataDetailOrder: this.props.dataDetailOrder,
          loading: false,
          address: this.props.dataDetailOrder.shipping_address,
        });
      }
    }
  }

  onOKhandler = () => {
    this.props.toggle();
    this.setState({
      loading: true,
    });
  };

  render() {
    const spinner = (
      <Spinner
        style={{ width: "10rem", height: "10rem", margin: "50px auto" }}
      />
    );

    const addressData = this.state.address;

    const address = addressData ? (
      <Col>
        <label>{addressData.name}</label>
        <p className="text-muted m-0">{addressData.address}</p>
        <p className="text-muted m-0">
          {addressData.district_name}, {addressData.city_name},{" "}
          {addressData.province_name}, {addressData.postal_code}
        </p>
      </Col>
    ) : (
      ""
    );

    const listGroup = this.state.dataDetailOrder ? (
      <ListGroup>
        {this.state.dataDetailOrder.books.map((item) => {
          return (
            <ListGroupItem
              className="border-0"
              key={item.id}
              style={{ width: "100%" }}
            >
              <Row className="d-flex align-items-center">
                <Col xs="4">
                  <div
                    width="10"
                    style={{ overflow: "hidden", height: "60px" }}
                  >
                    <img src={item.cover} alt="" width="70" />
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="mb-2">
                    <small>
                      <b>{item.title}</b>
                    </small>
                  </Row>
                  <Row className="mb-2">
                    <small>{item.author}</small>
                  </Row>
                  <Row className="mb-2">
                    <small>Rp. {rupiahFormat(item.price)}</small>
                  </Row>
                </Col>
                <Col xs="1">
                  <div
                    className="border pt-2 text-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #444 !important",
                    }}
                  >
                    {item.quantity}
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    ) : (
      ""
    );

    const modalBody = (
      <ModalBody className={classes.ModalBody}>
        <h6 className="text-center">
          <b>DETAIL ORDER</b>
        </h6>
        <CardTitle>
          <b>Books</b>
        </CardTitle>
        <Row>
          <Col>
            <Card className="rounded" style={{ width: "100%" }}>
              <CardBody
                className="p-1"
                style={{
                  maxHeight: "250px",
                  overflow: "scroll",
                }}
              >
                {listGroup}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CardTitle className="mt-3">
          <b>Shipping Address</b>
        </CardTitle>
        <hr className="my-2" />
        <Row>{address}</Row>
        <hr className="my-2" />

        <Button
          className={classes.BtnSecondary + " mt-2"}
          color="secondary"
          size="sm"
          onClick={this.onOKhandler}
        >
          OK
        </Button>
      </ModalBody>
    );

    return (
      <div>
        <Modal
          isOpen={this.props.modalOpen}
          toggle={this.onOKhandler}
          className={classes.ModalShoppingDetail + " " + this.props.className}
          style={{ width: "25%" }}
        >
          {this.state.loading ? spinner : modalBody}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token ? true : false,
    dataDetailOrder: state.order.dataDetailOrder,
  };
};

export default withRouter(connect(mapStateToProps)(ModalShoppingDetail));
