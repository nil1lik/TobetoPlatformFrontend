import { Formik } from "formik";
import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { object } from "yup";
import FormikInput from "../Formik/FormikInput";
import "./Password.css";
import { Link } from "react-router-dom";
import { resetPasswordText, sendButtonText } from "../../utilities/Constants/constantValues";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";

type Props = {
  name1: string;
  name2?: string;
  placeHolder1: string;
  placeHolder2?: string;
};

const validationSchema = object({
  name1: UserInformationValidationMessageRule.password,
  name2: UserInformationValidationMessageRule.confirmPass
});

const Password = (props: Props) => {
  const initialValues = {};
  return (
    <Container className="form-cont">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log(values);
        }}
      >
        <Form className="text-center max-width">
          
            <Row className="mb-3">
              <h3 className="forgot-pass-custom">{resetPasswordText}</h3>
            </Row>
            <Row>
              <FormikInput
                type="text"
                name={props.name1}
                placeHolder={props.placeHolder1}
              />
            </Row>
            <Row>
              {props.name2 && (
                <FormikInput
                  type="text"
                  name={props.name2}
                  placeHolder={props.placeHolder2}
                />
              )}
            </Row>
            <Row className="row-btn">
              <Link to="/reset-password">
              <button
                type="submit"
                className="button-save py-2 mb-3 mt-4 d-inline-block"
              >
                {sendButtonText}
              </button>
              </Link>
            </Row>
        </Form>
      </Formik>
    </Container>
  );
};

export default Password;
