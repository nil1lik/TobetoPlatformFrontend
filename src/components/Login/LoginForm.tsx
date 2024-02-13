import { Field, Formik } from "formik";
import React, { useContext } from "react";
import { Button, Form, Image, Row } from "react-bootstrap";
import FormikInput from "../Formik/FormikInput";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";
import { object } from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginButtonText } from "../../utilities/Constants/constantValues";
import toastr from 'toastr';


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

  const handleSubmit = async (values: any) => {
    toastr.success("Giriş başarılı");
    authContext.setAuth(true);
    navigate("/");
    localStorage.setItem("token", "asdqwklgmqwnkasdkjnqwkjngqw");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={props.formClassName}>
        <Row className="text-center">
          <Image className="login-form-img " src={formLogo} />
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
          >
            {loginButtonText}
          </button>
        </Row>
      </Form>
    </Formik>
  );
};

export default LoginForm;
