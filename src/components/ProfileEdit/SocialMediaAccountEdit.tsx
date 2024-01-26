import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
import { GetSocialMediaAccountItem } from "../../models/responses/socialMediaAccount/getSocialMediaAccount";
import SocialMediaAccountService from "../../services/socialMediaAccountService";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const [socialMediaAccounts, setsocialMediaAccounts] = useState<GetSocialMediaAccountItem[]>([]);

  const initialValues = {
    inputUrl: "",
  };

  useEffect(() => {
    const fetchSocialMediaAccount = async () => {
      try {
        const result = await SocialMediaAccountService.getAllCategory(0, 6);
        setsocialMediaAccounts(result.data.items)
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    }; 
    fetchSocialMediaAccount();
  }, []);

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
                <Field
                  as="select"
                  className="custom-field form-select"
                  name="socialMedia" // Başlangıçta bir değer yoksa, buradaki name özelliğini kullanabilirsiniz.
                >
                  <option value="" selected disabled>
                    Seçiniz
                  </option>
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
                <div className="col-12 my-2">
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
