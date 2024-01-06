import React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  Image,
} from "semantic-ui-react";
import imageSize from "../../enums/imageSize";


type Props = {
  imageSrc?: string;
  headerText1?: string;
  headerText2?: string;
  description: string;
  subDescription: string;
  imageSize?: imageSize;
};

  const TobetoPlatformItem = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;

  return (
    <div>
      <Item style={{ textAlign: "center" }}>
        <ItemContent>
          {props.imageSrc ? (
            <Image src={logoSrc} size={props.imageSize} centered />
          ) : (
            <ItemHeader style={{ marginBottom: "0.5rem" }}>
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: "#9b33ff" }}
              >
                {props.headerText1}
              </span>
              <span
                style={{ fontSize: "36px", fontWeight: 400, color: "#4D4D4D" }}
              >
                {props.headerText2}
              </span>
            </ItemHeader>
          )}

          <ItemDescription
            style={{
              fontSize: "30px",
              fontWeight: 400,
              color: "#4D4D4D",
              marginBottom: "1.25rem",
              contrast: "8.45",
            }}
          >
            {props.description}
          </ItemDescription>
          <ItemExtra
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#1C1917",
              contrast: "17.48",
            }}
          >
            {props.subDescription}
          </ItemExtra>
        </ItemContent>
      </Item>
    </div>
  );
};

export default TobetoPlatformItem;
