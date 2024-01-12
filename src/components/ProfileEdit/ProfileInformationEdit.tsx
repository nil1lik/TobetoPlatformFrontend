import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ProfileInput from './ProfileInput';
import { countries } from "./countries"

type Props = {}

const ProfileInformationEdit = (props: Props) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    value: '', // This corresponds to the selected country
    phone: '',
    birthdate: '',
    'identity-number': '',
    email: '',
    country: '', // Assuming this field corresponds to the country, you may need to adjust it
    'street': '',
    checked: false, // Assuming this field corresponds to the checkbox
    degree: '',
    univercityName: '',
    department: '',
    startDate: new Date(),
    endDate: new Date(),
    graduationDate: new Date(),
    toggle: 'Devam ediyorum',
  };

  return (
    <div className="container mt-5">
      <div className='information-photo-cont'>
      <Image src={process.env.PUBLIC_URL + "/images/pp.png"} roundedCircle style={{width: "100%" }} />
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
                <ProfileInput type='text' name='firstname' label='Adınız' placeholder='Adınız' />
              </Col>
              <Col>
                <ProfileInput type='text' name='lastname' label='Soyadınız' placeholder='Soyadınız' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col className='col-1'>
                    {/* <select style={{ width: "fit-content", height: "fit-content" }}> */}
                    {/* <Field as="select" name="value" className="form-control">a
                      <option value="" disabled selected>Seçiniz</option>

                    </Field> */}
                    {/* </select> */}
                    <Field as="select" name="value" className="form-control">
                      {countries.map((country: any) => (
                        <option key={country.name} value={country.name} label={country.name} />
                      ))}
                    </Field>
                  </Col>
                  <Col className='col-11'>
                    <ProfileInput type='tel' name='phone' label='Telefon' placeholder='Telefon Numaranız' />
                  </Col>
                </Row>
              </Col>
              <Col>
                <ProfileInput type='date' name='birthdate' label='Doğum Tarihiniz*' placeholder='Telefon Numaranız' />
              </Col>
            </Row>
            <Row>
              <Col>
                <ProfileInput type='text' name='identity-number' label='TC Kimlik No*' placeholder='TC Kimlik No' />
              </Col>
              <Col>
                <ProfileInput type='email' name='email' label='E-posta*' placeholder='E-posta' />
              </Col>
            </Row>
            <Row>
              <Col>
                <ProfileInput type='text' name='birthdate' label='Ülke*' placeholder='Ülke' />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className='input-label-text' htmlFor="birthdate">İlçe</label>
                {/* <ProfileInput type='text' name='birthdate' label='İl*' placeholder='İl' /> */}
                <Field className="form-control my-custom-input" as="select" name='İl' label='İl*' >
                  <option selected disabled>Seçiniz</option>
                  <option>İl1</option>
                  <option>İl2</option>
                  <option>İl3</option>
                </Field>
              </Col>
              <Col>
                <label className='input-label-text' htmlFor="birthdate">İlçe</label>
                {/* <ProfileInput type='text' name='birthdate' label='İlçe*' placeholder='İlçe' /> */}
                <Field className="form-control my-custom-input" as="select" name='İlçe' label='İlçe*' >
                  <option selected disabled>Seçiniz</option>
                  <option>İlçe1</option>
                  <option>İlçe2</option>
                  <option>İlçe3</option>
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className='input-label-text' htmlFor="street">Mahalle / Sokak</label>
                <Field className="form-control my-custom-input" rows="5" as="textarea" id="street" name="street"></Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className='input-label-text' htmlFor="street">Hakkımda</label>
                <Field className="form-control my-custom-input" rows="5" as="textarea" id="street" name="street"></Field>
              </Col>
            </Row>
            <Row>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Devam ediyorum
              </label>
            </Row>
            <button type="submit" className="button-save py-2 mb-3 mt-4 d-inline-block ">
              Kaydet
            </button>
          </Container>
        </Form>
      </Formik>
    </div>
  )
}

export default ProfileInformationEdit