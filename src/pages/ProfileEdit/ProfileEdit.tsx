import { Card, Col, Container, Nav, Navbar, Row, TabContainer } from "react-bootstrap";
import ProfileInformationEdit from "../../components/ProfileEdit/ProfileInformationEdit";
import ExperienceEdit from "../../components/ProfileEdit/ExperienceEdit";
import GradutionEdit from "../../components/ProfileEdit/GraduationEdit";
import SkillEdit from "../../components/ProfileEdit/SkillEdit";
import CertificateEdit from "../../components/ProfileEdit/CertificateEdit";
import SocialMediaAccountEdit from "../../components/ProfileEdit/SocialMediaAccountEdit";
import LanguageEdit from "../../components/ProfileEdit/LanguageEdit";
import Settings from "../../components/ProfileEdit/Settings";
import { useState } from "react";
import React from "react";
import "../../layouts/ProfileEditSidebar/profileEditSidebar.css"
import SidebarButton from "../../components/ProfileEdit/SidebarButton";
import { sidebarElements } from "../../constants/sidebarElements";

type Props = {};

const profileEditUrl = "/profilim/profilimi-duzenle";

const ProfileEdit = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("kisiselbilgilerim");

  const handleActiveTab = (text: string) => {
    setActiveTab(text);
  }

  const renderContent = () => {
    switch (activeTab) {
      case "kisiselbilgilerim":
        return <ProfileInformationEdit />;
      case "deneyimlerim":
        return <ExperienceEdit />
      case "egitimhayatim":
        return <GradutionEdit />
      case "yetkinliklerim":
        return <SkillEdit />
      case "sertifikalarım":
        return <CertificateEdit />
      case "medya":
        return <SocialMediaAccountEdit />
      case "yabancı dillerim":
        return <LanguageEdit />
      case "ayarlar":
        return <Settings />
      default:
        return "İçerik bulunamadı."
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={3} className="col-control">
            <Navbar className="flex-column profile-edit-nav" >
              {/* <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-person" onClick={() => setActiveTab("kisiselbilgilerim")}> Kişisel Bilgilerim</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-briefcase" onClick={() => setActiveTab("deneyimlerim")}> Deneyimlerim</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-book" onClick={() => setActiveTab("egitimhayatim")}> Eğitim Hayatım</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-code-slash" onClick={() => setActiveTab("yetkinliklerim")}> Yetkinliklerim</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-award" onClick={() => setActiveTab("sertifikalarım")}> Sertifikalarım</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-linkedin" onClick={() => setActiveTab("medya")}> Medya Hesaplarım</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-translate" onClick={() => setActiveTab("yabancı dillerim")}> Yabancı Dillerim</Nav.Link>
            <Nav.Link className="profile-edit-nav-btn profile-sidebar-text bi bi-gear" onClick={() => setActiveTab("ayarlar")}> Ayarlar</Nav.Link> */}
              {
                sidebarElements.map((element, index) => (
                  <SidebarButton key={index} name={element.name}
                    setActiveTab={() => handleActiveTab(element.value)} />
                ))
              }
            </Navbar>
          </Col>
          <Col xs={8}>
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
