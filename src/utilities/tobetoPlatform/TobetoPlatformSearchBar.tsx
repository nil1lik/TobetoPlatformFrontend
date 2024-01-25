import React from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
type Props = {};

const TobetoPlatformSearchBar = (props: Props) => {
  return (
    <div>
      <InputGroup>
        <Form.Control type="text" placeholder="Arama" className="mr-sm-2" />
        <Button className="search-btn">
            <img src="../images/search.svg" />
        </Button>
      </InputGroup> 
    </div>
  );
};

export default TobetoPlatformSearchBar;
