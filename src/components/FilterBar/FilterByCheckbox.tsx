import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

type Props = {};

const FilterByCheckbox = (props: Props) => {
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  return (
    <Dropdown autoClose={false}>
      <Dropdown.Toggle variant="success" id="dropdown-autoclose-inside" className="select-control">
        {checkedItems.length == 0 ? "Tür" : checkedItems.join(", ")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Formik
          initialValues={{
            checked: checkedItems,
          }}
          onSubmit={async (values) => {}}
        >
          {({ values }) => (
            <Form>
              <Dropdown.Item href="#/action-1">
                <label>
                  <Field
                    type="checkbox"
                    name="checked"
                    value="One"
                    onClick={() => {
                      if (!values.checked.includes("One")) {
                        setCheckedItems([...values.checked, "One"]);
                      } else {
                        setCheckedItems(
                          values.checked.filter((item) => item !== "One")
                        );
                      }
                    }}
                  />
                  One
                </label>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <label>
                  <Field
                    type="checkbox"
                    name="checked"
                    value="Two"
                    onClick={() => {
                      if (!values.checked.includes("Two")) {
                        setCheckedItems([...values.checked, "Two"]);
                      } else {
                        setCheckedItems(
                          values.checked.filter((item) => item !== "Two")
                        );
                      }
                    }}
                  />
                  Two
                </label>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <label>
                  <Field
                    type="checkbox"
                    name="checked"
                    value="Three"
                    onClick={() => {
                      if (!values.checked.includes("Three")) {
                        setCheckedItems([...values.checked, "Three"]);
                      } else {
                        setCheckedItems(
                          values.checked.filter((item) => item !== "Three")
                        );
                      }
                    }}
                  />
                  Three
                </label>
              </Dropdown.Item>
            </Form>
          )}
        </Formik>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterByCheckbox;
