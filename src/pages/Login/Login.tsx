import React from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container } from "react-bootstrap";
import "./login.css"
import LoginForm from "../../components/Login/LoginForm";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <Container className="form-cont">
        <LoginPageBox className="login-box">
            <LoginForm
            image="tobeto-logo.png"/>    
        </LoginPageBox>
        <LoginPageBox className="app-box">
            <LoginForm
            image="istanbulKodluyor.png"/>    
        </LoginPageBox>
      </Container>
    </div>
  );
};

export default Login;
