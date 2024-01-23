import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../utilities/FormikInput";
import { Col, Container, Row, TabContainer } from "react-bootstrap";
import YearPicker from "../../utilities/YearPicker";

type Props = {};

const GraduationEdit = (props: Props) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null >(new Date());
  const [isEndDateDisabled, setIsEndDateDisabled] = useState<boolean>(true);

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
    setIsEndDateDisabled(!date); 
  };

  const initialValues = {
    degree: "",
    univercityName: "",
    department: "",
    startDate: new Date(),
    endDate: new Date(),
    graduationDate: new Date(),
    toggle: "Devam ediyorum",
  };

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <label
                  className="input-label-text"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Eğitim Durumu*
                </label>
                <Field
                  as="select"
                  name="degree"
                  className="custom-field form-select"
                >
                  <option value="" disabled hidden>
                    Seviye Seçiniz*
                  </option>
                  <option>Lisans</option>
                  <option>Ön Lisans</option>
                  <option>Yüksek Lisans</option>
                  <option>Doktora</option>
                </Field>
              </Col>
              <Col>
                <FormikInput
                  name="univercityName"
                  label="Üniversite*"
                  placeHolder="Kampüs 365"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="department"
                  label="Bölüm*"
                  placeHolder="Yazılım"
                />
              </Col>
              <Col>
                <YearPicker
                  label="Başlangıç Yılı*"
                  name="startDate"
                  selected={selectedStartDate}
                  onYearChange={handleStartDateChange}
                  placeHolder="Başlangıç yılını seçiniz"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <YearPicker
                 label="Mezuniyet Yılı*"
                 name="endDate"
                 selected={new Date()} 
                 onYearChange={(date) => console.log(date)} 
                 isDisabled={isEndDateDisabled}
                 placeHolder="Mezuniyet yılını seçiniz"
                />
              </Col>
              <Col></Col>
            </Row>
            <br/>
            <Row>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Devam ediyorum
              </label>
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
        <div className="my-grade">
          <div className="grade-header">
            <label className="grade-date">2016-2021</label>
            <label className="grade-degree">Lisans</label>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <label className="grade-details-header">Üniversite</label>
              <label className="grade-details-content">
                Mersin Üniversitesi
              </label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">Bölüm</label>
              <label className="grade-details-content">
                Bilgisayar Mühendisliği
              </label>
            </div>
            <button className="grade-delete g-del">
              <i className="grade-delete-img"></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GraduationEdit;
