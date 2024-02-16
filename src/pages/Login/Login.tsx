import React, { useContext, useEffect, useReducer } from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container, Image, Row } from "react-bootstrap";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AppForm from "../../components/Login/AppForm";
import { Form, Formik } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";
import { AuthContext } from "../../contexts/AuthContext";
import { userLoginRequest } from "../../models/requests/user/userLoginRequest";
import { object } from "yup";
import UserService from "../../services/userService";
import {
  forgetPasswordButtonText,
  loginBoxBottomText,
  loginButtonText,
  registerButtonText,
} from "../../utilities/Constants/constantValues";
import { useLoadingContext } from "../../contexts/LoadingContext";
type Props = {};

const Login = (props: Props) => {
  const validationSchema = object({
    email: UserInformationValidationMessageRule.email,
    password: UserInformationValidationMessageRule.password,
  });
  const authContext: any = useContext(AuthContext);
  const { handleSetLoading } = useLoadingContext();
  const navigate = useNavigate();

  const initialValues: userLoginRequest = {
    email: "",
    password: "",
  };
  useEffect(() => {
    if (authContext.auth?.isAuthenticated) {
      navigate("/");
    }
  }, [authContext.auth]);

  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="div">
          <div className="center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSetLoading((prev: any) => prev + 1);
                const userService = new UserService();
                userService
                  .loginUser(values)
                  .then((result) => {
                    authContext.setAuth({
                      isAuthenticated: true,
                      token: result.data.accessToken.token,
                    });
                    console.log(result.data.accessToken)
                    handleSetLoading((prev: any) => prev - 1);
                  })
                  .catch((error) => {
                    console.error(
                      "Kullanıcı girişi sırasında hata oluştu:",
                      error
                    );
                  });
              }}
            >
              <Form className={"login-form-cont"}>
                <Row className="image-control">
                  <Image
                    className="login-form-img"
                    src="/images/tobeto-logo.png"
                  />
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
            <Link className="forget-pass-btn" to="/sifremi-unuttum">
              {forgetPasswordButtonText}
            </Link>
          </div>
          <div className="center">
            <span>
              {loginBoxBottomText}{" "}
              <Link className="register-btn" to="/kayit-ol">
                {registerButtonText}
              </Link>
            </span>
          </div>
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  );
};

export default Login;
