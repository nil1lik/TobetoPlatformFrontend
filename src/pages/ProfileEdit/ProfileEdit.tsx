import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import ProfileEditSidebar from "../../layouts/ProfileEditSidebar/ProfileEditSidebar";
import { Route, Routes } from "react-router";
import ProfileInformationEdit from "../../components/ProfileEdit/ProfileInformationEdit";
import ExperienceEdit from "../../components/ProfileEdit/ExperienceEdit";
import GradutionEdit from "../../components/ProfileEdit/GradutionEdit";
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
        return <Card.Body><ProfileInformationEdit/></Card.Body>;
      case "deneyimlerim":
        return <Card.Body><ExperienceEdit/></Card.Body>;
      case "egitimhayatim":
        return <Card.Body><GradutionEdit/></Card.Body>;
      case "yetkinliklerim":
        return <Card.Body><SkillEdit/></Card.Body>;
      case "sertifikalarım":
        return <Card.Body><CertificateEdit/></Card.Body>;
      case "medya":
        return <Card.Body><SocialMediaAccountEdit/></Card.Body>;
      case "yabancı dillerim":
        return <Card.Body><LanguageEdit/></Card.Body>;
      case "ayarlar":
        return <Card.Body><Settings/></Card.Body>;
      default:
        return <Card.Body>İçerik bulunamadı.</Card.Body>;
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
          <Nav className="flex-column">
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
          <Card>
            {renderContent()}
          </Card>
         </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileEdit;
