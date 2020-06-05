import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal, Input, ModalBody, Button, Spinner } from "reactstrap";

import classes from "./ModalMyOrder.module.css";

import * as actionCreators from "../../store/actions";

class ModalMyOrder extends PureComponent {
  state = {
    loading: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.myOrderProcess !== this.props.myOrderProcess) {
      if (this.props.myOrderProcess.success) {
        this.setState({
          loading: false,
        });
      }
    }
  }

  render() {
    const modalBody = (
      <ModalBody className={classes.ModalBody}>
        <h6 className="text-center">
          <b>Your status order has been updated.</b>
        </h6>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          size="sm"
          onClick={this.props.toggle}
        >
          OK
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
          className={classes.ModalMyOrder + " " + this.props.className}
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
    myOrderProcess: state.order.myOrderProcess,
  };
};

export default withRouter(connect(mapStateToProps)(ModalMyOrder));
