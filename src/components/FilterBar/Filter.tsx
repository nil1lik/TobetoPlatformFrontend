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
    </div>
  );
};
export default TobetoPlatformDropdown;
