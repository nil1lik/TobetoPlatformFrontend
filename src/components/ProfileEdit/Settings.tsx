import React from "react";
import { Field, Form, Formik, yupToFormErrors } from "formik";
import FormikInput from "../../utilities/FormikInput";
import { Col, Row, TabContainer } from "react-bootstrap";
import { object, string } from "yup";
import { UserInformationValidationMessageRule } from "../../utilities/validationMessageRules/validationMessageRules";
import { passwordMaxLength } from "../../constants/ValidationMessages/validationMessages";

type Props = {};

const Settings = (props: Props) => {
  const initialValues = {
    oldPass: "",
    newPass: "",
    repeatNewPass: "",
  };

  const validationSchema = object({
    oldPass: UserInformationValidationMessageRule.oldPass,
    newPass: UserInformationValidationMessageRule.newPass,
    confirmPass: UserInformationValidationMessageRule.confirmPass,
  });

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <TabContainer>
            <Row>
              <Col>
                <FormikInput
                  type="password"
                  name="oldPass"
                  label="Eski Şifre*"
                  placeHolder="Eski Şifre"
                  maxLength={passwordMaxLength}
                />
              </Col>
              <Col>
                <FormikInput
                  type="password"
                  name="newPass"
                  label="Yeni Şifre*"
                  placeHolder="Yeni Şifre"
                  maxLength={passwordMaxLength}
                />
              </Col>
              <Col>
                <FormikInput
                  type="password"
                  name="confirmPass"
                  label="Yeni Şifre Tekrar*"
                  placeHolder="Yeni Şifre Tekrar"
                  maxLength={passwordMaxLength}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  type="submit"
                  className="button-settings-save py-2 mb-3 mt-4 d-inline-block "
                  style={{ backgroundColor: "#9933ff" }}
                >
                  Şifre Değiştir
                </button>
              </Col>
              <Col>
                <button
                  type="submit"
                  className="button-settings-end py-2 mb-3 mt-4 d-inline-block "
                  style={{ backgroundColor: "#fc5c46" }}
                >
                  Üyeliği Sonlandır
                </button>
              </Col>
            </Row>
          </TabContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default Settings;
