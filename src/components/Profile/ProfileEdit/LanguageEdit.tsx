import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { GetLanguageItem } from "../../../models/responses/language/getLanguage";
import languageServices from "../../../services/languageServices";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import toastr from "toastr";
import {
  ProfileLanguageToastrMsg,
  saveButtonText,
} from "../../../utilities/Constants/constantValues";
import { LanguageProvider } from "../../../contexts/LanguageContext";
import { GetByIdLanguage } from "../../../models/responses/language/getByIdLanguage";
import { GetLanguageByUserId } from "../../../models/responses/userProfile/getLanguageByUserId";
import userService from "../../../services/userService";
import userProfileService from "../../../services/userProfileService";
import { useAuthContext } from "../../../contexts/AuthContext";
import { AddProfileLanguageRequest } from "../../../models/requests/language/addProfileLanguageRequest";
import {
  GetLanguageLevel,
  GetLanguageLevelItem,
} from "../../../models/responses/language/getLanguageLevel";
import ControlPopup from "../../Popup/ControlPopup";
type Props = {};

const validationSchema = object({});

const LanguageEdit = (props: Props) => {
  const [selectedlanguageLevels, setLanguageLevels] = useState<
    GetLanguageLevelItem[]
  >([]);
  const [languages, setLanguages] = useState<GetLanguageItem[]>([]);
  const [getLanguage, setGetLanguage] = useState<GetLanguageByUserId[]>([]);
  const [deleteLanguages, setDeleteLanguages] = useState(Number);
  const [languageId,setLanguageId] =useState(Number);
  const [languageLevelId,setLanguageLevelId] =useState(Number);
  const { userId } = useAuthContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = object({
  });

  const fetchLanguages = async () => {
    try {
      const result = await languageServices.getAll(0, 100);
      setLanguages(result.data.items);
    } catch (error) {
      console.log("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchLanguageLevel = async () => {
    try {
      const result = await languageServices.getLanguageLevel(0, 5);
      setLanguageLevels(result.data.items);
    } catch (error) {
      console.log("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const getLanguageList = async () => {
    try {
      const result = await userProfileService.getLanguageByUserId(
        Number(userId)
      );
      setGetLanguage(result.data.languageDtoItems);
      console.log(result.data.languageDtoItems);
    } catch (error) {
      console.log("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleDeletedLanguage = async (id:number) => {
    try {
      const result = await languageServices.deleteProfileLanguage(id);
      console.log(result)
      getLanguageList();
      setShow(false);
    } catch (error) {
      console.error("Delete işlemi sırasında bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchLanguages();
    fetchLanguageLevel();
    getLanguageList();
  }, []);

  const initialValues: AddProfileLanguageRequest = {
    userProfileId: 0,
    languageId: 0,
    languageLevelId: 0,
  };

  const handleLanguageSubmit = async (values: AddProfileLanguageRequest) => {
    values.userProfileId = Number(userId);
    values.languageId = languageId;
    values.languageLevelId = languageLevelId;
    const result = await languageServices.addProfilLanguage(values);
    console.log(result);
    toastr.success(ProfileLanguageToastrMsg.languageAddSuccess);
    getLanguageList();
  };

  return (
    <div>
      <LanguageProvider>
        <Container className="mt-5">
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleLanguageSubmit}
          >
            <Form>
              <Row>
                <Col>
                <select
                  onChange={(e) => setLanguageId(parseInt(e.target.value))}
                  className={`option form-control my-custom-select`}
                >
                  <option disabled selected>
                    {"Dil Seçiniz"}
                  </option>
                  {languages.map((element) => (
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
                <Col>
                  <select
                  onChange={(e) => setLanguageLevelId(parseInt(e.target.value))}
                  className={`option form-control my-custom-select`}
                >
                  <option disabled selected>
                    {"Seviye Seçiniz"}
                  </option>
                  {selectedlanguageLevels.map((element) => (
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
              </Row>
              <button
                type="submit"
                className="button-save py-2 mb-3 mt-4 d-inline-block"
              >
                {saveButtonText}
              </button>
            </Form>
          </Formik>
          <Container>
            
              <div className="row">
                <div className="my-langs section-p tobeto-light-bg">
                {getLanguage.map((language: any) => (
                  <div className="lang-edit">
                    <div className="lang-info">
                      <div className="lang-title">
                        <i className="lang-title-img "></i>
                        <div className="d-flex flex-column ">
                          <span className="lang-name">
                            {language.languageName}
                          </span>
                          <span className="lang-degree">
                            {language.languageLevelName}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="lang-degree-symbol main-lang"></span>
                    <button
                      className="btn delete-lang"
                      onClick={() => {
                        setDeleteLanguages(language.id);
                        handleShow();
                      }}
                    >
                      <i className="delete-lang-img "></i>
                    </button>
                    <ControlPopup
                      title="Yeteneği silmek istediğinizden emin misiniz?"
                      description="Daha sonra tekrardan listeden istediğiniz yetkinliği ekleyebilirsiniz."
                      buttonYes={true}
                      buttonNo={true}
                      message="Dil silindi"
                      show={show}
                      hide={handleClose}
                      delete={() => handleDeletedLanguage(deleteLanguages)}
                      />
                  </div>))}
                </div>
              </div>
            
          </Container>
        </Container>
      </LanguageProvider>
    </div>
  );
};

export default LanguageEdit;
