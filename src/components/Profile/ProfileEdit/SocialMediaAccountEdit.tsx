import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import socialMediaAccountService from "../../../services/socialMediaAccountService";
import { GetSocialMediaCategoryItem } from "../../../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import toastr from "toastr";
import ControlPopup from "../../Popup/ControlPopup";
import {
  SocialMediaAccountAddSuccess,
  SocialMediaAccountSelect,
  SocialMediaAccountUpdateSuccess,
} from "../../../utilities/Constants/constantValues";
import { AddSocialMediaAccountRequest } from "../../../models/requests/socialMediaAccount/addSocialMediaAccountRequest";
import { useAuthContext } from "../../../contexts/AuthContext";
import { GetSocialMediaAccountByUserIdItem } from "../../../models/responses/userProfile/getSocialMediaAccountByUserId";
import userProfileService from "../../../services/userProfileService";
import { UpdateSocialMediaAccountRequest } from "../../../models/requests/socialMediaAccount/updateSocialMediaAccountRequest";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const [socialMediaAccounts, setSocialMediaAccounts] = useState<
    GetSocialMediaCategoryItem[]
  >([]);
  
  const [initialValuesUpdateId, setInitialValuesUpdateId] = useState<number>();
  const [socialMediaAccountsUpdateId, setSocialMediaAccountsUpdateId] = 
    useState<number>(0);
  const [socialMediaAccountMediaUrl, setSocialMediaAccountMediaUrl] =
    useState<string>("");
  const [socialMediaAccountsId, setSocialMediaAccountsId] = useState(Number);
  const [socialMediaAccountsByUserId, setSocialMediaAccountsByUserId] =
    useState<GetSocialMediaAccountByUserIdItem[]>([]);
  const [deleteSocialMediaAccounts, setDeleteSocialMediaAccounts] =
    useState(Number);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showUpdate, setUpdateShow] = useState(false);
  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);
  const { userId } = useAuthContext();

  const validationSchema = object({
    inputUrl: UserInformationValidationMessageRule.inputsRequired,
  });

  const initialValues: AddSocialMediaAccountRequest = {
    userProfileId: 0,
    socialMediaCategoryId: 0,
    mediaUrl: "",
  };

  const fetchSocialMediaAccount = async () => {
    try {
      const result = await socialMediaAccountService.getAllCategory(0, 6);
      setSocialMediaAccounts(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSocialMediaAccountByUserId = async () => {
    try {
      const result = await userProfileService.getSocialMediaAccountByUserId(
        Number(userId)
      );
      setSocialMediaAccountsByUserId(result.data.socialMediaAccountsItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const socialMediaAccountImage = (accountId: number): string => {
    switch (accountId) {
        case 1:
          return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709045931/instagram_gvzr96.svg"; //Instagram
          case 2:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709046963/icons8-twitter-circled_5_mcyzjo.svg"; //Twitter   
        case 3:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593590/cv-linkedn_ctqmta.svg"; // LinkedIn
        case 4:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-behance_izytxl.svg"; // Behance
        case 5:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709046040/dribble_keqdag.svg"; //Dribble
        case 6:
            return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-github_foneym.svg"; // GitHub
        default:
            return "https://example.com/default-image.jpg"; // Varsayılan resim URL'si
    }
}

  const handleDeleteExperience = async (smaId: number) => {
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

  const handleMediaAccountSubmit = async (
    values: AddSocialMediaAccountRequest
  ) => {
    values.userProfileId = Number(userId);
    values.socialMediaCategoryId = socialMediaAccountsId;
    const result = await socialMediaAccountService.addSocialMediaAccount(values);
    toastr.success(SocialMediaAccountAddSuccess);
    fetchSocialMediaAccountByUserId();
  };

  const initialValuesUpdate: UpdateSocialMediaAccountRequest = {
    id: 0,
    userProfileId: 0,
    socialMediaCategoryId: 0,
    mediaUrl: "",
  };

  const handleMediaAccountUpdateSubmit = async (
    values: UpdateSocialMediaAccountRequest
  ) => {
    values.id = Number(initialValuesUpdateId)
    values.mediaUrl = socialMediaAccountMediaUrl
    values.socialMediaCategoryId = socialMediaAccountsUpdateId
    values.userProfileId= Number(userId)
    const result = await socialMediaAccountService.update(values);
    toastr.success(SocialMediaAccountUpdateSuccess);
    fetchSocialMediaAccountByUserId();
  };
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
                  onChange={(e) =>
                    setSocialMediaAccountsId(parseInt(e.target.value))
                  }
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
                <img src={socialMediaAccountImage(Number(sma.socialMediaCategoryId))} className="input-img"/>
                  <input
                    readOnly
                    className="form-control"
                    name="updateSocialMedia"
                    type="text"
                    value={sma.mediaUrl}
                  />
                  <Col xs={1}>
                    <button
                      className="btn social-delete"
                      onClick={() => {
                        setDeleteSocialMediaAccounts(sma.id);
                        handleShow();
                      }}
                    >
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
                      delete={() =>
                        handleDeleteExperience(deleteSocialMediaAccounts)
                      }
                    />
                  </Col>
                   {/* Update Popup */}
                  <Col xs={1}>
                    <button
                      className="btn"
                      onClick={() => {
                        handleUpdateShow();
                        // Güncelleme butonuna tıklandığında, initialValuesUpdate nesnesine sma verilerini atayalım
                        setInitialValuesUpdateId(sma.id);
                        setSocialMediaAccountsUpdateId(sma.socialMediaCategoryId)
                        setSocialMediaAccountMediaUrl(sma.mediaUrl);
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/images/pen-square.svg"}
                        style={{ width: 23 }}
                      />
                    </button>
                    {/* <SocialMediaUpdatePopup
                    socialMediaAccountCategory={socialMediaAccounts}
                    socialMediaAccountData={sma}
                    show={showUpdate} 
                    hide={handleUpdateClose}
                    /> */}
                    <Modal
                      size="lg"
                      show={showUpdate}
                      onHide={handleUpdateClose}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title style={{ fontWeight: "600" }}>
                          {"Sosyal Medya Hesabı Güncelleme"}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={initialValuesUpdate}
                          onSubmit={handleMediaAccountUpdateSubmit}
                        >
                          <Form>
                            <Container>
                              <Row className="align-items-center">
                                <Col lg={4}>
                                  {/* <SelectBox defaultText="Seçiniz" selectBoxArray={socialMediaAccounts} className="mb-3" /> */}

                                  <select
                                    onChange={(e) =>
                                      setSocialMediaAccountsUpdateId(
                                        parseInt(e.target.value)
                                      )
                                    }
                                    className={`option form-control my-custom-select mt-3`}
                                    value={socialMediaAccountsUpdateId}
                                  >
                                    <option disabled>
                                      {SocialMediaAccountSelect}
                                    </option>
                                    {socialMediaAccounts.map(
                                      (smac) => (
                                        <option
                                          key={smac.id}
                                          value={smac.id}
                                          className="form-control my-custom-input"
                                        >
                                          {smac.name}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </Col>
                                <Col lg={8}>
                                  <input
                                    className="form-control my-custom-input mt-3"
                                    name="updateSocialMedia"
                                    type="text"
                                    value={socialMediaAccountMediaUrl}
                                    onChange={(mu) =>
                                      setSocialMediaAccountMediaUrl(
                                        mu.target.value
                                      )
                                    }
                                  />
                                </Col>
                              </Row>

                              <button
                                type="submit"
                                className="button-save py-2 mb-3 mt-4 d-inline-block "
                              >
                                Güncelle
                              </button>
                            </Container>
                          </Form>
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default SocialMediaAccountEdit;
