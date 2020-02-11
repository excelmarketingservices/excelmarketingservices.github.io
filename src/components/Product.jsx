import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.name,
      link: props.link
    };
  }

  render() {
    return (
      <div className="ProductCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.state.link}
            alt={this.state.title}
          />
          <Card.Body>
            <Card.Title> {this.state.title} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Product;
