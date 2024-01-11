import React from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

type Props = { splitBtn: string; act1: string; act2: string; act3: string };

const TobetoPlatformDropdown = (props: Props) => {
  return (
    <div>
      <Dropdown as={ButtonGroup}>
        <Button variant="success">{props.splitBtn}</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{props.act1}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{props.act2}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">{props.act3}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default TobetoPlatformDropdown;
