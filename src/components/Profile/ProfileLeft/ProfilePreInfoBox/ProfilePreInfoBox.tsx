import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import ProfilePreInfo from "./ProfilePreInfo";
import { GetByIdUser } from "../../../../models/responses/user/getByIdUser";
import { useAuthContext } from "../../../../contexts/AuthContext";
import userProfileService from "../../../../services/userProfileService";

type Props = {
  profilePhotoSrc: string;
};

const ProfilePreInfoBox = (props: Props) => {
  const profilePhoto =
    process.env.PUBLIC_URL + `/images/${props.profilePhotoSrc}`;
  const [user, setUser] = useState<GetByIdUser>();
  const { userId } = useAuthContext();

  const fethUserData = async (userId: number) => {
    const result = await userProfileService.getByUserId(userId);
    setUser(result.data);
  };

  useEffect(() => {
    fethUserData(Number(userId));
  }, [userId]);

  return (
    <Card className="preInfoBox">
      <Card.Body className="preInfoPhotoCont">
        <Card.Img src={profilePhoto} className="preInfoPhoto" />
      </Card.Body>
      <Card.Body className="">
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="cv-name.svg"
          header="Ad Soyad"
          value={`${user?.firstName} ${user?.lastName}`}
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="cv-date.svg"
          header="Doğum Tarihi"
          value="01.01.2000"
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="cv-mail.svg"
          header="E-Posta Adresi"
          value={`${user?.email}`}
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="cv-phone.svg"
          header="Telefon Numarası"
          value="+905555555555"
        />
      </Card.Body>
    </Card>
  );
};

export default ProfilePreInfoBox;
