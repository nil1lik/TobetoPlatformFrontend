// Register.tsx
import React from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import AppForm from "../../components/Login/AppForm";
import { Container, Image, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
import { Formik, Form } from "formik";
import UserService from "../../services/userProfileService";
import { object, string } from "yup";
import { userRegisterRequest } from "../../models/requests/user/userRegisterRequest";
import UserRegisterService from "../../services/userRegisterService";

type Props = {  formClassName?: string};

function Register(props: Props) {
  const initialValues: userRegisterRequest = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = object({
    firstName: string().required("İsim alanı zorunludur.").min(3).max(50),
    lastName: string().required("Soyisim alanı zorunludur.").max(30),
    email: string()
      .required("Email alanı zorunludur.")
      .email("Lütfen geçerli bir e-posta adresi giriniz."),
    password: string().required().min(8, "En az sekiz karakter olmalıdır"),
  });

  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="center loginform-cont">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const userService = new UserRegisterService();
              userService
                .addUser(values)
                .then((result) => {
                  // Kayıt başarılı olduğunda yapılacak işlemler
                  console.log("Kullanıcı başarıyla kaydedildi:", result.data);
                  localStorage.setItem("token", result.data.token);
                })
                .catch((error) => {
                  // Hata durumunda yapılacak işlemler
                  console.error(
                    "Kullanıcı kaydı sırasında bir hata oluştu:",
                    error
                  );
                });
            }}
          >
            <Form className={props.formClassName}>
              <Row>
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
                  name="password"
                  label=""
                  placeHolder="Şifre*"
                />
                <FormikInput
                  type="password"
                  name="passwordHash"
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
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  );
}

export default Register;
