import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./communication.css";
import FormikInput from "../../components/Formik/FormikInput";
import { Field, Form, Formik } from "formik";
import { textAreaLength } from "../../utilities/Validations/validationMessages";
import ReCAPTCHA from "react-google-recaptcha";
import ContactTitle from "../../components/Contact/ContactTitle";
import ContactTable from "../../components/Contact/ContactTable";

const key = "6LeuJGopAAAAAELob3ZGy02D7Ffb_gf_pjzYuz_h";
type Props = {};
function onChange(value: any) {
}
const Communication = (props: Props) => {
  const initialValues = {
    nameSurname: "",
    email: "",
    message: "",
  };

  return (
    <>
      <Container className="position-relative my-5">
        <Row className="my-5">
          <Col className="col-12 col-lg-6 order-first position-relative">
            <div className="position-relative py-12 px-10 bg-white shadow-lg b-r-15 py-5">
              <ContactTitle title="İletişime Geçin" name="İletişim Bilgileri" />
              <Container className="col-10">
                <Table className="table table-hover">
                  <tbody>
                    <ContactTable title="Firma adı:" desc="TOBETO" />
                    <ContactTable
                      title="Firma Unvan :"
                      desc="Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret
                        Anonim Şirketi"
                    />
                    <ContactTable title="Vergi Dairesi :" desc="Beykoz" />
                    <ContactTable title="Vergi No :" desc="1050250859" />
                    <ContactTable title="Telefon :" desc="(0216) 331 48 00" />
                    <ContactTable title="E-posta :" desc="info@tobeto.com" />
                    <ContactTable
                      title="Adres :"
                      desc="Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart
                        Plaza B Blok Kat:3 34805, Beykoz/İstanbul"
                    />
                  </tbody>
                </Table>
                <Table className="mt-20 table table-hover">
                  <tbody>
                    <ContactTable
                      title="İstanbul Kodluyor için Telefon:"
                      desc="(0216) 969 22 40 "
                    />
                    <ContactTable
                      title="İstanbul Kodluyor için E-Posta:"
                      desc="istanbulkodluyor@tobeto.com"
                    />
                  </tbody>
                </Table>
              </Container>
            </div>
          </Col>
          <Col className="col-12 col-lg-6 order-first position-relative">
            <div className="position-relative py-12 px-10 bg-white shadow-lg b-r-15 py-5">
              <ContactTitle title="Mesaj Bırakın" name="İletişim Formu" />
              <Container className="col-10 text-center">
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => {
                  }}
                >
                  <Form>
                    <FormikInput
                      name="nameSurname"
                      type="text"
                      placeHolder="Adınız Soyadınız"
                    />
                    <FormikInput
                      name="email"
                      type="email"
                      placeHolder="E-mail"
                    />
                    <Field
                      className="form-control my-custom-input textarea-style"
                      rows="5"
                      as="textarea"
                      id="message"
                      name="message"
                      placeHolder="Mesajınız"
                      maxLength={textAreaLength}
                    ></Field>
                    <br />
                    <div className="m-font">
                      Yukarıdaki form ile toplanan kişisel verileriniz Enocta
                      tarafından talebinize dair işlemlerin yerine getirilmesi
                      ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım,
                      bülten ve pazarlama içerikleri gönderilmesi amacıyla
                      <a
                        target="_blank"
                        className=" text-decoration-none"
                        href="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni"
                      >
                        {" "}
                        Aydınlatma Metni{" "}
                      </a>
                      çerçevesinde işlenebilecektir.
                    </div>
                    <div className="capture-style mt-2">
                      <ReCAPTCHA
                        sitekey={key}
                        size="normal"
                        hl="tr"
                        theme="light"
                        onChange={onChange}
                      />
                    </div>
                    <div className="text-center"></div>
                    <button
                      type="submit"
                      className="button-save py-2 mb-3 mt-4 d-inline-block"
                    >
                      Gönder
                    </button>
                  </Form>
                </Formik>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Communication;
