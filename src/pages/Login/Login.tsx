import React from "react";
import LoginPageBox from "../../components/Login/LoginPageBox";
import { Container } from "react-bootstrap";
import "./login.css";
import LoginForm from "../../components/Login/LoginForm";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <Container className="form-cont">
      <LoginPageBox className="login-box">
        <div className="div">
        <div className="center">
          <LoginForm image="tobeto-logo.png" />
          <Link className="forget-pass-btn" to="/sifremi-unuttum">Şifremi Unuttum</Link>
        </div>
        <div className="center">
          <span>
            Henüz üye değil misin? <Link className="register-btn" to="/kayit-ol">Kayıt Ol</Link>
          </span>
        </div>
        </div>
      </LoginPageBox>
      <LoginPageBox className="app-box">
        <LoginForm image="istanbulKodluyor.png" />
      </LoginPageBox>
    </Container>
  );
};

export default Login;
