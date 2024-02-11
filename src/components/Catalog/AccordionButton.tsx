import React from "react";
import { Accordion, Form } from "react-bootstrap";

type Props = {
  title: string;
};

const AccordionButton = (props: Props) => {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Arama"
            />
            <br />
            <Form.Check inline label="Tüm eğitimler" type="radio" />
            <Form.Check inline label="başlangıç" type="radio" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionButton;
