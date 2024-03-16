// Register.tsx
import React from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container, Image, Row } from "react-bootstrap";
import FormikInput from "../../components/Formik/FormikInput";
import { Formik, Form } from "formik";
import { object } from "yup";
import { userRegisterRequest } from "../../models/requests/user/userRegisterRequest";
import { passwordMaxLength } from "../../utilities/Validations/validationMessages";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";
import {
  RegisterBoxBottomText,
  RegisterSuccessToastrMsg,
  loginButtonText,
  registerButtonText,
} from "../../utilities/Constants/constantValues";
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";
import userService from "../../services/userService";
import { parseJwt } from "../../utilities/Constants/parseJwt";

type Props = { formClassName?: string };

function Register(props: Props) {
  const navigate = useNavigate();

  const handleRegister = async (values: any) => {
    try {
      const result = await userService.addUser(values);

      const decodedToken = parseJwt(result.data.token);
      const userId =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];
      localStorage.setItem("token", result.data.token);
      let firstLoginData = {
        user: userId,
        isFirstLogin: true,
      };
      localStorage.setItem("firstLogin", JSON.stringify(firstLoginData));
      
      toastr.success(RegisterSuccessToastrMsg);
      navigate("/giris");
    
    } catch (error) {
      console.error("Kullanıcı kaydı sırasında bir hata oluştu:", error);
    }
  };

  const initialValues: userRegisterRequest = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = object({
    firstName: UserInformationValidationMessageRule.firstName,
    lastName: UserInformationValidationMessageRule.lastName,
    email: UserInformationValidationMessageRule.email,
    newPass: UserInformationValidationMessageRule.password,
    password: UserInformationValidationMessageRule.confirmPass,
  });

  return (
    <div className="form-bg">
      <Container className="form-cont">
        <LoginPageBox className="login-box">
          <div className="login-form-cont div">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleRegister(values);
              }}
            >
              <Form className={"login-form-cont"}>
                <Row className="image-control">
                  <Image
                    className="login-form-img"
                    src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1707396717/tobeto-logo_t2qnpq.png"
                  />
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
                    type="email"
                    name="email"
                    label=""
                    placeHolder="E-posta*"
                  />
                  <FormikInput
                    type="password"
                    name="newPass"
                    label=""
                    placeHolder="Şifre*"
                    maxLength={passwordMaxLength}
                  />
                  <FormikInput
                    type="password"
                    name="password"
                    label=""
                    placeHolder="Şifre Tekrar*"
                    maxLength={passwordMaxLength}
                  />
                </Row>
                <Row className="row-btn">
                  <button
                    type="submit"
                    className="button-save py-2 mb-3 mt-4 d-inline-block"
                  >
                    {registerButtonText}
                  </button>
                </Row>
              </Form>
            </Formik>
          </div>
          <div className="pass-reg-cont">
            <div className="register-cont">
              {RegisterBoxBottomText}
              <Link className="register-btn" to="/giris">
                {loginButtonText}
              </Link>
            </div>
          </div>
        </LoginPageBox>
      </Container>
    </div>
  );
}

export default Register;
