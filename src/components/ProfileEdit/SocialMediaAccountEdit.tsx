import React from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const initialValues = {
    inputUrl: "",
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
          <Container>
            <Row className="align-items-center">
              <Col lg={4}>
                <Field as="select" className="custom-field form-select">
                  <option value="">Seçiniz*</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Behance">Behance</option>
                  <option value="Dribble">Dribble</option>
                  <option value="Github">Github</option>{" "}
                </Field>
              </Col>
              <Col lg={8}>
                <FormikInput name="inputUrl" placeHolder="https://" />
              </Col>
            </Row>

            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              Kaydet
            </button>

            <Row>
              <Col xs={10}>
                <div className="col-12 my-2 mt-5">
                  <label
                    className="input-label-text"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    LinkedIn
                  </label>
                  <div className="section-header tobeto-input">
                    <input
                      readOnly
                      className="form-control  input-linkedin"
                      type="text"
                      value="https://www.linkedin.com/in/nida-kul/"
                    />

                    <Col xs={1}>
                      <button className="btn social-delete">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/social-delete.svg"
                          }
                          style={{ width: 20 }}
                        />
                      </button>
                    </Col>
                    <Col xs={1}>
                      <button className="btn">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/pen-square.svg"
                          }
                          style={{ width: 23 }}
                        />
                      </button>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
            <Col>
              <label
                className="attentionText"
                style={{ display: "block", marginBottom: "5px" }}
              >
                En fazla 3 adet medya seçimi yapılabilir.
              </label>
            </Col>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default SocialMediaAccountEdit;
