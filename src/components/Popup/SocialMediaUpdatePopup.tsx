import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import {
  SocialMediaAccountSelect,
  SocialMediaAccountUpdateSuccess,
} from "../../utilities/Constants/constantValues";
import { GetSocialMediaAccountByUserIdItem } from "../../models/responses/userProfile/getSocialMediaAccountByUserId";
import { GetSocialMediaCategoryItem } from "../../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import { UpdateSocialMediaAccountRequest } from "../../models/requests/socialMediaAccount/updateSocialMediaAccountRequest";
import { useAuthContext } from "../../contexts/AuthContext";
import socialMediaAccountService from "../../services/socialMediaAccountService";
import { Form, Formik } from "formik";

type Props = {
  socialMediaAccountData: GetSocialMediaAccountByUserIdItem;
  socialMediaAccountCategory: GetSocialMediaCategoryItem[];
  show: boolean;
  hide: () => void;
};

function SocialMediaUpdatePopup(props: Props) {
  const [socialMediaAccountsId, setSocialMediaAccountsId] = useState<number>(
    props.socialMediaAccountData.socialMediaCategoryId
  );
  const [socialMediaAccountMediaUrl, setSocialMediaAccountMediaUrl] =
    useState<string>(props.socialMediaAccountData.mediaUrl);
  const { userId } = useAuthContext();

  const initialValues: UpdateSocialMediaAccountRequest = {
    id: 0,
    userProfileId: 0,
    socialMediaCategoryId: 0,
    mediaUrl: "",
  };

  useEffect(() => {
      setSocialMediaAccountsId(
        props.socialMediaAccountData.socialMediaCategoryId
      );
      setSocialMediaAccountMediaUrl(props.socialMediaAccountData.mediaUrl);
  }, []);

  const handleMediaAccountUpdateSubmit = async (
    values: UpdateSocialMediaAccountRequest
  ) => {
    values.id = props.socialMediaAccountData.id;
    values.socialMediaCategoryId = socialMediaAccountsId;
    values.userProfileId = Number(userId);
    values.mediaUrl = socialMediaAccountMediaUrl;
    console.log(values);
    const result = await socialMediaAccountService.update(values);
    toastr.success(SocialMediaAccountUpdateSuccess);
  };

  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.hide} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>
            {"Sosyal Medya Hesabı Güncelleme"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={handleMediaAccountUpdateSubmit}
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
                      className={`option form-control my-custom-select mt-3`}
                      value={Number(socialMediaAccountsId)}
                    >
                      <option disabled>{SocialMediaAccountSelect}</option>
                      {props.socialMediaAccountCategory.map((smac) => (
                        <option
                          key={smac.id}
                          value={smac.id}
                          className="form-control my-custom-input"
                        >
                          {smac.name}
                        </option>
                      ))}
                    </select>
                  </Col>
                  <Col lg={8}>
                    <input
                      className="form-control my-custom-input mt-3"
                      name="updateSocialMedia"
                      type="text"
                      value={socialMediaAccountMediaUrl}
                      onChange={(mu) =>
                        setSocialMediaAccountMediaUrl(mu.target.value)
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
    </>
  );
}

export default SocialMediaUpdatePopup;
