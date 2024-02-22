import { Field, Form, Formik, FormikHelpers } from "formik";
import { Col, Container, Dropdown, Row, TabContainer } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import {
  experienceInputsMaxLength,
  textAreaLength,
} from "../../../utilities/Validations/validationMessages";
import experienceService from "../../../services/experienceService";
import {
  GetExperience,
  GetExperienceInformationsItem,
  GetExperienceItem,
} from "../../../models/responses/experience/getExperience";
import { GetCityItem } from "../../../models/responses/city/getCityResponse";
import {
  ExperiencePageTexts,
  ProfileExperienceListHeaders,
  ProfileExperienceToastrMsg,
  ProfileInformationEditTexts,
  saveButtonText,
} from "../../../utilities/Constants/constantValues";
import toastr from "toastr";
import ControlPopup from "../../Popup/ControlPopup";
import SelectBox from "./SelectBox";
import cityService from "../../../services/cityService";
import { shiftDate } from "../../../utilities/Helpers/heatMap";
import { useAuthContext } from "../../../contexts/AuthContext";
import { AddExperienceRequest } from "../../../models/requests/experience/addExperienceRequest";

type Props = {};

const validationSchema = object({
  organizationName: UserInformationValidationMessageRule.experienceInputs,
  position: UserInformationValidationMessageRule.experienceInputs,
  sector: UserInformationValidationMessageRule.experienceInputs,
  startDate: UserInformationValidationMessageRule.inputsRequired,
  endDate: UserInformationValidationMessageRule.inputsRequired,
  // city: UserInformationValidationMessageRule.inputsRequired,
});

const ExperienceEdit = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  const [selectCityId, setSelectCityId] = useState(Number);
  const [experiences, setExperiences] = useState<
    GetExperienceInformationsItem[]
  >([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userId } = useAuthContext();

  const fetchExperiences = async () => {
    try {
      const result = await experienceService.getExperience(0, 10);
      // console.log(result.data.items);
      setExperiences(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchCities = async () => {
    try {
      const result = await cityService.getByFilter(0, 81);
      setCities(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchExperiences();
  }, []);

  const initialValues: AddExperienceRequest = {
    cityId: 0,
    userProfileId: 0,
    organizationName: "",
    position: "",
    sector: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
  };

  const handleExperienceSubmit = async (values: AddExperienceRequest) => {
    values.cityId =selectCityId;
    values.userProfileId = Number(userId);
    console.log(values);
    const result = await experienceService.addExperience(values);
    toastr.success(ProfileExperienceToastrMsg.experienceAddSuccess);
    fetchExperiences();
  };

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleExperienceSubmit}
      >
        <Form>
          <TabContainer>
            <Row>
              <Col>
                <FormikInput
                  name="organizationName"
                  label={ExperiencePageTexts.label1}
                  placeHolder={ExperiencePageTexts.placeholder1}
                  maxLength={experienceInputsMaxLength}
                />
              </Col>
              <Col>
                <FormikInput
                  name="position"
                  label={ExperiencePageTexts.label2}
                  placeHolder={ExperiencePageTexts.placeholder2}
                  maxLength={experienceInputsMaxLength}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="sector"
                  label={ExperiencePageTexts.label3}
                  placeHolder={ExperiencePageTexts.placeholder3}
                  maxLength={experienceInputsMaxLength}
                />
              </Col>
              <Col>
                <label className="input-label-text">
                  {ProfileInformationEditTexts.label8}
                </label>
                <select
                  onChange={(e) => setSelectCityId(parseInt(e.target.value))}
                  className={`option form-control my-custom-select`}
                >
                  <option disabled selected>
                    {ProfileInformationEditTexts.placeholder8}
                  </option>
                  {cities.map((element) => (
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
            <Row>
              <Col>
                <FormikInput
                  type="date"
                  name="startDate"
                  label="İş Başlangıcı*"
                  placeHolder="gg.aa.yyyy"
                />
              </Col>
              <Col>
                <FormikInput
                  type="date"
                  name="endDate"
                  label="İş Bitiş*"
                  placeHolder="gg.aa.yyyy"
                />
                {/* <label>
                  <Field type="checkbox" name="checked" value="One" />
                  {ExperiencePageTexts.selectBox}
                </label> */}
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <label
                  className="input-label-text"
                  style={{ display: "block" }}
                >
                  {ExperiencePageTexts.textArea}
                </label>
                <textarea
                  name="description"
                  className="custom-field form-control textarea-style"
                  maxLength={textAreaLength}
                /> */}
                <label className="input-label-text" htmlFor="aboutMe">
                  {ExperiencePageTexts.textArea}
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="5"
                  as="textarea"
                  id="description"
                  name="description"
                  maxLength={textAreaLength}
                ></Field>
              </Col>
            </Row>
            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              {saveButtonText}
            </button>
          </TabContainer>
        </Form>
      </Formik>
      <Container>
        {experiences.map((experience: any) => (
          <div className="my-grade">
            <div className="grade-header">
              <label className="grade-date">
                {shiftDate(experience.startDate, 5).getFullYear()}-{shiftDate(experience.endDate, 10).getFullYear()} - Devam Ediyor
              </label>
            </div>
            <div className="grade-details">
              <div className="grade-details-col">
                <label className="grade-details-header">
                  {ProfileExperienceListHeaders.organisationName}
                </label>
                <label className="grade-details-content">
                  {experience.organizationName}
                </label>
              </div>
              <div className="grade-details-col">
                <label className="grade-details-header">
                  {ProfileExperienceListHeaders.position}
                </label>
                <label className="grade-details-content">
                  {experience.position}
                </label>
              </div>
              <div className="grade-details-col">
                <label className="grade-details-header">
                  {ProfileExperienceListHeaders.sector}
                </label>
                <label className="grade-details-content">
                  {experience.sector}
                </label>
              </div>
              <div className="grade-details-col">
                <label className="grade-details-header">
                  {ProfileExperienceListHeaders.city}
                </label>
                <label className="grade-details-content">
                  {experience.cityName}
                </label>
                <div>
                  <button
                    className="grade-info"
                    onClick={() => {
                      toastr.info("Deneyim bilgileri");
                    }}
                  >
                    <i className="grade-info-img"></i>
                  </button>
                  <button
                    className="grade-delete g-del"
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    <i className="grade-delete-img"></i>
                  </button>
                  <ControlPopup
                    title="Seçilen deneyimi silmek istediğinizden emin misiniz?"
                    description="Bu işlem geri alınmaz."
                    buttonYes={true}
                    buttonNo={true}
                    message="Deneyim kaldırıldı"
                    show={show}
                    hide={handleClose}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ExperienceEdit;
