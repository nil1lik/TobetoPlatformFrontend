import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { GetLanguageItem } from "../../../models/responses/language/getLanguage";
import languageServices from "../../../services/languageServices";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";

type Props = {};

const validationSchema = object({

})

const LanguageEdit = (props: Props) => {
  const [selectedlanguageLevels, setLanguageLevels] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<GetLanguageItem[]>([]);

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
        const result = await languageServices.getByFilter(0, 25);
        setLanguages(result.data.items);
      } catch (error) {
        console.log("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchLanguages();


    const fetchLanguageLavel = async () => {
      try {
        const result = await languageServices.getLanguageLevel(0, 5);
        setLanguageLevels(result.data.items);
      } catch (error) {
        console.log("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchLanguageLavel();
  }, []);

  const handleLanguageSubmit = (values: GetLanguageItem) => {
    console.log("Seçilen dil: ", values);
    setSelectedLanguages((prevLanguages) => [...prevLanguages, values]);
  };
  return (
    <div>
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
