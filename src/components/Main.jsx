import React, { Component } from "react";
import "./Main.css";
import { Container, Row } from "react-bootstrap";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";

class Main extends Component {
  render() {
    const products = [
      { link: "https://via.placeholder.com/200", description:"Film to protect your glass.", name: "Safety Film" },
      { link: "https://via.placeholder.com/200", description:"Film to protect from sunlight.", name: "Sun Control Film" },
      { link: "https://via.placeholder.com/200", description:"Film with design.", name: "Glass Etch  Film" },
      { link: "https://via.placeholder.com/200", description:"Vinyl Film", name: "Vinyl Film" }
    ];

    let productsRow = products.map(product => (
      <Product link={product.link} name={product.name} description={product.description} />
    ));

    return (
      <div>
        <div id="home-img">
          <h1>Excel Marketing Services</h1>
        </div>
        <Container fluid className="p-3 px-5">
          <div id="what-we-do">
            <h2 className="text-uppercase">What we do</h2>
            <p className="mx-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem quidem dolorum praesentium nam atque officiis iste
              nihil. Aperiam explicabo error, numquam ullam nostrum, architecto
              labore quod porro, accusantium in eos?
            </p>
          </div>
        </Container>
        <div id="what-we-offer">
          <Container fluid className="">
            <h2 className="mr-3 text-uppercase">What we offer</h2>
            <Row className="justify-content-center">{productsRow}</Row>
          </Container>
        </div>
        <Contact />
      </div>
    );
  }
}

export default Main;
