import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "../Communication/communication.css";
import FormikInput from "../../components/Formik/FormikInput";
import { Field, Form, Formik } from "formik";
import { textAreaLength } from "../../utilities/Validations/validationMessages";
import ReCAPTCHA from "react-google-recaptcha";

const key = "6LeuJGopAAAAAELob3ZGy02D7Ffb_gf_pjzYuz_h";
type Props = {};
function onChange(value: any) {
  console.log("Captcha value:", value);
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
              <div className="w-100 justify-content-center d-flex">
                <span className="badge bg-secondary text-white">
                  İletişime Geçin
                </span>
              </div>
              <br/>
              <div className="w-100 justify-content-center d-flex">
                <h3 className="mt-6 mb-6">İletişim Bilgileri</h3>
              </div>
              <Container className="col-10">
                <Table className="table table-hover">
                  <tbody>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Firma Adı: </td>
                      <td>TOBETO </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Firma Unvan : </td>
                      <td>
                        Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret
                        Anonim Şirketi{" "}
                      </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Vergi Dairesi : </td>
                      <td>Beykoz</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Vergi No : </td>
                      <td>1050250859 </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Telefon : </td>
                      <td>(0216) 331 48 00 </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">E-posta : </td>
                      <td>info@tobeto.com </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">Adres: </td>
                      <td>
                        Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart
                        Plaza B Blok Kat:3 34805, Beykoz/İstanbul
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table className="mt-20 table table-hover">
                  <tbody>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">
                        İstanbul Kodluyor için Telefon:{" "}
                      </td>
                      <td>(0216) 969 22 40 </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="td-style">
                        İstanbul Kodluyor için E-Posta:{" "}
                      </td>
                      <td>istanbulkodluyor@tobeto.com</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </div>
          </Col>
          <Col className="col-12 col-lg-6 order-first position-relative">
            <div className="position-relative py-12 px-10 bg-white text-center shadow-lg b-r-15 py-5">
              <div className="w-100 justify-content-center d-flex">
                <span className="badge bg-secondary text-white">
                  Mesaj Bırakın
                </span>
              </div>
              <br/>
              <div className="w-100 justify-content-center d-flex">
                <h3 className="mt-6 mb-6">İletişim Formu</h3>
              </div>
              <Container className="col-10">
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => {
                    console.log(values);
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

                    <button
                      type="submit"
                      className="button-save py-2 mb-3 mt-4 d-inline-block "
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
