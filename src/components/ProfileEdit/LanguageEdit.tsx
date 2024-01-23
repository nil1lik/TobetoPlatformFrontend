import { Field, Form, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  Language,
  LanguageLevel,
} from "../../models/requests/language/getLanguageLevel";
import LanguageService from "../../services/languageServices";

type Props = {};

const LanguageEdit = (props: Props) => {
  const [languageLevels, setLanguageLevels] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  const initialValues: Language = {
    id: 0,
    languageLevelId: 1,
    name: "",
  };

  useEffect(() => {
    const languageService = new LanguageService();

    // Fetching languages
    languageService
      .getLanguage()
      .then((result) => {
        if (result.data.items) {
          setLanguages(result.data.items);
        } else {
          console.error("API'den dil seviyeleri alınamadı.");
        }
      })
      .catch((error) => {
        console.error("API isteği sırasında bir hata oluştu:", error);
      });

    // Fetching language levels
    languageService
      .getLanguageLevel()
      .then((result) => {
        if (result.data.items) {
          setLanguageLevels(result.data.items);
        } else {
          console.error("API'den dil seviyeleri alınamadı.");
        }
      })
      .catch((error) => {
        console.error("API isteği sırasında bir hata oluştu:", error);
      });
    //post
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            const languageService = new LanguageService();
            languageService
              .updateLanguage(values)
              .then((result) => {
                if (result.data.items) {
                  setLanguageLevels(result.data.items);
                } else {
                  console.error("API'den dil seviyeleri alınamadı.");
                }
              })
              .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
              });
            console.log(values);
          }}
        >
          <Form>
            <Row>
              <Col>
                <Field
                  as="select"
                  name="language"
                  className="custom-field form-select"
                >
                  {languages.map((language: any) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))}
                </Field>
              </Col>
              <Col>
                <Field
                  as="select"
                  name="level"
                  className="custom-field form-select"
                >
                  <option value="" disabled hidden>
                    Seviye Seçiniz*
                  </option>
                  {languageLevels.map((level: any) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </Field>
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
