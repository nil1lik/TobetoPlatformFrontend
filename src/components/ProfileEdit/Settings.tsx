import React from "react";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../utilities/FormikInput";
import { Col, Row, TabContainer } from "react-bootstrap";

type Props = {};

const Settings = (props: Props) => {
  const initialValues = {
    oldPass: "",
    newPass: "",
    repeatNewPass: "",
  };

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <TabContainer>
            <Row>
              <Col>
                <FormikInput
                  name="oldPass"
                  label="Eski Şifre*"
                  placeHolder="Eski Şifre"
                />
              </Col>
              <Col>
                <FormikInput
                  name="newPass"
                  label="Yeni Şifre*"
                  placeHolder="Yeni Şifre"
                />
              </Col>
              <Col>
                <FormikInput
                  name="repeatNewPass"
                  label="Yeni Şifre Tekrar*"
                  placeHolder="Yeni Şifre Tekrar"
                />
              </Col>
            </Row>
            <Row>
            <Col><button type="submit" className="button-settings-save py-2 mb-3 mt-4 d-inline-block " style={{backgroundColor:"#9933ff"}}>
              Şifre Değiştir
            </button></Col>
            <Col><button type="submit" className="button-settings-end py-2 mb-3 mt-4 d-inline-block " style={{backgroundColor:"#fc5c46"}}>
              Üyeliği Sonlandır
            </button></Col></Row>
          </TabContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default Settings;
