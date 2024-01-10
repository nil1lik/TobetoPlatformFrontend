import { Col, Container, Row } from "react-bootstrap";
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

type Props = {};

const profileEditUrl = "/profilim/profilimi-duzenle";

const ProfileEdit = (props: Props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <ProfileEditSidebar />
          </Col>
          <Col xs={9}>
         
         </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileEdit;
