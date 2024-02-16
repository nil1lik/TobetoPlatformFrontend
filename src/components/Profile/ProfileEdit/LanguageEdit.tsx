import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { GetLanguageItem } from "../../../models/responses/language/getLanguage";
import languageServices from "../../../services/languageServices";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import toastr from "toastr";
import { ProfileLanguageToastrMsg, saveButtonText } from "../../../utilities/Constants/constantValues";
import { LanguageProvider } from "../../../contexts/LanguageContext";
type Props = {};

const validationSchema = object({

})

const LanguageEdit = (props: Props) => {
  const [selectedlanguageLevels, setLanguageLevels] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<GetLanguageItem[]>([]);
  const [languageCount, setLanguageCount] = useState<number>(0);

  const initialValues = {
    id: 0,
    name: "",
  };

const validationSchema = object({
  language: UserInformationValidationMessageRule.inputsRequired,
  languageLevel: UserInformationValidationMessageRule.inputsRequired
});

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const result = await languageServices.getAll(0, 100);
        setLanguages(result.data.items);
        console.log(result)
      } catch (error) {
        console.log("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchLanguages();


    const fetchLanguageLevel = async () => {
      try {
        const result = await languageServices.getLanguageLevel(0, 5);
        setLanguageLevels(result.data.items);
      } catch (error) {
        console.log("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchLanguageLevel();
  }, []);

  const handleLanguageSubmit = (values: GetLanguageItem) => {
    console.log("Seçilen dil: ", values);
    setSelectedLanguages((prevLanguages) => [...prevLanguages, values]);
    toastr.success(ProfileLanguageToastrMsg.languageAddSuccess)
  };
  return (
    <div>
      <LanguageProvider>
      <Container className="mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(handleLanguageSubmit)}>
          <Form>
            <Row>
              <Col>
                <SelectBox name="language" defaultText="Dil Seçiniz*" selectBoxArray={languages} />
              </Col>
              <Col>
                <SelectBox name="languageLevel" defaultText="Seviye Seçiniz*" selectBoxArray={selectedlanguageLevels} />
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
      </LanguageProvider>
    </div>
  );
};

export default LanguageEdit;
