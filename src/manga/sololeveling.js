import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import solo from "../image/solo.png";

export default class sololeveling extends Component {
  render() {
    return (
      <Card className="mt-23">
        <Card.Img
          variant="top"
          src={solo}
          style={{ width: "220px", height: "100px", objectFit: "cover" }}
        />
      </Card>
    );
  }
}
