import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal, Input, ModalBody, Button, Spinner } from "reactstrap";

import classes from "./ModalOrder.module.css";

import * as actionCreators from "../../store/actions";

class ModalOrder extends PureComponent {
  state = {
    loading: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.orderProcess !== this.props.orderProcess) {
      if (this.props.orderProcess.success) {
        this.setState({
          loading: false,
        });
      }
    }
  }

  onGotoMyOrderHandler = () => {
    this.props.history.push("/my-order");
  };

  render() {
    const modalBody = (
      <ModalBody className={classes.ModalBody}>
        <h6 className="text-center">
          <b>Thank you for your order {":)"}.</b>
          <br />
          <b>Please check the my order tab</b>
        </h6>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          size="sm"
          onClick={this.onGotoMyOrderHandler}
        >
          Go to My Order
        </Button>
      </ModalBody>
    );

    const spinner = (
      <Spinner
        style={{ width: "10rem", height: "10rem", margin: "50px auto" }}
      />
    );

    return (
      <div>
        <Modal
          isOpen={this.props.modalOpen}
          toggle={this.props.toggle}
          className={classes.ModalOrder + " " + this.props.className}
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
    orderProcess: state.order.orderProcess,
  };
};

export default withRouter(connect(mapStateToProps)(ModalOrder));
