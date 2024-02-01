import { Field, Formik } from "formik";
import React, { useContext } from "react";
import { Button, Form, Image, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
import { UserInformationValidationMessageRule } from "../../utilities/validationMessageRules/validationMessageRules";
import { object } from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = { image: string; formClassName: string };

const validationSchema = object({
  email: UserInformationValidationMessageRule.email,
  password: UserInformationValidationMessageRule.password,
});




const LoginForm = (props: Props) => {
  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {};
  const formLogo = process.env.PUBLIC_URL + `/images/${props.image}`;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
            name="email"
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
            onClick={() => {
              authContext.setAuth(true);
              navigate("/platform");
              localStorage.setItem("token", "asdqwklgmqwnkasdkjnqwkjngqw");
            }}
          >
            Giriş Yap
          </button>
        </Row>
      </Form>
    </Formik>
  );
};

export default LoginForm;
