import React from "react";
import TobetoPlatformItem from "../../utilities/tobetoPlatform/TobetoPlatformItem";
import imageSize from "../../enums/imageSize";
import { Container } from "semantic-ui-react";
import PlatformTab from "../../components/PlatformTab/PlatformTab";
type Props = {};

const Platform = (props: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <TobetoPlatformItem 
          headerText1="TOBETO"
          headerText2="'ya hoş geldin"
          description="Nil"
          subDescription="Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!"
        />
        <Container className="content-cont">
          <TobetoPlatformItem
            imageSrc="istanbulKodluyor.png"
            imageSize={imageSize.medium}
            description="Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al."
            subDescription={["Aradığın ", <span style={{color: "#00d29b"}}>“</span>, "İŞ" ,<span style={{color: "#00d29b"}}>“</span>, " burada!"]}
          />
          <PlatformTab />
        </Container>
        
      </div>
    </>
  );
};

export default Platform;
