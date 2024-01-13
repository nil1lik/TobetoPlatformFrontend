import { Field, Form, Formik } from "formik";
import { Col, Container, Row, TabContainer } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
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
    description: "",
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
                  <option>İl Seçiniz</option>
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
                  type="date"
                  name="startDate"
                  label="İş Başlangıcı*"
                  placeHolder="gg.aa.yyyy"
                />
              </Col>
              <Col>
                <FormikInput
                  type="date"
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
                <textarea
                  name="description"
                  className="custom-field form-control textarea-style"
                />
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
      <Container>
        <div className="my-grade">
          <div className="grade-header">
            <label className="grade-date">2016-2021 - Devam Ediyor</label>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <label className="grade-details-header">Kurum Adı</label>
              <label className="grade-details-content">Tobeto</label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">Pozisyon</label>
              <label className="grade-details-content">
                Back-End Developer
              </label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">Sektör</label>
              <label className="grade-details-content">Yazılım</label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">Şehir</label>
              <label className="grade-details-content">Afyonkarahisar</label>
              <div>
                <button className="grade-info">
                  <i className="grade-info-img"></i>
                </button>
                <button className="grade-delete g-del">
                  <i className="grade-delete-img"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExperienceEdit;
