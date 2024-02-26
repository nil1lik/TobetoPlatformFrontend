import React from "react";
import { Card } from "react-bootstrap";
import ProfilePreInfo from "./ProfilePreInfo";
import {
  useProfileContext,
} from "../../../../contexts/ProfileContext";

type Props = {
  profilePhotoSrc: string;
};

const ProfilePreInfoBox = (props: Props) => {
  const { userDetails } = useProfileContext();

  return (
    <Card className="preInfoBox">
      <Card.Body className="preInfoPhotoCont">
        <Card.Img src={props.profilePhotoSrc} className="preInfoPhoto" />
      </Card.Body>
      <Card.Body className="">
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593405/cv-name_tzumx6.svg"
          header="Ad Soyad"
          value={`${userDetails.firstName} ${userDetails.lastName}`}
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593444/cv-date_qbyvok.svg"
          header="Doğum Tarihi"
          value={userDetails.birthDate}
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593481/cv-phone_h9kegn.svg"
          header="E-Posta Adresi"
          value={`${userDetails.email}`}
        />
      </Card.Body>
      <Card.Body>
        <ProfilePreInfo
          cardContClass="profilePreInfo"
          iconContClass="preInfoIconCont"
          headerClass="preInfoValue"
          valueClass="preInfoHeader"
          iconSrc="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708593480/cv-mail_dyeafz.svg"
          header="Telefon Numarası"
          value={userDetails.phone}
        />
      </Card.Body>
    </Card>
  );
};

export default ProfilePreInfoBox;
