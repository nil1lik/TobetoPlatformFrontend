// Register.tsx
import React from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import AppForm from "../../components/Login/AppForm";
import { Container, Image, Row } from "react-bootstrap";
import FormikInput from "../../components/Formik/FormikInput";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { userRegisterRequest } from "../../models/requests/user/userRegisterRequest";
import { passwordMaxLength } from "../../utilities/Validations/validationMessages";
import { UserInformationValidationMessageRule } from "../../utilities/Validations/validationMessageRules";
import UserService from "../../services/userService";
import { RegisterBoxBottomText,  RegisterSuccessToastrMsg, loginButtonText, registerButtonText } from "../../utilities/Constants/constantValues";
import { Link } from "react-router-dom";
import toastr from "toastr";

type Props = {  formClassName?: string};

function Register(props: Props) {
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
    password: UserInformationValidationMessageRule.confirmPass
  });

  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="login-form-cont div">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const userService = new UserService()
              userService
                .addUser(values)
                .then((result) => {
                  console.log("Kullanıcı başarıyla kaydedildi:", result.data);
                  localStorage.setItem("token", result.data.token);
                  toastr.success(RegisterSuccessToastrMsg)
                })
                .catch((error) => {
                  console.error(
                    "Kullanıcı kaydı sırasında bir hata oluştu:",
                    error
                  );
                });
            }}
          >
            <Form className={"login-form-cont"}>
              <Row className="image-control">
                <Image className="login-form-img" src="/images/tobeto-logo.png"/>
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
                  type="email" // "e-posta" -> "email" olarak değiştirildi
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
        <div className="center">
            <span>
              {RegisterBoxBottomText}{" "}
              <Link className="register-btn" to="/giris">
                {loginButtonText}
              </Link>
            </span>
          </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  );
}

export default Register;
