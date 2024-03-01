import React, { useContext, useEffect, useRef } from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container, Image } from "react-bootstrap";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AppForm from "../../components/Login/AppForm";
import { Form, Formik } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { userLoginRequest } from "../../models/requests/user/userLoginRequest";
import { object } from "yup";
import {
  forgetPasswordButtonText,
  loginBoxBottomText,
  loginButtonText,
  registerButtonText,
} from "../../utilities/Constants/constantValues";
import { useLoadingContext } from "../../contexts/LoadingContext";
import userService from "../../services/userService";
import { firstLoginCheck } from "../../utilities/Helpers/firstLoginChecker";
type Props = {};

const Login = (props: Props) => {
  const { handleSetAuth, handleSetUserId } = useAuthContext();
  const validationSchema = object({
    email: UserInformationValidationMessageRule.email,
    password: UserInformationValidationMessageRule.password,
  });
  const authContext: any = useContext(AuthContext);
  const { handleSetLoading } = useLoadingContext();

  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    handleSetLoading((prev: any) => prev + 1);
    try {
      const result = await userService.loginUser(values);
      handleSetUserId(result.headers.userId);
      handleSetAuth(true);
      handleSetLoading((prev: any) => prev - 1);

      firstLoginCheck(
        result.headers.userId,
        navigate,
        "/profilim/profilimi-duzenle",
        "/"
      );
    } catch (error) {
      console.error("Kullanıcı girişi sırasında hata oluştu:", error);
    }
  };

  const initialValues: userLoginRequest = {
    email: "",
    password: "",
  };

  return (
    <div className="form-bg">
      <Container className="form-cont">
        <LoginPageBox className="login-box">
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any) => {
                handleLogin(values);
              }}
            >
              <Form className="login-form-cont mb-4">
                <div className="image-control">
                  <Image
                    className="login-form-img"
                    src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1707396717/tobeto-logo_t2qnpq.png"
                  />
                </div>
                <FormikInput
                  type="text"
                  name="email"
                  label=""
                  placeHolder="E-posta"
                  login={true}
                />
                <FormikInput
                  type="password"
                  name="password"
                  label=""
                  placeHolder="Şifre"
                  login={true}
                />
                <div className="login-btn-cont mt-4">
                  <button type="submit" className="login-btn">
                    {loginButtonText}
                  </button>
                </div>
              </Form>
            </Formik>
            <div className="pass-reg-cont">
              <div className="forget-pass-cont mb-5">
                <Link className="forget-pass-btn" to="/sifremi-unuttum">
                  {forgetPasswordButtonText}
                </Link>
              </div>

              <div className="register-cont">
                {loginBoxBottomText}
                <Link className="register-btn" to="/kayit-ol">
                  {registerButtonText}
                </Link>
              </div>
            </div>
          </>
        </LoginPageBox>
        {/* <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox> */}
      </Container>
    </div>
  );
};

export default Login;
