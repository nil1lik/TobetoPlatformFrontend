import React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemHeader,
} from "semantic-ui-react";

type Props = {};

const Platform = (props: Props) => {
  return (
    <div>
      <Item style={{ textAlign: "center"}}>
        <ItemContent>
          <ItemHeader style={{marginBottom: "0.5rem"}}>
            <span
              style={{ fontSize: "36px", fontWeight: 700, color: "#9b33ff" }}
            >
              TOBETO
            </span>
            <span style={{ fontSize: "36px", fontWeight: 400,color: "#505050" }}>
              'ya hoş geldin
            </span>
          </ItemHeader>
          <ItemDescription style={{ fontSize: "30px", fontWeight: 400, color: "#505050",marginBottom: "1.25rem" }}>Nil</ItemDescription>
          <ItemExtra style={{ fontSize: "24px", fontWeight: 500, color: "#505050" }}>
            Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
            yanında!
          </ItemExtra>
        </ItemContent>
      </Item>
    </div>
  );
};

export default Platform;
