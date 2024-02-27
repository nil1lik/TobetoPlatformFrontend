import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import socialMediaAccountService from "../../../services/socialMediaAccountService";
import { GetSocialMediaCategoryItem } from "../../../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import toastr from "toastr"
import ControlPopup from "../../Popup/ControlPopup";
import { SocialMediaAccountAddSuccess, SocialMediaAccountSelect } from "../../../utilities/Constants/constantValues";
import { AddSocialMediaAccountRequest } from "../../../models/requests/socialMediaAccount/addSocialMediaAccountRequest";
import { useAuthContext } from "../../../contexts/AuthContext";
import { GetSocialMediaAccountByUserIdItem } from "../../../models/responses/userProfile/getSocialMediaAccountByUserId";
import userProfileService from "../../../services/userProfileService";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const [socialMediaAccounts, setSocialMediaAccounts] = useState<GetSocialMediaCategoryItem[]>([]);
  const [socialMediaAccountsId, setSocialMediaAccountsId] = useState(Number);
  const [socialMediaAccountsByUserId, setSocialMediaAccountsByUserId] = useState<GetSocialMediaAccountByUserIdItem[]>([]);
  const [deleteSocialMediaAccounts, setDeleteSocialMediaAccounts] = useState(Number);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {userId} = useAuthContext();

  const validationSchema = object({
    inputUrl: UserInformationValidationMessageRule.inputsRequired
  })

  const initialValues: AddSocialMediaAccountRequest = {
    userProfileId : 0,
    socialMediaCategoryId: 0,
    mediaUrl: "",
  };

  const fetchSocialMediaAccount = async () => {
    try {
      const result = await socialMediaAccountService.getAllCategory(0,6);
      setSocialMediaAccounts(result.data.items)
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSocialMediaAccountByUserId = async () => {
    try {
      const result = await userProfileService.getSocialMediaAccountByUserId(Number(userId));
      console.log(result.data)
      setSocialMediaAccountsByUserId(result.data.socialMediaAccountsItems)
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleDeleteExperience = async (smaId:number) => {
    try {
      const result = await socialMediaAccountService.delete(smaId);
      fetchSocialMediaAccountByUserId();
      setShow(false);
    } catch (error) {
      console.error("Delete işlemi sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchSocialMediaAccount();
    fetchSocialMediaAccountByUserId();
  }, []);



  const handleMediaAccountSubmit = async (values : AddSocialMediaAccountRequest) => {
    values.userProfileId = Number(userId);
    values.socialMediaCategoryId = socialMediaAccountsId;
    const result = await socialMediaAccountService.add(values)
    toastr.success(SocialMediaAccountAddSuccess)
    fetchSocialMediaAccountByUserId();
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
                {/* <SelectBox defaultText="Seçiniz" selectBoxArray={socialMediaAccounts} className="mb-3" /> */}

                <select
                  onChange={(e) => setSocialMediaAccountsId(parseInt(e.target.value))}
                  className={`option form-control my-custom-select mb-3`}
                >
                  <option disabled selected>
                    {SocialMediaAccountSelect}
                  </option>
                  {socialMediaAccounts.map((element) => (
                    <option
                      key={element.id || String(element)}
                      value={element.id}
                      className="form-control my-custom-input"
                    >
                      {element.name || String(element)}
                    </option>
                  ))}
                </select>
              </Col>
              <Col lg={8}>
                <FormikInput name="mediaUrl" placeHolder="https://" />
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
        {socialMediaAccountsByUserId.map((sma: any) => (
          <Row>
          <Col xs={10}>
            <div className="col-12 my-2">
              <label
                className="input-label-text"
                style={{ display: "block", marginBottom: "5px" }}
              >
                {sma.socialMediaCategoryName}
              </label>
              <div className="section-header tobeto-input">
                <input
                  readOnly
                  className="form-control  input-linkedin"
                  name="updateSocialMedia"
                  type="text"
                  value={sma.mediaUrl}
                />

                <Col xs={1}>
                  <button className="btn social-delete" onClick={() => {
                    setDeleteSocialMediaAccounts(sma.id);
                    handleShow() 
                    }}>
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
                        delete={() => handleDeleteExperience(deleteSocialMediaAccounts)}
                      />
                </Col>
                <Col xs={1}>
                  <button className="btn" >
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
        ))}
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
