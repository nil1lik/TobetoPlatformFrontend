import React from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import LoginPageBox from '../../components/Login/LoginPageBox'
import AppForm from '../../components/Login/AppForm'
import { Container,  Row } from 'react-bootstrap'
import FormikInput from '../../utilities/FormikInput'
import { Formik , Form} from 'formik'

type Props = {}

function Register({}: Props) {
  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  };
  //const formLogo = process.env.PUBLIC_URL + `/images/${props.image}`;
  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="center">
        <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
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
            type="text"
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
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  )
}

export default Register