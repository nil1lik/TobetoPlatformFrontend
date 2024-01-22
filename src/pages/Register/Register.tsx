// Register.tsx
import React from 'react';
import LoginPageBox from '../../components/Login/LoginPageBox';
import AppForm from '../../components/Login/AppForm';
import { Container, Row } from 'react-bootstrap';
import FormikInput from '../../utilities/FormikInput';
import { Formik, Form } from 'formik';
import UserService from '../../services/userService';
import { userData } from '../../models/requests/user/userData';

type Props = {};

// Tip belirtilen initialValues
const initialValues: userData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Register({ }: Props) {
  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="center">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              const userService = new UserService();
              userService
                .addUser(values)
                .then((result) => {
                  // Kayıt başarılı olduğunda yapılacak işlemler
                  console.log("Kullanıcı başarıyla kaydedildi:", result.data);
                })
                .catch((error) => {
                  // Hata durumunda yapılacak işlemler
                  console.error("Kullanıcı kaydı sırasında bir hata oluştu:", error);
                });
            }}
          >
            <Form>
              <Row>
                {/* <Image className="login-form-img" src={formLogo} /> */}
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
                  type="email"  // "e-posta" -> "email" olarak değiştirildi
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
