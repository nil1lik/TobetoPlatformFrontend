import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Image, Row } from "react-bootstrap";
import FormikInput from "../Formik/FormikInput";
import UserService from "../../services/userProfileService";

type Props = { image: string, formClassName: string };

const RegisterForm = (props: Props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  
  const [users, setUsers] = useState<any[]>([]);
  const formLogo = process.env.PUBLIC_URL + `/images/${props.image}`;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
      }}
    >
      <Form className={props.formClassName}>
        <Row>
          <Image className="login-form-img" src={formLogo} />
        </Row>
        <Row>
          <FormikInput
            type="text"
            name="firstName"
            label=""
            placeHolder="Ad*"
          />
          <FormikInput
            type="text"
            name="lastName"
            label=""
            placeHolder="Soyad*"
          />
          <FormikInput
            type="e-posta"
            name="email"
            label=""
            placeHolder="E-mail*"
          />
          <FormikInput
            type="password"
            name="password"
            label=""
            placeHolder="Şifre*"
          />
          {/* <FormikInput
            type="password"
            name="passwordHash"
            label=""
            placeHolder="Şifre Tekrar*"
          /> */}
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
