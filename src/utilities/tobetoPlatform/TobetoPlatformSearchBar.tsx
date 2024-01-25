import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

type Props = {};

const TobetoPlatformSearchBar = (props: Props) => {
  return (
    <div className="searchBox search-box">
      <Form.Control type="text" placeholder="Arama" className="w-100 mr-sm-2" />
      <Button className="search-btn">
        <img src="../images/search.svg" />
      </Button>
    </div>
  );
};

export default TobetoPlatformSearchBar;
