import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import { GetCityItem } from "../../../models/responses/city/getCityResponse";
import { GetByUserId } from "../../../models/responses/user/getByUserId";
import userProfileService from "../../../services/userProfileService";
import cityService from "../../../services/cityService";
import FormikInput from "../../Formik/FormikInput";
import { textAreaLength } from "../../../utilities/Validations/validationMessages";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  ProfileInformationEditTexts,
  saveButtonText,
} from "../../../utilities/Constants/constantValues";
import { useAuthContext } from "../../../contexts/AuthContext";
import { GetUserDetails } from "../../../models/responses/userProfile/getUserDetails";

const validationSchema = object({
  birthDate: UserInformationValidationMessageRule.inputsRequired,
  nationalIdentity: UserInformationValidationMessageRule.identityNumber,
  country: UserInformationValidationMessageRule.country,
});

type Props = {
  onSelectDistrict?: (districtId: number) => void;
  onSelect?: (cityId: number) => void;
};

const ProfileInformationEdit = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [selectCityId, setSelectCityId] = useState<number>(0);
  const [selectDistrictId, setSelectDistrictId] = useState<number | undefined>(undefined);
  const [userInformation, setUserInformation] = useState<GetByUserId>();
  const [userDetails, setUserDetails] = useState<GetUserDetails>({
    userId: 0,
    userProfileId: 0,
    firstName: "",
    lastName: "",
    email: "",
    cityId: 0,
    districtId: 0,
    cityName: "",
    districtName: "",
    nationalIdentity: "",
    phone: "",
    birthDate: "",
    country: "",
    addressDetail: "", 
    description: "",
  });
  const [value, setValue] = useState<any>();
  const { userId } = useAuthContext();


  const fetchCities = async () => {
    try {
      const result = await cityService.getByFilter(0, 81);
      setCities(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchUserDetails = async (userId: number) => {
    try {
      const result = await userProfileService.getUserDetails(userId);
      setUserDetails(result.data);
      console.log(result)
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchUserInformation = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      setUserInformation(result.data);
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const handleCityId = async (cityId: number) => {
    try {
      const result = await cityService.getDistrictsBySelectedCityId(cityId);
      setDistricts(result.data.districts);
      setSelectCityId(cityId);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleDistrictId = (districtId: any) => {
    setSelectDistrictId(districtId);
  };

  const handleSelectCityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptionId = parseInt(event.target.value); // Seçilen option'un id'sini alın
    handleCityId(selectedOptionId);
  };

  const handleSelectDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptionId = parseInt(event.target.value); // Seçilen option'un id'sini alın
    handleDistrictId(selectedOptionId);
  };

  useEffect(() => {
    fetchCities();
    fetchUserInformation(Number(userId));
    fetchUserDetails(Number(userId));
  }, []);

  const handleSubmit = async (value: GetUserDetails) => {
    console.log(value);
    if (!userDetails.userProfileId) {
      const result = await userProfileService.addUserProfile(
        Number(userId),
        value
      );
      setUserDetails(result.data);
    } else {
      const result = await userProfileService.updateUserProfile(
        Number(userId),
        value
      );
      setUserDetails(result.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className="information-photo-cont">
        <Image
          src={
            "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708374477/tobetouserlogo_aekd7i.png"
          }
          roundedCircle
          style={{ width: "100%" }}
        />
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={userDetails}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <FormikInput
                  name="firstName"
                  label={ProfileInformationEditTexts.label1}
                  value={
                    userDetails?.firstName ||
                    userInformation?.firstName
                  }
                  placeHolder={ProfileInformationEditTexts.placeholder1}
                  disabled={true}
                />
              </Col>
              <Col>
                <FormikInput
                  name="lastName"
                  label={ProfileInformationEditTexts.label2}
                  value={
                    userDetails?.lastName ||
                    userInformation?.lastName
                  }
                  placeHolder={ProfileInformationEditTexts.placeholder2}
                  disabled={true}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col>
                    <label className="input-label-text">
                      {ProfileInformationEditTexts.label3}
                    </label>
                    <PhoneInput
                      international
                      initialValueFormat="national"
                      name="phone"
                      value={userDetails.phone}
                      defaultCountry="TR"
                      onChange={setValue}
                      className="my-custom-input"
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <FormikInput
                  type="date"
                  name="birthDate"
                  label={ProfileInformationEditTexts.label4}
                  placeHolder={userDetails.birthDate}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  type="text"
                  name="nationalIdentity"
                  label={ProfileInformationEditTexts.label5}
                  value={
                    userDetails?.nationalIdentity ||
                    ProfileInformationEditTexts.placeholder5
                  }
                />
              </Col>
              <Col>
                <FormikInput
                  type="email"
                  name="email"
                  label={ProfileInformationEditTexts.label6}
                  value={
                    userDetails?.email ||
                    userInformation?.email
                  }
                  placeHolder={
                    userDetails?.email ||
                    ProfileInformationEditTexts.placeholder6
                  }
                  disabled={true}
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <FormikInput
                  type="text"
                  name="country"
                  label={ProfileInformationEditTexts.label7}
                  value={
                    userDetails?.country ||
                    ProfileInformationEditTexts.placeholder7
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text">
                  {ProfileInformationEditTexts.label8}
                </label>
                <select
                  name="cityId"
                  onChange={handleSelectCityChange}
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
              <Col>
                <label className="input-label-text">
                  {ProfileInformationEditTexts.placeholder9}
                </label>
                <select
                  name="districtId"
                  onChange={handleSelectDistrictChange}
                  className={`option form-control my-custom-select`}
                >
                  <option disabled selected>
                    {ProfileInformationEditTexts.placeholder9}
                  </option>
                  {districts.map((element) => (
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
                <label className="input-label-text" htmlFor="addressDetail">
                  {ProfileInformationEditTexts.textArea1}
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="10"
                  as="textarea"
                  id="addressDetail"
                  name="addressDetail"
                  maxLength={textAreaLength}
                ></Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="aboutMe">
                  {ProfileInformationEditTexts.textArea2}
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="5"
                  as="textarea"
                  id="aboutMe"
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
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileInformationEdit;
