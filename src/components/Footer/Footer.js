import React from "react";
import { Row, Col } from "reactstrap";

import classes from "./Footer.module.css";
import FB from "../../assets/Icon/fb.svg";
import IG from "../../assets/Icon/ig.svg";
import TW from "../../assets/Icon/tw.svg";
import Playstore from "../../assets/Icon/playstore.svg";
import Istore from "../../assets/Icon/istore.svg";

const footer = () => {
  return (
    <div>
      <Row className={classes.Top}>
        <Col xs="12" sm="4">
          <h6>About</h6>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney C ollege in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
          </p>
        </Col>
        <Col xs="12" sm="2">
          <h6>Follow Us</h6>
          <Row>
            <Col>
              <img alt="" src={FB} />
            </Col>
            <Col>
              <img alt="" src={IG} />
            </Col>
            <Col>
              <img alt="" src={TW} />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <img alt="" style={{ marginTop: "8px" }} src={Playstore} />
            </Col>
          </Row>
          <Row>
            <Col>
              <img alt="" style={{ marginLeft: "-18px" }} src={Istore} />
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="2">
          <h6>Belanja</h6>
          <a href="#">Bebelanja</a>
          <br />
          <a href="#">Pengiriman</a>
          <br />
          <a href="#">Pembayaran</a>
          <br />
        </Col>
        <Col xs="12" sm="2">
          <h6>Tentang Gramedia</h6>
          <a href="#">Tentang Kami</a>
          <br />
          <a href="#">Toko Kami</a>
          <br />
          <a href="#">Kerja Sama</a>
          <br />
        </Col>
        <Col xs="12" sm="2">
          <h6>Lainnya</h6>
          <a href="#">S&K</a>
          <br />
          <a href="#">Policy & Privacy</a>
          <br />
          <a href="#">Hubungi Kami</a>
        </Col>
      </Row>
      <Row className={classes.Bottom}>
        <Col>Umebozu © 2020 Gramedia Digital Nusantara</Col>
      </Row>
    </div>
  );
};

export default footer;
