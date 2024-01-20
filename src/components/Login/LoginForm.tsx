import { Field, Formik } from "formik";
import React from "react";
import { Button, Form, Image, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";

type Props = { image: string };

const LoginForm = (props: Props) => {
  const initialValues = {};
  const formLogo = process.env.PUBLIC_URL + `/images/${props.image}`;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="loginform-cont">
        <Row>
          <Image className="login-form-img" src={formLogo} />
        </Row>
        <Row>
          <FormikInput
            type="text"
            name="e-posta"
            label=""
            placeHolder="E-posta"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="Şifre"
          />
        </Row>
        <Row className="row-btn">
          <button
            type="submit"
            className="button-save py-2 mb-3 mt-4 d-inline-block"
          >
            Giriş Yap
          </button>
        </Row>
      </Form>
    </Formik>
  );
};

export default LoginForm;
