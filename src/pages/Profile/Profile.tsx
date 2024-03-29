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
import ProfileHeatMap from "../../components/Profile/ProfileRight/ProfileHeatMap";
import { useAuthContext } from "../../contexts/AuthContext";
import userProfileService from "../../services/userProfileService";

import { useProfileContext } from "../../contexts/ProfileContext";
import { formatDate } from "@fullcalendar/core";
import { startButtonText } from "../../utilities/Constants/constantValues";
import ProfileEducationMap from "../../components/Profile/ProfileRight/ProfileEducationMap";

type Props = {};

const Profile = (props: Props) => {
  const {
    userDetails,
    addInfoToUserDetails,
    addUserDetails,
    addSkillsToUserDetails,
    addLanguagesToUserDetails,
    addCertificatesToUserDetails,
    addSocialMediaAccountsToUserDetails,
    addExamsToUserDetails,
    addGraduationsToUserDetails,
    addExperiencesToUserDetails,
  } = useProfileContext();
  const { userId } = useAuthContext();
  const [successModel, setSuccessModel] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await userProfileService.getByUserId(Number(userId));
        addInfoToUserDetails(result.data);

        const examResult = await userProfileService.getExamByUserId(
          Number(userId)
        );
        addExamsToUserDetails(examResult.data.examDtoItems);

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

        const socialMediaResult =
          await userProfileService.getSocialMediaAccountByUserId(
            Number(userId)
          );
        addSocialMediaAccountsToUserDetails(
          socialMediaResult.data.socialMediaAccountsItems
        );

        // addLanguagesToUserDetails(languagesResult.data.languageDtoItems);
        const certificatesResult =
          await userProfileService.getCertificatesByUserId(Number(userId));
        addCertificatesToUserDetails(
          certificatesResult.data.certificateDtoItems
        );

        const graduationsresult =
          await userProfileService.getGraduationsByUserId(Number(userId));
        addGraduationsToUserDetails(graduationsresult.data.graduationsDtoItems);

        const experiencesResult =
          await userProfileService.getExperiencesByUserId(Number(userId));
        addExperiencesToUserDetails(experiencesResult.data.experiencesDtoItems);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const socialMediaAccountImage = (accountId: number): string => {
    switch (accountId) {
      case 1:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709045931/instagram_gvzr96.svg"; //Instagram
      case 2:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709046963/icons8-twitter-circled_5_mcyzjo.svg"; //Twitter
      case 3:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593590/cv-linkedn_ctqmta.svg"; // LinkedIn
      case 4:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-behance_izytxl.svg"; // Behance
      case 5:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1709046040/dribble_keqdag.svg"; //Dribble
      case 6:
        return "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593589/cv-github_foneym.svg"; // GitHub
      default:
        return "https://example.com/default-image.jpg"; // Varsayılan resim URL'si
    }
  };
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
                <div
                  className="profileRoundItemCont"
                  style={{ pointerEvents: "none" }}
                >
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
                      <ProfileRoundItem
                        className="profileRoundItem hover"
                        title={certificate.certificateName}
                        imageUrl={certificate.certificateFileUrl}
                      >
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
                  {userDetails.socialMediaAccountsItems &&
                    userDetails.socialMediaAccountsItems.map((medias: any) => (
                      <ProfileMediaAccounts
                        imageSrc={socialMediaAccountImage(
                          Number(medias.socialMediaCategoryId)
                        )}
                        className="mediaAccountPhoto"
                        Link={medias.mediaUrl}
                      />
                    ))}
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
                    <button>{startButtonText}</button>
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
                  {userDetails.examDtoItems &&
                    userDetails.examDtoItems.map((exam: any) => (
                      <ProfileExam
                        profileExamName={exam.examName}
                        profileExamDate="12-10-2023"
                        profileExamPoint="88.00"
                      />
                    ))}
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox
                titleClass="profileBoxTitle"
                title="Yetkinlik Rozetlerim"
              >
                <div className="profileBadgeMainCont">
                  <ProfileBadge imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709018545/istanbulkodluyorbadge_ewemqw.png" />
                  <ProfileBadge imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709018545/isbecerileribadge_z4tgsk.png" />
                  <ProfileBadge imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709018545/isy%C3%B6netimibecerileribadge2_eklwq5.png" />
                  <ProfileBadge imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709018545/isy%C3%B6netimibecerileribadge_rklvqx.png" />
                  <ProfileBadge imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709018545/kisiselgelisimbadge_be9duy.png" />
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
                <ProfileEducationMap experiencesDtoItems={userDetails.experiencesDtoItems} graduationsDtoItems={userDetails.graduationsDtoItems} />
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
