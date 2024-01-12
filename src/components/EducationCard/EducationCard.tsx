import TobetoPlatformVerticalCard from "../../utilities/tobetoPlatform/TobetoPlatformVerticalCard";
import { url } from "inspector";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";


type Props = {};

const EducationCard = (props: Props) => {
  return (
    <>
      <div className="card-container">
        <TobetoPlatformVerticalCard
          image="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg"
          text="Dr. Ecmel Ayral'dan Hoşgeldin Mesajı"
          description="21 Eylül 2023 15:20"
          buttonText="Eğitime Git"
        />
        <TobetoPlatformVerticalCard
          image="https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg"
          text="Eğitimlere Nasıl Katılırım?"
          description="8 Eylül 2023 17:06"
          buttonText="Eğitime Git"
        />
        <TobetoPlatformVerticalCard
          image="https://tobeto.s3.cloud.ngn.com.tr/CFE_20237_1835cfa6e1.jpg"
          text="Herkes İçin Kodlama - 2C"
          description="2 Ekim 2023 03:00"
          buttonText="Eğitime Git"
        />
        <TobetoPlatformVerticalCard
          image="https://tobeto.s3.cloud.ngn.com.tr/CFE_232_7a27b4deb3.jpg"
          text="Hoşgeldin Buluşması - 2"
          description="2 Ekim 2023 03:00"
          buttonText="Eğitime Git"
        />
      </div>
      <Link to={"/egitimlerim"}>
      <div style={{ width: "fit-content", margin: "0 auto" , textAlign:"center", fontSize: "12px", fontWeight: "600", color:"#828282", cursor: "pointer"}}>
        <Button style={{backgroundImage:'url("https://tobeto.com/_next/static/media/showMore.f5ba3f81.svg")', width:"48px", height:"48px", borderRadius:"50%", backgroundSize:"cover"}} variant="light">  </Button>
        <p>Daha Fazla Göster</p>
      </div>
      </Link>
    </>
  );
};
export default EducationCard;
