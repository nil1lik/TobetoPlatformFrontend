import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import socialMediaAccountService from "../../../services/socialMediaAccountService";
import { GetSocialMediaCategoryItem } from "../../../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import toastr from "toastr"
import ControlPopup from "../../Popup/ControlPopup";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const [socialMediaAccounts, setsocialMediaAccounts] = useState<GetSocialMediaCategoryItem[]>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = object({
    inputUrl: UserInformationValidationMessageRule.inputsRequired
  })

  const initialValues = {
    inputUrl: "",
  };

  useEffect(() => {
    const fetchSocialMediaAccount = async () => {
      try {
        const result = await socialMediaAccountService.getAllCategory(0, 6);
        setsocialMediaAccounts(result.data.items)
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchSocialMediaAccount();
  }, []);

  const handleMediaAccountSubmit = () => {
    toastr.success("Sosyal medya adresiniz başarıyla eklendi")
  }
  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        //validationSchema={validationSchema}
        onSubmit={handleMediaAccountSubmit}
      >
        <Form>
          <Container>
            <Row className="align-items-center">
              <Col lg={4}>
                <SelectBox defaultText="Seçiniz" selectBoxArray={socialMediaAccounts} className="mb-3" />

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
          </Container>
        </Form>
      </Formik>
      <Container>
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
                  <button className="btn social-delete" onClick={() => {handleShow() }}>
                    <i className="grade-delete-img"></i>
                  </button>
                  <ControlPopup
                        title="Seçilen sosyal medyayı silmek istediğinizden emin misiniz?"
                        description="Bu işlem geri alınmaz."
                        buttonYes={true}
                        buttonNo={true}
                        message="Sosyal medya hesabınız kaldırıldı"
                        show={show}
                        hide={handleClose}
                      />
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
    </div >
  );
};

export default SocialMediaAccountEdit;
