import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import LanguageService from "../../core/services/languageServices";
import { GetLanguageItem } from "../../models/responses/language/getLanguage";
import SelectBox from "./SelectBox";

type Props = {};

const LanguageEdit = (props: Props) => {
  const [selectedlanguageLevels, setLanguageLevels] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<GetLanguageItem[]>([]);

  const initialValues = {
    id: 0,
    name: "",
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const result = await LanguageService.getByFilter(0, 25);
        setLanguages(result.data.items);
      } catch (error) {
        console.log("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchLanguages();


    const fetchLanguageLavel = async () => {
      try {
        const result = await LanguageService.getLanguageLevel(0, 5);
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
          onSubmit={(handleLanguageSubmit)}>
          <Form>
            <Row>
              <Col>
                <SelectBox defaultText="Dil Seçiniz*" selectBoxArray={languages} />

                {/* <Field
                  as="select"
                  name="language"
                  className="custom-field form-select"
                >
                  <option value="" selected disabled>
                    Dili Seçiniz*
                  </option>
                  {languages.map((language: any) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option> 
                  ))}
                </Field> */}
              </Col>
              <Col>

                <SelectBox defaultText="Seviye Seçiniz*" selectBoxArray={selectedlanguageLevels} />

                {/* <Field
                  as="select"
                  name="level"
                  className="custom-field form-select"
                >
                  <option value=""  disabled hidden>
                    Seviye Seçiniz*
                  </option>
                  {selectedlanguageLevels.map((level: any) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </Field> */}
                {/* Diğer alanlar için girişler */}
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
        {/* Bu kısım, API'den alınan verileri göstermek için kullanılan örnek bir bileşen gibi görünüyor. */}
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
