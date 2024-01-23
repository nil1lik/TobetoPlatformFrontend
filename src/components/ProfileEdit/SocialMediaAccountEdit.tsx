import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
import SocialMediaAccountService from "../../services/socialMediaAccountService";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {

  const [socialMediaAccounts, setsocialMediaAccounts] = useState<any[]>([])

  const initialValues = {
    inputUrl: "",
  };

  useEffect(() => {
    const socialMediaAccountService = new SocialMediaAccountService();
    socialMediaAccountService
    .getSocialMediaCategories()
    .then((result) => {
      if (result.data.items) {
        setsocialMediaAccounts(result.data.items);
      } else {
        console.error("API'den dil seviyeleri alınamadı.");
      }
    })
    .catch((error) => {
      console.error("API isteği sırasında bir hata oluştu:", error);
    });
  }, [])
  


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
                {socialMediaAccounts.map((socialMedia: any) => (
                    <option key={socialMedia.id} value={socialMedia.id}>
                      {socialMedia.name}
                    </option>
                  ))}
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
                        <i className="grade-delete-img"></i>
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
