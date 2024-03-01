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
import cityService from "../../../services/cityService";
import { shiftDate } from "../../../utilities/Helpers/heatMap";
import { useAuthContext } from "../../../contexts/AuthContext";
import { AddExperienceRequest } from "../../../models/requests/experience/addExperienceRequest";
import { GetExperienceByUserId } from "../../../models/responses/userProfile/getExperienceByUserId";
import userProfileService from "../../../services/userProfileService";

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
  const [experiences, setExperiences] = useState<GetExperienceByUserId[]>([]);
  const [deleteExperienceId, setDeleteExperienceId] = useState(Number);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userId } = useAuthContext();

  const fetchExperiences = async () => {
    try {
      const result = await userProfileService.getExperiencesByUserId(
        Number(userId)
      );
      setExperiences(result.data.experiencesDtoItems);
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

  const handleDeleteExperience = async (experienceId: number) => {
    try {
      const result = await experienceService.delete(experienceId);
      fetchExperiences();
      setShow(false);
    } catch (error) {
      console.error("Delete işlemi sırasında bir hata oluştu:", error);
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
    values.cityId = selectCityId;
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
              </Col>
            </Row>
            <Row>
              <Col>
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
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708981290/svg_xml_base64_PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9Im1hcmdpbi1yaWdodDogNHB4OyI_PHBhdGggZD0iTTMgOUgyMU03IDNWNU0x_in5z9d.svg"
                  style={{marginRight: "4px"}}
                >
                  <path
                    d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="rgba(153, 51, 255, 0.66)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {shiftDate(experience.startDate, 5).getFullYear()}-
                {shiftDate(experience.endDate, 10).getFullYear()}
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
                      setDeleteExperienceId(experience.id);
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
                    delete={() => handleDeleteExperience(deleteExperienceId)}
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
