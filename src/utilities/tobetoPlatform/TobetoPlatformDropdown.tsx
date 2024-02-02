import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  showDefaultOption?: boolean;
  opt?: string[];
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
        {props.opt?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
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
