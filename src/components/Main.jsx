import React, { Component } from "react";
import "./Main.css";
import { Container } from "react-bootstrap";
import Product from "./Product.jsx";

class Main extends Component {
  render() {
    return (
      <div>
        <div id="home-img">
          <h1>Excel Marketing Services</h1>
        </div>
        <div id="what-we-do">
          <Container>
            <h2>What we do</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem quidem dolorum praesentium nam atque officiis iste
              nihil. Aperiam explicabo error, numquam ullam nostrum, architecto
              labore quod porro, accusantium in eos?
            </p>
          </Container>
        </div>
        <div id="what-we-offer">
          <Container>
            <h2>What we offer</h2>
            <div id="products">
              <Product
                link="https://via.placeholder.com/200"
                name="Safety Film"
              />
              <Product
                link="https://via.placeholder.com/200"
                name="Sun Control Film"
              />
              <Product
                link="https://via.placeholder.com/200"
                name="Glass Etch Film"
              />
              <Product
                link="https://via.placeholder.com/200"
                name="Vinyl Film"
              />
            </div>
          </Container>
        </div>
        <div id="contact-us">
            <Container>
                <h6>Phone Number</h6>
            </Container>
        </div>
      </div>
    );
  }
}

export default Main;
