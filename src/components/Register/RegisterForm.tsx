import { Field, Formik } from "formik";
import React from "react";
import { Button, Form, Image, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";

type Props = { image: string, formClassName: string };

const RegisterForm = (props: Props) => {
  const initialValues = {};
  const formLogo = process.env.PUBLIC_URL + `/images/${props.image}`;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={props.formClassName}>
        <Row>
          <Image className="login-form-img" src={formLogo} />
        </Row>
        <Row>
          <FormikInput
            type="text"
            name="e-posta"
            label=""
            placeHolder="Ad*"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="Soyad*"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="E-posta*"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="Şifre*"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="Şifre Tekrar*"
          />
        </Row>
        <Row className="row-btn">
          <button
            type="submit"
            className="button-save py-2 mb-3 mt-4 d-inline-block"
          >
            Kayıt Ol
          </button>
        </Row>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
