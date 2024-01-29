import React from "react";
import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";

type Props = {
  showDefaultOption?: boolean;
  act1?: string;
  act2?: string;
  act3?: string;
  act4?: string;
  dropdownName: string;
};

const TobetoPlatformDropdown = (props: Props) => {
  return (
    <div>
      <Form.Select className="select-control">
        {props.showDefaultOption && (
          <option className="select-text" selected disabled>
            {props.dropdownName}
          </option>
        )}
        {props.act1 && <option>{props.act1}</option>}
        {props.act2 && <option>{props.act2}</option>}
        {props.act3 && <option>{props.act3}</option>}
        {props.act4 && <option>{props.act4}</option>}
      </Form.Select>
      {/* <Dropdown as={ButtonGroup}>
        <Button variant="success">{props.splitBtn}</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{props.act1}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{props.act2}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">{props.act3}</Dropdown.Item>
        </Dropdown.Menu> 
      </Dropdown> */}
    </div>
  );
};
export default TobetoPlatformDropdown;
