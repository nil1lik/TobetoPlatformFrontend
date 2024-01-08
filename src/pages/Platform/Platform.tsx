import React from "react";
import TobetoPlatformItem from "../../utilities/tobetoPlatform/TobetoPlatformItem";
import imageSize from "../../enums/imageSize";
type Props = {};

const style = {
  fontSize: "16px",
  fontWeight: 700,
  color: "rgba(40, 40, 40, 0.8)",
  margin: "auto 0",
  border: "none",
};

const Platform = (props: Props) => {
  return (
    <>
    <div style={{display:"flex", flexDirection:"column", gap:"9rem", marginTop:"9rem"}}>
      <TobetoPlatformItem
        headerText1="TOBETO"
        headerText2="'ya hoş geldin"
        description="Nil"
        subDescription="Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!"
      />
      <TobetoPlatformItem
        imageSrc="istanbulKodluyor.png" 
        imageSize={imageSize.medium}
        description="Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al."
        subDescription="Aradığın  “İş”  Burada!"
      />
    </div>
    </>
  );
};

export default Platform;

