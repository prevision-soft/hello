import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const styles = {
  backgroundColor: "#072a48",
  paddingTop: "50px",
  paddingBottom: "50px",
  color: "white",
  textAlign: "center",
};

const Footer = () => (
  <div style={styles}>
    <Container>
      <Row>
        <Col md="4">About the brand</Col>
        <Col md="4">Career</Col>
        <Col md="4">
          <Link to="/">Instagram</Link>
        </Col>
      </Row>
      <Row>
        <Col md="4">Order status</Col>
        <Col md="4">Our ecological actions</Col>
        <Col md="4">
          <Link to="/">Facebook</Link>
        </Col>
      </Row>
      <Row>
        <Col md="4">Contact us</Col>
        <Col md="4">I like Som tum</Col>
        <Col md="4">
          <Link to="/">Pinterest</Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
