import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProfilePreInfoBox from "../../components/Profile/ProfileLeft/ProfilePreInfoBox/ProfilePreInfoBox";
import "./profile.css";
import ProfileBox from "../../components/Profile/ProfileBox";
import ProfilePreInfo from "../../components/Profile/ProfileLeft/ProfilePreInfoBox/ProfilePreInfo";
import ProfileRoundItem from "../../components/Profile/ProfileLeft/ProfileRoundItem";
import ProfileMediaAccounts from "../../components/Profile/ProfileLeft/ProfileMediaAccounts";
import ProfileSuccessModel from "../../components/Profile/ProfileRight/ProfileSuccessModel/ProfileSuccessModel";
import { Link } from "react-router-dom";
import ProfileBadge from "../../components/Profile/ProfileRight/ProfileBadge";
import ProfileExam from "../../components/Profile/ProfileRight/ProfileExam";
import ProfileEducationMap from "../../components/Profile/ProfileRight/ProfileEducationMap";
import ProfileHeatMap from "../../components/Profile/ProfileRight/ProfileHeatMap";
import { useAuthContext } from "../../contexts/AuthContext";
import userProfileService from "../../services/userProfileService";
import { useProfileContext } from "../../contexts/ProfileContext";
import { formatDate } from "@fullcalendar/core";
import FormattedDate from "../../utilities/Helpers/FormattedDate";

type Props = {};

const Profile = (props: Props) => {
  const {
    userDetails,
    addInfoToUserDetails,
    addUserDetails,
    addSkillsToUserDetails,
    addLanguagesToUserDetails,
    addCertificatesToUserDetails,
  } = useProfileContext();
  const { userId } = useAuthContext();
  const [successModel, setSuccessModel] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await userProfileService.getByUserId(Number(userId));
        addInfoToUserDetails(result.data);

        const detailsResult = await userProfileService.getUserDetails(
          Number(userId)
        );
        addUserDetails({
          ...detailsResult.data,
          birthDate: formatDate(detailsResult.data.birthDate),
        });
        const skillsResult = await userProfileService.getSkillsByUserId(
          Number(userId)
        );
        addSkillsToUserDetails(skillsResult.data.skillDtoItems);
        const languagesResult = await userProfileService.getLanguagesByUserId(
          Number(userId)
        );
        addLanguagesToUserDetails(languagesResult.data.languageDtoItems);
        const certificatesResult =
          await userProfileService.getCertificatesByUserId(Number(userId));
          console.log(certificatesResult.data.certificateDtoItems);
        addCertificatesToUserDetails(
          certificatesResult.data.certificateDtoItems
        );
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} style={{ textAlign: "right" }}>
          <Link to={"/profilim/profilimi-duzenle"}>
            <span className="profileEditButton"></span>
          </Link>
          <span className="profileShareButton"></span>
        </Col>
      </Row>
      <Row>
        {/* PROFILE LEFT START */}
        <Col className="col-4">
          <Row>
            <Col className="col-12">
              <ProfilePreInfoBox profilePhotoSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708374477/tobetouserlogo_aekd7i.png" />
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Hakkımda">
                <Card.Text>{userDetails.description}</Card.Text>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Yetkinliklerim">
                <div className="profileRoundItemCont">
                  {userDetails.skillDtoItems &&
                    userDetails.skillDtoItems.map((skill) => (
                      <ProfileRoundItem className="profileRoundItem">
                        {<Card.Text>{skill.skillName}</Card.Text>}
                      </ProfileRoundItem>
                    ))}
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Yabancı Diller">
                <div className="profileRoundItemCont">
                  {userDetails.languageDtoItems &&
                    userDetails.languageDtoItems.map((language) => (
                      <ProfilePreInfo
                        cardContClass="profileLangCont"
                        iconContClass=""
                        headerClass="profileSkillName"
                        valueClass="profileSkillLevel"
                        iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593240/globe_amwg5s.svg"
                        header={language.languageName}
                        value={language.languageLevelName}
                      />
                    ))}
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Sertifikalarım">
                <div className="profileRoundItemCont">
                  {userDetails.certificatesDtoItems &&
                    userDetails.certificatesDtoItems.map((certificate) => (
                      <ProfileRoundItem className="profileRoundItem hover" title={certificate.certificateName} imageUrl={certificate.certificateFileUrl}>
                        <Card.Text className="profileCertificate">
                          {certificate.certificateName}
                        </Card.Text>
                      </ProfileRoundItem>
                    ))}
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Medya Hesaplarım">
                <div className="profileMediaCont">
                  <ProfileMediaAccounts
                    imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-github_foneym.svg"
                    className="mediaAccountPhoto"
                    Link="https://www.github.com"
                  />
                  <ProfileMediaAccounts
                    imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593590/cv-linkedn_ctqmta.svg"
                    className="mediaAccountPhoto"
                    Link="https://www.linkedin.com"
                  />
                  <ProfileMediaAccounts
                    imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-behance_izytxl.svg"
                    className="mediaAccountPhoto"
                    Link="https://www.behance.net"
                  />
                </div>
              </ProfileBox>
            </Col>
          </Row>
        </Col>
        {/* PROFILE LEFT END */}
        {/* PROFILE RIGHT START */}
        <Col className="col-8">
          <Row>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Tobeto İşte Başarı Modelim"
              >
                {successModel ? (
                  <ProfileSuccessModel />
                ) : (
                  <div className="successModelDefault">
                    <p>
                      İşte Başarı Modeli Değerlendirmesiyle yetkinliklerini ölç
                    </p>
                    <button>Başla</button>
                  </div>
                )}
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Tobeto Seviye Testlerim"
              >
                <div className="profileExamsCont">
                  <ProfileExam
                    profileExamName="Herkes için Kodlama 1B Değerlendirme Sınavı"
                    profileExamDate="12-10-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Front End"
                    profileExamDate="12-10-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Herkes için Kodlama 1B Değerlendirme Sınavı"
                    profileExamDate="17-11-2023"
                    profileExamPoint="88.00"
                  />
                  <ProfileExam
                    profileExamName="Back End"
                    profileExamDate="17-11-2023"
                    profileExamPoint="88.00"
                  />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Yetkinlik Rozetlerim"
              >
                <div className="profileBadgeMainCont">
                  <ProfileBadge imageSrc="istanbulkodluyorbadge.jpg" />
                  <ProfileBadge imageSrc="isbecerileribadge.jpg" />
                  <ProfileBadge imageSrc="isyönetimibecerileribadge.jpg" />
                  <ProfileBadge imageSrc="isyönetimibecerileribadge2.jpg" />
                  <ProfileBadge imageSrc="kisiselgelisimbadge.jpg" />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Aktivite Haritam">
                <ProfileHeatMap />
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Eğitim Hayatım ve Deneyimlerim"
              >
                <ProfileEducationMap />
              </ProfileBox>
            </Col>
          </Row>
        </Col>
        {/* PROFILE RIGHT END */}
      </Row>
    </Container>
  );
};
export default Profile;
