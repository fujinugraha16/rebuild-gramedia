import React from "react";
import { Button } from "reactstrap";

const button = (props) => {
  const styleButton = {
    background: props.background,
    width: props.width,
    height: props.height,
    color: props.color,
    borderColor: props.background,
  };

  return (
    <Button
      className={props.classBtn}
      style={styleButton}
      size={props.size}
      onClick={props.clicked}
    >
      {props.children}
    </Button>
  );
};

export default button;
