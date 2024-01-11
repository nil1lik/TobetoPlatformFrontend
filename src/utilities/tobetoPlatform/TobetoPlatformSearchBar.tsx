import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

type Props = {}

const TobetoPlatformSearchBar = (props: Props) => {
  return (
    <div><Form>
    <Row>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
        />
      </Col>
    </Row>
  </Form></div>
  )
}

export default TobetoPlatformSearchBar