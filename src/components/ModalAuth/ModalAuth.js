import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Input, ModalBody, Button, Spinner } from "reactstrap";

import classes from "./ModalAuth.module.css";

import * as actionCreators from "../../store/actions";

class ModalAuth extends Component {
  state = {
    login: {
      authType: "LOGIN",
      formData: {
        username: "",
        password: "",
      },
    },
    register: {
      authType: "REGISTER",
      formData: {
        name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      },
    },
  };

  render() {
    const modalLogin = (
      <ModalBody className={classes.ModalBody}>
        <h5 className="text-center">
          <b>LOGIN</b>
        </h5>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <p className="text-center mt-2" style={{ color: "#abadac" }}>
          Don't have an account?{" "}
          <b className="text-primary" onClick={this.props.onIsRegister}>
            Register
          </b>
        </p>
        <Button className={classes.BtnPrimary + " mt-n1"} color="secondary">
          Submit
        </Button>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          onClick={this.props.onModalToggle}
        >
          Cancel
        </Button>
      </ModalBody>
    );

    const modalRegister = (
      <ModalBody className={classes.ModalBody}>
        <h5 className="text-center">
          <b>REGISTER</b>
        </h5>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password ..."
          className="mt-3"
          required
          autoComplete="off"
        />
        <p className="text-center mt-2" style={{ color: "#abadac" }}>
          Already have an account?{" "}
          <b className="text-primary" onClick={this.props.onIsRegister}>
            Login
          </b>
        </p>
        <Button className={classes.BtnPrimary + " mt-n1"} color="secondary">
          Submit
        </Button>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          onClick={this.props.onModalToggle}
        >
          Cancel
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
          toggle={this.props.onModalToggle}
          className={classes.ModalAuth + " " + this.props.className}
          style={{ width: "25%" }}
        >
          {!this.props.isRegister ? modalLogin : modalRegister}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.auth.modalOpen,
    isRegister: state.auth.isRegister,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
    onIsRegister: () => dispatch(actionCreators.isRegister()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ModalAuth);
