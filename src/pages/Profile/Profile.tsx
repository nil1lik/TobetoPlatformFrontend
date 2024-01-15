import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProfilePreInfoBox from '../../components/Profile/ProfilePreInfoBox/ProfilePreInfoBox'
import "./profile.css"
import ProfileBox from '../../components/Profile/ProfileBox'
import ProfileSkill from '../../components/Profile/ProfileSkill'
import ProfileLanguage from '../../components/Profile/ProfileLanguage'
import ProfilePreInfo from '../../components/Profile/ProfilePreInfoBox/ProfilePreInfo'


type Props = {}

const Profile = (props: Props) => {

  return (
    <Container>
      <Row>
        <Col className='col-4'>
          <Row>
            <Col className='col-12'>
              <ProfilePreInfoBox profilePhotoSrc='pp2.png' />
            </Col>
            <Col className='col-12'>
              <ProfileBox title='Hakkımda'>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox title='Yetkinliklerim'>
                <div className='profileSkillCont'>
                  <ProfileSkill skillName="HTML" />
                  <ProfileSkill skillName='CSS' />
                  <ProfileSkill skillName='JAVASCRİPT' />
                </div>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox title='Yabancı Diller'>
                  {/* <ProfileLanguage iconSrc='globe.svg' header='Ingilizce' value='Derdimi Anlatacak Kadar'/> */}
                  <div className='profileSkillCont'>
                  <ProfilePreInfo cardContClass='profileLangCont' iconContClass='' headerClass='profileSkillName' valueClass='profileSkillLevel' iconSrc="globe.svg" header='İngilizce' value='Orta Seviye'/>
                  </div>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox title='Sertifikalarım'>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </ProfileBox>
            </Col>
            <Col className='col-12'>
              <ProfileBox title='Medya Hesaplarım'>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </ProfileBox>
            </Col>
          </Row>
        </Col>

        <Col className='col-8' style={{ backgroundColor: "blue" }}>
          <Row>
            <Col className='col-12'>Tobeto İşte Başarı Modeli</Col>
            <Col className='col-12'>Tobeto Seviye Testlerim</Col>
            <Col className='col-12'> Yetkinlik Rozetlerim</Col>
            <Col className='col-12'>Aktivite Haritam</Col>
            <Col className='col-12'>Eğitim Hayatım ve Deneyimlerim</Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // <Link to={"/profilim/profilimi-duzenle"}>
    //   <div>Profile</div>
    // </Link>
  )
}

export default Profile