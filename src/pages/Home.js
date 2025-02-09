import React, { Component } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import solo from "../image/solo.png";
import ghoul from "../image/orig.jpg";
import ghoul2 from "../image/resoi.jpg";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <Container className="bg-custom">
        <CardGroup>
          <Card
            className="m-1 mt-4"
            style={{ width: "220px", height: "320px" }}
          >
            <Link to="/manga/sololeveling">
              <Card.Img
                variant="top"
                src={solo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </Card>

          <Card
            className="m-1 mt-4"
            style={{ width: "200px", height: "320px" }}
          >
            <Link to="/manga/ghoul">
              <Card.Img
                variant="top"
                src={ghoul}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </Card>

          <Card
            className="m-1 mt-4"
            style={{ width: "200px", height: "320px" }}
          >
            <Link to="/manga/ghoul-re">
              <Card.Img
                variant="top"
                src={ghoul2}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
