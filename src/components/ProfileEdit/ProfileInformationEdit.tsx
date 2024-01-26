import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import ProfileInput from "./ProfileInput";
import { countries } from "./countries";
import { GetCityItem } from "../../models/responses/city/getCityResponse";
import CityService from "../../services/cityService";
import DistrictService from "../../services/districtService";
import { GetDistrictItem } from "../../models/responses/district/getDistrictResponse";
// import { GetAllDistrictByIdCity, GetDistrictByIdCityItem, districtItem } from "../../models/responses/city/getAllDistrictByIdCityResponse";
import {
  GetAllDistrictByIdCity,
  GetAllDistrictByIdCityItem,
  GetDistrictByIdCityNameItem
} from "../../models/responses/city/getAllDistrictByIdCityResponse";
type Props = {};
const initialValues: GetCityItem = {
    id: 0,
    name: "",
  },
  other = {
    firstname: "",
    lastname: "",
    value: "", // This corresponds to the selected country
    phone: "",
    birthdate: "",
    "identity-number": "",
    email: "",
    country: "", // Assuming this field corresponds to the country, you may need to adjust it
    street: "",
    checked: false, // Assuming this field corresponds to the checkbox
    degree: "",
    univercityName: "",
    department: "",
    startDate: new Date(),
    endDate: new Date(),
    graduationDate: new Date(),
    toggle: "Devam ediyorum",
  };

const ProfileInformationEdit = (props: Props) => {
  const [city, setCity] = useState<GetCityItem[]>([]);
  const [getDistrictByCityId, setGetDistrictByCityId] = useState<GetAllDistrictByIdCityItem[]>([]);
  const [cityName , setCityName] = useState<any>();
  const [districtName, setDistrict] = useState<any>();

  //Dropdown City List
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const result = await CityService.getByFilter(0, 81);
        console.log(result);
        setCity(result.data.items);

      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchCities();
  }, []);

  // Dropdown District List
  const fetchDistrict = async (cityId: any) => {
    try {
      const result = await CityService.getAllDistrictByCityId(cityId);
      
      setGetDistrictByCityId(result.data.districts);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  //Dropdown Selected City Name
  const fetchCityName = async (cityNameId:any) => {
      try {
        const result = await CityService.getById(cityNameId);
        setCityName(result.data);
        
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

  const handleCitySelect = (selectedCityKey: any, event: Object) => {
    fetchDistrict(selectedCityKey);
    fetchCityName(selectedCityKey);
  };

  
  const handleDistrictSelect = (selectedDistrictKey: any, event: Object) => {
    setDistrict(selectedDistrictKey);
  };

  console.log(cityName)

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
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <ProfileInput
                  type="text"
                  name="firstname"
                  label="Adınız"
                  placeholder="Adınız"
                />
              </Col>
              <Col>
                <ProfileInput
                  type="text"
                  name="lastname"
                  label="Soyadınız"
                  placeholder="Soyadınız"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col className="col-1">
                    {/* <select style={{ width: "fit-content", height: "fit-content" }}> */}
                    {/* <Field as="select" name="value" className="form-control">a
                      <option value="" disabled selected>Seçiniz</option>

                    </Field> */}
                    {/* </select> */}
                    <Field as="select" name="value" className="form-control">
                      {countries.map((country: any) => (
                        <option
                          key={country.name}
                          value={country.name}
                          label={country.name}
                        />
                      ))}
                    </Field>
                  </Col>
                  <Col className="col-11">
                    <ProfileInput
                      type="tel"
                      name="phone"
                      label="Telefon"
                      placeholder="Telefon Numaranız"
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <ProfileInput
                  type="date"
                  name="birthdate"
                  label="Doğum Tarihiniz*"
                  placeholder="Doğum tarihiniz"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ProfileInput
                  type="text"
                  name="identity-number"
                  label="TC Kimlik No*"
                  placeholder="TC Kimlik No"
                />
              </Col>
              <Col>
                <ProfileInput
                  type="email"
                  name="email"
                  label="E-posta*"
                  placeholder="E-posta"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ProfileInput
                  type="text"
                  name="birthdate"
                  label="Ülke*"
                  placeholder="Ülke"
                />
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <label className="input-label-text" htmlFor="birthdate">
                  İl
                </label>
                {/* <ProfileInput type='text' name='birthdate' label='İl*' placeholder='İl' /> }
                <Field
                  className="option form-control my-custom-select"
                  as="select"
                  name="İl"
                  label="İl*"
                  onChange={(e: any) => {
                    const selectedCityId = e.target.value;
                    fetchDistricts(selectedCityId);
                  }}
                >
                  <option value={"Şehir Seçiniz"} selected disabled>Şehir Seçiniz*</option>
                  {city.map((city: any) => (
                    <option className="my-custom-option" key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Field>
              </Col> */}
              <Col>
                <label className="input-label-text">Şehir Seçiniz*</label>
                <Dropdown
                  onSelect={handleCitySelect}
                  className=" calender-select dropdown-profil"
                >
                  <Dropdown.Toggle
                    aria-selected
                    variant="success"
                    id="dropdown-basic"
                    className="btn-profil dropdown-toggle-profil"
                  >
                    <div className="css-14cgata-control">
                      <div className="css-hlgwow">{cityName===undefined ? "Şehir Seçiniz..." : cityName.name}</div> 
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

                  <Dropdown.Menu className="dropdown-menu-profil">
                    <Dropdown.Item className="dropdown-select-text" disabled>
                      --Şehir Seçiniz--
                    </Dropdown.Item>
                    {city.map((city: any) => (
                      <Dropdown.Item
                        className="dropdown-item dropdown-item-profil"
                        key={city.id}
                        eventKey={city.id}
                        aria-selected
                      >
                        {city.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <label className="input-label-text">İlçe Seçiniz*</label>
                <Dropdown
                  onSelect={handleDistrictSelect}
                  className=" calender-select dropdown-profil"
                >
                  <Dropdown.Toggle
                    aria-selected
                    variant="success"
                    id="dropdown-basic"
                    className="btn-profil dropdown-toggle-profil"
                  >
                    <div className="css-14cgata-control">
                      <div className="css-hlgwow">{districtName===undefined ? "İlçe Seçiniz..." : districtName}</div>
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

                  <Dropdown.Menu className="dropdown-menu-profil">
                    
                    {getDistrictByCityId.map((districts: any) => (
                      <Dropdown.Item
                        className="dropdown-item dropdown-item-profil"
                        key={districts}
                        eventKey={districts}
                      >
                        {districts}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="street">
                  Mahalle / Sokak
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="10"
                  as="textarea"
                  id="street"
                  name="street"
                ></Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="street">
                  Hakkımda
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="5"
                  as="textarea"
                  id="street"
                  name="street"
                ></Field>
              </Col>
            </Row>
            <Row>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Devam Ediyorum
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
    </div>
  );
};

export default ProfileInformationEdit;
