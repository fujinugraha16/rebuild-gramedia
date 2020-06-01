import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
    loading: false,
    notSame: false,
  };

  inputChangeHandler = (event) => {
    const updateFormData = !this.props.isRegister
      ? { ...this.state.login }
      : { ...this.state.register };
    const elementFormData = { ...updateFormData.formData };

    elementFormData[event.target.name] = event.target.value;
    updateFormData.formData = elementFormData;

    if (!this.props.isRegister) {
      this.setState({
        login: updateFormData,
      });
    } else {
      this.setState({
        register: updateFormData,
      });
    }
  };

  submitHandler = () => {
    if (!this.props.isRegister) {
      const { authType, formData } = this.state.login;
      this.props.onSubmit(authType, formData);
    } else {
      const { authType, formData } = this.state.register;

      const valid = formData.confirm_password !== formData.password;

      this.setState({
        notSame: valid,
      });

      this.props.onSubmit(authType, formData);
    }

    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };

  logoutButtonHandler = () => {
    this.props.onLogout();
    this.props.history.push("/");
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
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password ..."
          className="mt-3"
          required
          autoComplete="off"
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <p className="text-center mt-2" style={{ color: "#abadac" }}>
          Don't have an account?{" "}
          <b className="text-primary" onClick={this.props.onIsRegister}>
            Register
          </b>
        </p>
        <Button
          className={classes.BtnPrimary + " mt-n1"}
          color="secondary"
          onClick={this.submitHandler}
        >
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
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username ..."
          className="mt-3"
          required
          autoComplete="off"
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email ..."
          className="mt-3"
          required
          autoComplete="off"
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password ..."
          className="mt-3"
          required
          autoComplete="off"
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password ..."
          className="mt-3"
          required
          autoComplete="off"
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <p className="text-center mt-2" style={{ color: "#abadac" }}>
          Already have an account?{" "}
          <b className="text-primary" onClick={this.props.onIsRegister}>
            Login
          </b>
        </p>
        <Button
          className={classes.BtnPrimary + " mt-n1"}
          color="secondary"
          onClick={this.submitHandler}
        >
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

    const authInfo = (
      <div className="text-center py-3">
        <h6>
          {this.props.isLogout
            ? "Ready to leave?"
            : this.props.dataAuth.success
            ? this.props.dataAuth.message
            : this.state.notSame
            ? "Failed: the confirm password and password must match"
            : "Failed: please try again"}
        </h6>
        <Button
          className={classes.BtnSecondary}
          color="secondary"
          onClick={
            this.props.isLogout
              ? this.logoutButtonHandler
              : this.props.dataAuth.success
              ? this.props.onModalToggle
              : this.props.onCleanDataAuth
          }
        >
          {this.props.isLogout ? "Logout" : "Oke"}
        </Button>
      </div>
    );

    return (
      <div>
        <Modal
          isOpen={this.props.modalOpen}
          toggle={this.props.onModalToggle}
          className={classes.ModalAuth + " " + this.props.className}
          style={{ width: "25%" }}
        >
          {this.state.loading
            ? spinner
            : this.props.dataAuth.message
            ? authInfo
            : !this.props.isRegister
            ? modalLogin
            : modalRegister}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.auth.modalOpen,
    isRegister: state.auth.isRegister,
    dataAuth: state.auth.dataAuth,
    isAuth: state.auth.token ? true : false,
    isLogout: state.auth.isLogout,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actionCreators.modalToggle()),
    onIsRegister: () => dispatch(actionCreators.isRegister()),
    onSubmit: (authType, formData) =>
      dispatch(actionCreators.authProcess(authType, formData)),
    onLogout: () => dispatch(actionCreators.logout()),
    onCleanDataAuth: () => dispatch(actionCreators.cleanDataAuth()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchProps)(ModalAuth)
);
