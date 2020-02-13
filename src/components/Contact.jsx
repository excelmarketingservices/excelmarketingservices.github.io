import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/contact-us.svg";

class Contact extends Component {
  render() {
    return (
      <Container id="contact-us">
        <h3 className="mt-4 text-uppercase">Contact Us</h3>
        <Row className="justify-content-center align-items-center my-1">
          <Col sm="12" md="6" className="my-2">
            <h5 className="text-left">Phone Number: 9763127957</h5>
            <h5 className="text-left">
              Whatsapp:
              <a
                href="http://wa.me/919822147853"
                className="btn btn-success mx-2 p-1"
              >
                Click to chat
              </a>
            </h5>
            <h5 className="text-left">
              Email:{" "}
              <a href="mailto:vijay.excel72@gmail.com">
                vijay.excel72@gmail.coms
              </a>
            </h5>
          </Col>
          <Col sm="12" md="6" className="my-2">
            <img src={logo} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
