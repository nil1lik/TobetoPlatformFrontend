import { Field, Form, Formik } from "formik";
import { Col, Row, TabContainer } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput/FormikInput";
import React from "react";


type Props = {};

const ExperienceEdit = (props: Props) => {
  const initialValues = {
    organizationName: "",
    position: "",
    sector: "",
    city: "",
    startDate: new Date(),
    endDate: new Date(),
    description:"",
    toggle: "Çalışmaya Devam Ediyorum",
  };

  return (
    <div>
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
                  name="description"
                  label="Kurum Adı*"
                  placeHolder="Kampüs 365"
                />
              </Col>
              <Col>
                <FormikInput
                  name="position"
                  label="Pozisyon*"
                  placeHolder="Front-End Developer"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="sector"
                  label="Sektör*"
                  placeHolder="Yazılım"
                />
              </Col>
              <Col>
                <label
                  className="input-label-text"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Şehir Seçiniz*
                </label>
                <Field
                  as="select"
                  name="city"
                  className="custom-field form-select input-style"
                >
                  <option value="" disabled hidden>
                    İl Seçiniz*
                  </option>
                  <option>Adana</option>
                  <option>Adıyaman</option>
                  <option>Afyonkarahisar</option>
                  <option>Ağrı</option>
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="startDate"
                  label="İş Başlangıcı*"
                  placeHolder="gg.aa.yyyy"
                />
              </Col>
              <Col>
                <FormikInput
                  name="endDate"
                  label="İş Bitiş*"
                  placeHolder="gg.aa.yyyy"
                />
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  Çalışmaya Devam Ediyorum
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  className="input-label-text"
                  style={{ display: "block" }}
                >
                  İş Açıklaması*
                </label>
                <textarea  name="description"  className="custom-field form-control textarea-style" /> 
              </Col>
            </Row>
            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              Kaydet
            </button>
          </TabContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default ExperienceEdit;
