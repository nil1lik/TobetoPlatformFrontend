import React from "react";
import { Card } from "react-bootstrap";
import ApplicationIcon from "./ApplicationIcon";
import { applicationApproved } from "../../utilities/Constants/ApplicationCardIconClasses";

type Props = {
  cardHeader: string;
  cardMeta?: string;
  cardText1: string;
  cardText2: string;
  cardLink1?: string;
  cardLink2?: string;
  iconClass1: string;
  iconClass2: string;
};

const ApplicationCard = (props: Props) => {
  return (
    <div>
      <Card className="app-card-notify">
        <Card.Body>
          <Card.Title className="mb-3 app-title">{props.cardHeader}</Card.Title>
          <Card.Text className="app-name">
            <ApplicationIcon iconClass={props.iconClass1} />
            {props.cardText1}
          </Card.Text>
          <Card.Text className="app-name">
          <ApplicationIcon iconClass={props.iconClass2} />
            {props.cardText2}
          </Card.Text>
          <Card.Link href="#" style={{ display: "none" }}>
            {props.cardLink1}
          </Card.Link>
          <Card.Link href="#" style={{ display: "none" }}>
            {props.cardLink2}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ApplicationCard;
