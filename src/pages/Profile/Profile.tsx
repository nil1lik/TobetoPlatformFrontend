import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
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
    AddUserDetails,
    addSkillsToUserDetails,
    addExamsToUserDetails,
    addInfoToUserDetails,
    addSocialMediaAccountsToUserDetails,
  } = useProfileContext();
  const { userId } = useAuthContext();
  const [successModel, setSuccessModel] = useState<boolean>(false);

  const fetchUserInformation = async (userId: number) => {
    try {
      const result = await userProfileService.getByUserId(userId);
      addInfoToUserDetails(result.data);
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchUserDetails = async (userId: number) => {
    try {
      const result = await userProfileService.getUserDetails(userId);
      AddUserDetails({
        ...result.data,
        birthDate: formatDate(result.data.birthDate),
      });
    } catch (error) {
      console.log("Kullanıcı profili bulunamadı.", error);
    }
  };

  const fetchExamByUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getExamByUserId(userId);
      console.log(result);
      addExamsToUserDetails(result.data.examDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSocialMediaAccountByUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getSocialMediaAccountByUserId(
        userId
      );
      addSocialMediaAccountsToUserDetails(result.data.socialMediaAccountsItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchSkillbyUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getSkillByUserId(userId);
      console.log(result);
      addSkillsToUserDetails(result.data.skillDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchUserInformation(Number(userId));
    fetchUserDetails(Number(userId));
    fetchExamByUserId(Number(userId));
    fetchSkillbyUserId(Number(userId));
    fetchSocialMediaAccountByUserId(Number(userId));
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
                  <ProfilePreInfo
                    cardContClass="profileLangCont"
                    iconContClass=""
                    headerClass="profileSkillName"
                    valueClass="profileSkillLevel"
                    iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593240/globe_amwg5s.svg"
                    header="İngilizce"
                    value="Orta Seviye"
                  />
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Sertifikalarım">
                <div className="profileRoundItemCont">
                  <ProfileRoundItem className="profileRoundItem hover">
                    {
                      <Card.Text className="profileCertificate">
                        Lorem, ipsum dolor.
                      </Card.Text>
                    }
                  </ProfileRoundItem>
                  <ProfileRoundItem className="profileRoundItem hover">
                    {
                      <Card.Text className="profileCertificate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Card.Text>
                    }
                  </ProfileRoundItem>
                </div>
              </ProfileBox>
            </Col>
            <Col className="col-12">
              <ProfileBox titleClass="profileBoxTitle" title="Medya Hesaplarım">
                <div className="profileMediaCont">
                  {userDetails.socialMediaAccountsItems &&
                    userDetails.socialMediaAccountsItems.map((medias: any) => (
                      <ProfileMediaAccounts
                        imageSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1709033485/instagram-icon-logo-free-png_zhnpdh.webp"
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
