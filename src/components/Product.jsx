import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.name,
      link: props.link,
      description: props.description
    };
  }

  render() {
    return (
      <Col sm="12" md="6" lg="3">
        <div className="text-dark mx-0 px-0 w-100 p-3 py-4">
          <Card >
            {/* <Card.Img
              variant="top"
              src={this.state.link}
              alt={this.state.title}
            /> */}
            <Card.Body>
              <Card.Title> {this.state.title} </Card.Title>
              <Card.Text>
                {this.state.description}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
  }
}

export default Product;
