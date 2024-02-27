import React from "react";
import { Form, Formik } from "formik";
import { Col, Row, TabContainer } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import { passwordMaxLength } from "../../../utilities/Validations/validationMessages";
import { ProfileSettingsTextValues, ProfileSettingsToastrMsg, changePasswordButtonText, endMembershipButtonText } from "../../../utilities/Constants/constantValues";

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

  const handleSubmit=()=>{
    toastr.success(ProfileSettingsToastrMsg.changePasswordSuccess)
  }
  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TabContainer>
            <Row>
              <Col>
                <FormikInput
                  type="password"
                  name="oldPass"
                  label={ProfileSettingsTextValues.label1}
                  placeHolder={ProfileSettingsTextValues.placeholder1}
                  maxLength={passwordMaxLength}
                />
              </Col>
              <Col>
                <FormikInput
                  type="password"
                  name="newPass"
                  label={ProfileSettingsTextValues.label2}
                  placeHolder={ProfileSettingsTextValues.placeholder2}
                  maxLength={passwordMaxLength}
                />
              </Col>
              <Col>
                <FormikInput
                  type="password"
                  name="confirmPass"
                  label={ProfileSettingsTextValues.label3}
                  placeHolder={ProfileSettingsTextValues.placeholder3}
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
                  {changePasswordButtonText}
                </button>
              </Col>
              <Col>
                <button
                  type="submit"
                  className="button-settings-end py-2 mb-3 mt-4 d-inline-block "
                  style={{ backgroundColor: "#fc5c46" }}
                >
                  {endMembershipButtonText}
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
