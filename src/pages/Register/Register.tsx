import React from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import LoginPageBox from '../../components/Login/LoginPageBox'
import AppForm from '../../components/Login/AppForm'
import { Container } from 'react-bootstrap'

type Props = {}

function Register({}: Props) {
  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="center">
          <RegisterForm formClassName="loginform-cont" image="tobeto-logo.png" />
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <AppForm />
      </LoginPageBox>
    </Container>
  )
}

export default Register