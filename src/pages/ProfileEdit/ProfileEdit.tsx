import { Card, Col, Container, Nav, Row, TabContainer } from "react-bootstrap";
import ProfileEditSidebar from "../../layouts/ProfileEditSidebar/ProfileEditSidebar";
import { Route, Routes } from "react-router";
import ProfileInformationEdit from "../../components/ProfileEdit/ProfileInformationEdit";
import ExperienceEdit from "../../components/ProfileEdit/ExperienceEdit";
import GradutionEdit from "../../components/ProfileEdit/GraduationEdit";
import SkillEdit from "../../components/ProfileEdit/SkillEdit";
import CertificateEdit from "../../components/ProfileEdit/CertificateEdit";
import SocialMediaAccountEdit from "../../components/ProfileEdit/SocialMediaAccountEdit";
import LanguageEdit from "../../components/ProfileEdit/LanguageEdit";
import Settings from "../../components/ProfileEdit/Settings";
import { useState } from "react";

type Props = {};

const profileEditUrl = "/profilim/profilimi-duzenle";

const ProfileEdit = (props: Props) => {
  const [activeTab, setActiveTab] = useState("kisiselbilgilerim");


  const renderContent = () => {
    switch (activeTab) {
      case "kisiselbilgilerim":
        return <ProfileInformationEdit/>;
      case "deneyimlerim":
        return <ExperienceEdit/>
      case "egitimhayatim":
        return <GradutionEdit/>
      case "yetkinliklerim":
        return <SkillEdit/>
      case "sertifikalarım":
        return <CertificateEdit/>
      case "medya":
        return <SocialMediaAccountEdit/>
      case "yabancı dillerim":
        return <LanguageEdit/>
      case "ayarlar":
        return <Settings/>
      default:
        return "İçerik bulunamadı."
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={3} className="col-control">
          <Nav className="flex-column ">
            <Nav.Link onClick={() => setActiveTab("kisiselbilgilerim")}>Kişisel Bilgilerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("deneyimlerim")}>Deneyimlerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("egitimhayatim")}>Eğitim Hayatım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yetkinliklerim")}>Yetkinliklerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("sertifikalarım")}>Sertifikalarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("medya")}>Medya Hesaplarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yabancı dillerim")}>Yabancı Dillerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("ayarlar")}>Ayarlar</Nav.Link>
          </Nav>
          </Col>
          <Col xs={9}>
          <Card className="card-b">
          <Card.Body>
            {renderContent()}
            </Card.Body>
          </Card>
         </Col>
        </Row>
        </Container>
    </div>
  );
};

export default ProfileEdit;
