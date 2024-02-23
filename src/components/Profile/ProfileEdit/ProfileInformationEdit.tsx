import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../../utilities/Validations/validationMessageRules";
import { GetCityItem } from "../../../models/responses/city/getCityResponse";
import { GetByIdUser } from "../../../models/responses/user/getByIdUser";
import userProfileService from "../../../services/userProfileService";
import cityService from "../../../services/cityService";
import FormikInput from "../../Formik/FormikInput";
import { textAreaLength } from "../../../utilities/Validations/validationMessages";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import toastr from "toastr";
import {
  ProfileInformationEditTexts,
  ProfileInformationEditToastrMsg,
  saveButtonText,
} from "../../../utilities/Constants/constantValues";
import { useAuthContext } from "../../../contexts/AuthContext";
import { AddUserProfileRequest } from "../../../models/requests/userProfile/addUserProfileRequest";
import { UpdateUserProfileRequest } from "../../../models/requests/userProfile/updateUserProfileRequest";

const validationSchema = object({
  // birthDate: UserInformationValidationMessageRule.inputsRequired,
  nationalIdentity: UserInformationValidationMessageRule.identityNumber,
  // country: UserInformationValidationMessageRule.country,
});

type Props = {
  onSelectDistrict?: (districtId: number) => void;
  onSelect?: (cityId: number) => void;
};

const ProfileInformationEdit = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [selectCityId, setSelectCityId] = useState(Number);
  const [selectDistrictId, setSelectDistrictId] = useState();
  const [profileData, setProfileData] = useState<GetByIdUser>();
  const [value, setValue] = useState<any>();
  const { userId } = useAuthContext();
  const [userProfile, setUserProfile] = useState<AddUserProfileRequest>(Object);
  const [updateUserProfile, setUpdateUserProfile] =
    useState<UpdateUserProfileRequest>(Object);
  const [initialValues, setInitialValues] = useState<AddUserProfileRequest>({
    cityId: selectCityId,
    districtId: Number(selectDistrictId),
    phone: "05555555555",
    userId: Number(userId),
    birthDate: new Date(),
    nationalIdentity: "",
    country: "",
    addressDetail: "",
    description: "",
  });

  const getUser = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      setProfileData(result.data);
    } catch (error) {
      console.log("Id ile kullanıcı alınırken hata oluştu.", error);
    }
  };

  const getUserProfile = async (id: number, values: any) => {
    try {
      const result = await userProfileService.getUserProfileByUserId(id);
      console.log("ilk try: ", result);
      if (result) {
        const updateValues: UpdateUserProfileRequest = {
          id: id,
          cityId: values.cityId,
          districtId: values.districtId,
          phone: initialValues.phone,
          userId: id,
          birthDate: values.birthDate,
          nationalIdentity: values.nationalIdentity,
          country: values.country,
          addressDetail: values.addressDetail,
          description: values.description,
        };
        try {
          const result = await userProfileService.update(updateValues);
          setUpdateUserProfile(result.data);
          console.log(result.data);
          toastr.success(
            ProfileInformationEditToastrMsg.profileInformationsUpdateSuccess
          );
        } catch (error) {
          console.log("Profil güncelleme hatası:", error);
        }
      }
    } catch (error) {
      console.log("Id ile kullanıcı alınırken hata oluştu.", error);
      try {
        const result = await userProfileService.add(values);
        console.log(result.data);
        setUserProfile(result.data);
        toastr.success(
          ProfileInformationEditToastrMsg.profileInformationsAddSuccess
        );
      } catch (error) {
        console.log("Profil ekleme hatası:", error);
      }
    }
  };

  // const updateUser = async (
  //   UpdateUserProfileRequest: UpdateUserProfileRequest
  // ) => {
  //   try {
  //     const result = await userProfileService.update(UpdateUserProfileRequest);
  //     console.log(result.data);
  //     setUpdateUserProfile(result.data);
  //   } catch (error) {
  //     console.log("Id ile kullanıcı alınırken hata oluştu.", error);
  //   }
  // };

  const fetchCities = async () => {
    try {
      const result = await cityService.getByFilter(0, 81);
      console.log(result.data.items);
      setCities(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleCityId = async (cityId: number) => {
    try {
      const result = await cityService.getDistrictsBySelectedCityId(cityId);
      console.log(result.data.districts);
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
    getUser(Number(userId));
    if (userProfile) {
      setInitialValues({
        cityId: userProfile.cityId,
        districtId: userProfile.districtId,
        phone: userProfile.phone,
        userId: userProfile.userId,
        birthDate: userProfile.birthDate,
        nationalIdentity: userProfile.nationalIdentity,
        country: userProfile.country,
        addressDetail: userProfile.addressDetail,
        description: userProfile.description,
      });
    }
  }, [userId, userProfile]);

  const handleSubmit = async (
    values: AddUserProfileRequest | UpdateUserProfileRequest
  ) => {
    getUserProfile(Number(userId), values);
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
        // validationSchema={validationSchema}
        initialValues={initialValues}
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
                    profileData?.firstName ||
                    ProfileInformationEditTexts.placeholder1
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
                    profileData?.lastName ||
                    ProfileInformationEditTexts.placeholder2
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
                      defaultCountry="TR"
                      onChange={setValue}
                      value="05555555555"
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
                  placeHolder={ProfileInformationEditTexts.placeholder4}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  type="text"
                  name="nationalIdentity"
                  label={ProfileInformationEditTexts.label5}
                  placeHolder={ProfileInformationEditTexts.placeholder5}
                />
              </Col>
              <Col>
                <FormikInput
                  type="email"
                  name="email"
                  label={ProfileInformationEditTexts.label6}
                  value={
                    profileData?.email ||
                    ProfileInformationEditTexts.placeholder6
                  }
                  placeHolder={
                    profileData?.email ||
                    ProfileInformationEditTexts.placeholder6
                  }
                  disabled={true}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  name="country"
                  label={ProfileInformationEditTexts.label7}
                  placeHolder={ProfileInformationEditTexts.placeholder7}
                />
                {/* <div className="mb-3">
                    <label className="input-label-text">Ülke</label>
                  <Field
                    name="country"
                    type="text"
                    className="form-control my-custom-input"
                  />
                </div> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text">
                  {ProfileInformationEditTexts.label8}
                </label>
                {/* <SelectBox
                  name="cityId"
                  defaultText={ProfileInformationEditTexts.placeholder8}
                  selectBoxArray={cities}
                  onSelect={handleCityId}
                /> */}
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
                {/* <SelectBox
                  name="districtId"
                  defaultText={ProfileInformationEditTexts.label9}
                  selectBoxArray={districts}
                  onSelect={handleDistrictId}
                /> */}
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
