import React from "react";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../utilities/FormikInput/FormikInput";
import { Col, Row, TabContainer } from "react-bootstrap";

type Props = {};

const GradutionEdit = (props: Props) => {
  const initialValues = {
    degree: "",
    univercityName: "",
    department: "",
    startDate: new Date(),
    endDate: new Date(),
    graduationDate: new Date(),
    toggle : "Devam ediyorum"
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
              <label className="input-label-text" style={{display: 'block', marginBottom: '5px' }}>Eğitim Durumu*</label>
              <Field
                as="select"
                name="degree"
                className="custom-field form-select"
              >
                <option value="" disabled hidden>
                  Seviye Seçiniz*
                </option>
                  <option>Lisans</option>
                  <option>Ön Lisans</option>
                  <option>Yüksek Lisans</option>
                  <option>Doktora</option>
                </Field>
              </Col>
              <Col>
                <FormikInput
                  name="description"
                  label="Üniversite*"
                  placeHolder="Kampüs 365"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput name="price" label="Bölüm*" placeHolder="Yazılım" />
              </Col>
              <Col>
                <FormikInput
                  name="stock"
                  label="Başlangıç Yılı*"
                  placeHolder="Başlangıç Yılını Seçiniz"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="stock"
                  label="Mezuniyet Yılı*"
                  placeHolder="Mezuniyet Yılını Seçiniz"
                />
              </Col>
              <Col></Col>
            </Row>
            <Row>
            <label>
              <Field type="checkbox" name="checked" value="One" />
              Devam ediyorum
            </label>
            </Row>
            <button type="submit" className="button-save py-2 mb-3 mt-4 d-inline-block ">
              Kaydet
            </button>
          </TabContainer>
          
        </Form>
      </Formik>
    </div>
  );
};

export default GradutionEdit;