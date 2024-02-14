import { Field, Form, Formik } from "formik";
import { Col, Container, Dropdown, Row, TabContainer } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import FormikInput from "../../Formik/FormikInput";
import { experienceInputsMaxLength, textAreaLength } from "../../../utilities/Validations/validationMessages";
import experienceService from "../../../services/experienceService";
import { GetExperience, GetExperienceInformationsItem, GetExperienceItem } from "../../../models/responses/experience/getExperience";
import { GetCityItem } from "../../../models/responses/city/getCityResponse";
import { ExperiencePageTexts, ProfileExperienceListHeaders, ProfileExperienceToastrMsg, saveButtonText } from "../../../utilities/Constants/constantValues";
import toastr from "toastr";
import { shiftDate } from "../../../utilities/Helpers/heatMap";

type Props = {};


const validationSchema = object({
  organisationName: UserInformationValidationMessageRule.experienceInputs,
  position: UserInformationValidationMessageRule.experienceInputs,
  sector: UserInformationValidationMessageRule.experienceInputs,
  startDate: UserInformationValidationMessageRule.inputsRequired,
  endDate: UserInformationValidationMessageRule.inputsRequired,
  city: UserInformationValidationMessageRule.inputsRequired,
})

const ExperienceEdit = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  const [city, setCity] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<GetExperienceInformationsItem[]>([]);
  const initialValues = {
    organisationName: "",
    position: "",
    sector: "",
    city: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    toggle: "Çalışmaya Devam Ediyorum",
  };

  const fetchExperiences = async () => {
    try {
      const result = await experienceService.getExperience(0,5);
      console.log(result.data.items)
      setExperiences(result.data.items);
    }catch (error){
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  }

  const handleCitySelect = (selectedCityKey:any, event:Object) => {
    console.log(selectedCityKey);
  };

  const handleExperienceSubmit = (values:any)=>{
    console.log(values)
    toastr.success(ProfileExperienceToastrMsg.experienceAddSuccess);
  }
  
  useEffect(() => {
    fetchExperiences();
  },[])
  
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
                  name="organisationName"
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
                <label className="input-label-text">{ExperiencePageTexts.label4}</label>
                <Dropdown title={ExperiencePageTexts.placeholder4} aria-live="polite"  onSelect={handleCitySelect} className=" calender-select dropdown-profil">
                  <Dropdown.Toggle 
                    aria-selected
                    variant="success"
                    id="dropdown-basic"
                    className="btn-profil dropdown-toggle-profil" 
                  >
                    <div className="css-14cgata-control">
                      <div className="css-hlgwow">{ExperiencePageTexts.placeholder4}</div>
                      <div className="css-1wy0on6">
                        <span className="dropdown-indicatorSeparator"></span>
                        <span className="dropdown-indicatorContainer">
                          <svg
                            xmlns="/images/navbar-dropdown-toggle.svg"
                            width={20}
                            height={20}
                            viewBox="3 2 20 20"
                            fill="none"
                            className="dropdown-toggle-svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="dropdown-toggle-svg-path"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu  className="dropdown-menu-profil">
                    {city.map((city: any) => (
                      <Dropdown.Item 
                        className="dropdown-item dropdown-item-profil"
                        key={city.id}
                        eventKey={city.id}
                      >
                        {city.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  {ExperiencePageTexts.selectBox}
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  className="input-label-text"
                  style={{ display: "block" }}
                >
                  {ExperiencePageTexts.textArea}
                </label>
                <textarea
                  name="description"
                  className="custom-field form-control textarea-style"
                  maxLength={textAreaLength}
                />
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
            <label className="grade-date">{shiftDate(experience.startDate, 5).getFullYear()}-{shiftDate(experience.endDate, 10).getFullYear()} - Devam Ediyor
</label>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileExperienceListHeaders.organisationName}</label>
              <label className="grade-details-content">{experience.organizationName}</label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileExperienceListHeaders.position}</label>
              <label className="grade-details-content">
              {experience.position}
              </label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileExperienceListHeaders.sector}</label>
              <label className="grade-details-content">{experience.sector}</label>
            </div>
            <div className="grade-details-col">
              <label className="grade-details-header">{ProfileExperienceListHeaders.city}</label>
              <label className="grade-details-content">{experience.cityName}</label>
              <div>
                <button className="grade-info" onClick={()=>{toastr.info("Deneyim bilgileri")}} >
                  <i className="grade-info-img"></i>
                </button>
                <button className="grade-delete g-del" onClick={()=>{toastr.error("Deneyim kaldırıldı")}}>
                  <i className="grade-delete-img"></i>
                </button>
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
