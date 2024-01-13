import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

type Props = {};

const LanguageEdit = (props: Props) => {
  const initialValues = {
    language: "",
    level: "",
  };

  return (
    <div>
      <Container className="mt-5">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Row>
              <Col>
                <Field
                  as="select"
                  name="language"
                  className="custom-field form-select"
                >
                  <option value="" disabled hidden>
                    Dil Seçiniz*
                  </option>
                  <option>Almanca</option>
                  <option>Arapça</option>
                  <option>Çekçe</option>
                  <option>Çince (Mandarin)</option>
                  <option>Danca</option>
                  <option>Fince</option>
                  <option>Fransızca</option>
                  <option>Hindi</option>
                  <option>Hollandaca</option>
                  <option>İbranice</option>
                  <option>İngilizce</option>
                  <option>İspanyolca</option>
                  <option>İsveççe</option>
                  <option>İtalyanca</option>
                  <option>Japonca</option>
                  <option>Korece</option>
                  <option>Lehçe</option>
                  <option>Macarca</option>
                  <option>Norveççe</option>
                  <option>Portekizce</option>
                  <option>Romence</option>
                  <option>Rusça</option>
                  <option>Türkçe</option>
                  <option>Vietnamca</option>
                  <option>Yunanca</option>
                </Field>
              </Col>
              <Col>
                <Field
                  as="select"
                  name="level"
                  className="custom-field form-select"
                >
                  <option value="" disabled hidden>
                    Seviye Seçiniz*
                  </option>
                  <option>Temel Seviye (A1, A2)</option>
                  <option>Orta Seviye (B1, B2)</option>
                  <option>İleri Seviye (C1, C2)</option>
                  <option>Anadil</option>
                </Field>
              </Col>
            </Row>
            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block"
            >
              Kaydet
            </button>
          </Form>
        </Formik>
        <Container>
          <div className="row">
            <div className="my-langs section-p tobeto-light-bg">
              <div className="lang-edit">
                <div className="lang-info">
                  <div className="lang-title">
                  <i className="lang-title-img "></i>
                    <div className="d-flex flex-column ">
                      <span className="lang-name">İngilizce</span>
                      <span className="lang-degree">
                        Temel Seviye ( A1 , A2)
                      </span>
                    </div>
                  </div>
                </div>
                <span className="lang-degree-symbol main-lang"></span>
                <button className="btn delete-lang">
                <i className="delete-lang-img "></i>
                      </button>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default LanguageEdit;
