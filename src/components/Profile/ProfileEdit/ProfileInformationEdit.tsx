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
  const [selectedCityId, setSelectedCityId] = useState<number | undefined>(0);
  const [selectDistrictId, setSelectDistrictId] = useState<number | undefined>(
    undefined
  );
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

  const fetchUserInformation = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      setUserInformation(result.data);
      setUserDetails((prevState: GetUserDetails) => ({
        ...prevState,
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
      }));
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchUserDetails = async (userId: number) => {
    try {
      const result = await userProfileService.getUserDetails(userId);
      const apiDateString = "2000-02-24T21:00:37.581";
      const apiDate = new Date(apiDateString);

      const onlyDate = apiDate.toISOString().split("T")[0];
      console.log(onlyDate); // "2000-02-24"
      setUserDetails({
        ...result.data,
        birthDate: onlyDate,
      });
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
    console.log("handleCityChange: ", selectedOptionId);
  };

  const handleSelectDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptionId = parseInt(event.target.value); // Seçilen option'un id'sini alın
    handleDistrictId(selectedOptionId);
  };

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

  useEffect(() => {
    fetchCities();
    fetchUserInformation(Number(userId));
    fetchUserDetails(Number(userId));
  }, []);

  useEffect(() => {
    // Örnek olarak, ilk şehri seçili olarak belirleme
    if (cities.length > 0) {
      setSelectedCityId(userDetails.cityId); // userDetails.cityId ile seçili şehrin id'sini alıyoruz
      handleCityId(userDetails.cityId);
    }
  }, [userDetails.cityId, cities]);

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
        {({ values, setFieldValue }) => (
          <Form>
            <Container>
              <Row>
                <Col>
                  <FormikInput
                    name="firstName"
                    label={ProfileInformationEditTexts.label1}
                    disabled={!!userDetails.firstName}
                  />
                </Col>
                <Col>
                  <FormikInput
                    name="lastName"
                    label={ProfileInformationEditTexts.label2}
                    disabled={!!userDetails.lastName}
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
                        value={values.phone}
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
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormikInput
                    type="text"
                    name="nationalIdentity"
                    label={ProfileInformationEditTexts.label5}
                    disabled={!!userDetails.nationalIdentity.length}
                  />
                </Col>
                <Col>
                  <FormikInput
                    type="email"
                    name="email"
                    label={ProfileInformationEditTexts.label6}
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
                    disabled={!!userDetails.country && !!userDetails.nationalIdentity}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="input-label-text">
                    {ProfileInformationEditTexts.label8}
                  </label>
                  <Field
                    name="cityId"
                    as="select"
                    value={selectedCityId} // Varsayılan olarak seçili olan şehri belirtiyoruz
                    onChange={(e: any) => {
                      const cityId = parseInt(e.target.value);
                      setSelectedCityId(cityId);
                      setFieldValue("cityId", cityId);
                      handleCityId(cityId);
                    }}
                    className={`option form-control my-custom-select`}
                  >
                    {cities.map((element) => (
                      <option
                        key={element.id || String(element)}
                        value={element.id}
                        className="form-control my-custom-input"
                      >
                        {element.name || String(element)}
                      </option>
                    ))}
                  </Field>
                </Col>
                <Col>
                  <label className="input-label-text">
                    {ProfileInformationEditTexts.placeholder9}
                  </label>
                  <Field
                    name="districtId"
                    as="select"
                    onChange={(e: any) => {
                      const districtId = parseInt(e.target.value);
                      setFieldValue("districtId", districtId);
                      handleDistrictId(districtId);
                    }}
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
                  </Field>
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
        )}
      </Formik>
    </div>
  );
};

export default ProfileInformationEdit;
