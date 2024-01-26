import React, { useEffect, useState, ReactNode } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import ProfileInput from "./ProfileInput";
import { GetCityItem } from "../../models/responses/city/getCityResponse";
import CityService from "../../services/cityService";
import SelectBox from "./SelectBox";

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

const ProfileInformationEdit2 = (props: Props) => {
    const [cities, setCities] = useState<GetCityItem[]>([]);
    // const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
    const [districts, setDistricts] = useState<any[]>([]);


    const handleCityId = async (cityId: number) => {
        // setSelectedCityId(cityId);
        try {
            const result = await CityService.getDistrictsBySelectedCityId(cityId);
            setDistricts(result.data.districts)

        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    }

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const result = await CityService.getByFilter(0, 81);
                setCities(result.data.items);

            } catch (error) {
                console.error("API isteği sırasında bir hata oluştu:", error);
            }
        };
        fetchCities();
    }, []);

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

                                        {/* <Field as="select" name="value" className="form-control">
                      {countries.map((country: any) => (
                        <option
                          key={country.name}
                          value={country.name}
                          label={country.name}
                        />
                      ))}
                    </Field> */}
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
                            <Col>
                                <label className="input-label-text">Şehir Seçiniz*</label>
                                <SelectBox defaultText="İl Seçiniz*" selectBoxArray={cities} onCitySelect={handleCityId} />
                            </Col>
                            <Col>
                                <label className="input-label-text">İlçe Seçiniz*</label>
                                <SelectBox defaultText="İlçe Seçiniz*" selectBoxArray={districts} />
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

export default ProfileInformationEdit2;