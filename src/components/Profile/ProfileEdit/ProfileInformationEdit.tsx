import React, { useEffect, useState, ReactNode } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import SelectBox from "./SelectBox";
import { date, object, string } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import { GetCityItem } from "../../../models/responses/city/getCityResponse";
import { GetByIdUser } from "../../../models/responses/user/getByIdUser";
import userProfileService from "../../../services/userProfileService";
import cityService from "../../../services/cityService";
import { ProfileDto } from "../../../models/responses/user/profileDto";
import FormikInput from "../../Formik/FormikInput";
import { textAreaLength } from "../../../utilities/Validations/validationMessages";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import toastr from "toastr"
import { ProfileInformationEditTexts, ProfileInformationEditToastrMsg, saveButtonText } from "../../../utilities/Constants/constantValues";
import { useAuthContext } from "../../../contexts/AuthContext";

const validationSchema = object({
  firstName: UserInformationValidationMessageRule.firstName,
  lastName: UserInformationValidationMessageRule.lastName,
  phone: UserInformationValidationMessageRule.phone,
  birthdate: UserInformationValidationMessageRule.inputsRequired,
  identityNumber: UserInformationValidationMessageRule.identityNumber,
  email: UserInformationValidationMessageRule.email,
  country: UserInformationValidationMessageRule.inputsRequired,
  city: UserInformationValidationMessageRule.inputsRequired,
  district: UserInformationValidationMessageRule.inputsRequired,
});

type Props = {};

const ProfileInformationEdit2 = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [profileData, setProfileData] = useState<GetByIdUser>();
  const [value, setValue] = useState<any>();
  const { userId } = useAuthContext();

  const getUser = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      console.log(result.data)
      setProfileData(result.data);
    } catch (error) {
      console.log("Id ile kullanıcı alınırken hata oluştu.", error);
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

  const handleCityId = async (cityId: number) => {
    try {
      const result = await cityService.getDistrictsBySelectedCityId(cityId);
      setDistricts(result.data.districts);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchCities();
    getUser(Number(userId));
  }, [userId]);

  const handleSubmit= ()=>{
    toastr.success(ProfileInformationEditToastrMsg.profileInformationsUpdateSuccess);
  }

  const initialValues: ProfileDto = {
    id: Number(userId),
    firstname: "",
    lastname: "",
    phone:"",
    birthdate: new Date(),
    nationalIdentity : "",
    email: "",
    city:"",
    country:"",
    district:"",
    addressDetail:"",
    aboutMe:"",
    status: false,
  };

  return (
    <div className="container mt-5">
      <div className="information-photo-cont">
        <Image
          src={process.env.PUBLIC_URL + "/images/pp.png"}
          roundedCircle
          style={{ width: "100%" }}
        />
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <FormikInput
                  type="text"
                  name="firstName"
                  label={ProfileInformationEditTexts.label1}
                  value={profileData?.firstName || ProfileInformationEditTexts.placeholder1}
                  placeHolder={ ProfileInformationEditTexts.placeholder1}
                  disabled={true}
                />
              </Col>
              <Col>
                <FormikInput
                  type="text"
                  name="lastName"
                  label={ProfileInformationEditTexts.label2}
                  value={profileData?.lastName || ProfileInformationEditTexts.placeholder2}
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
                      defaultCountry="TR"
                      name="phone"
                      value={value}
                      onChange={setValue}
                      className="my-custom-input"
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <FormikInput
                  type="date"
                  name="birthdate"
                  label={ProfileInformationEditTexts.label4}
                  placeHolder={ProfileInformationEditTexts.placeholder4}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  type="number"
                  name="identityNumber"
                  label={ProfileInformationEditTexts.label5}
                  placeHolder={ProfileInformationEditTexts.placeholder5}
                />
              </Col>
              <Col>
                <FormikInput
                  type="email"
                  name="email"
                  label={ProfileInformationEditTexts.label6}
                  value={profileData?.email || ProfileInformationEditTexts.placeholder6}
                  placeHolder={profileData?.email || ProfileInformationEditTexts.placeholder6}
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
                  placeHolder={ProfileInformationEditTexts.placeholder7}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text">{ProfileInformationEditTexts.label8}</label>
                <SelectBox
                  name="city"
                  defaultText={ProfileInformationEditTexts.placeholder8}
                  selectBoxArray={cities}
                  onCitySelect={handleCityId}
                />
              </Col>
              <Col>
                <label className="input-label-text">{ProfileInformationEditTexts.placeholder9}</label>
                <SelectBox
                  name="district"
                  defaultText={ProfileInformationEditTexts.label9}
                  selectBoxArray={districts}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="street">
                {ProfileInformationEditTexts.textArea1}
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="10"
                  as="textarea"
                  id="street"
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
                  name="aboutMe"
                  maxLength={textAreaLength}
                ></Field>
              </Col>
            </Row>
            <Row>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                {ProfileInformationEditTexts.checkBox}
              </label>
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

export default ProfileInformationEdit2;
