import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  text: string;
  description?: string;
  buttonText: string;
  date?: string; 
}; 

const TobetoPlatformVerticalCard = (props: Props) => {
  return (
    <div className="col-md-3 col-12 mb-4">
      <Card className="education-card">
        <Card.Img className="card-img-edu" src={props.image} />
        <Card.Body>
          <Card.Title className="card-title-edu">{props.text} </Card.Title>
          <Card.Text className="platform-course-description">
            {props.description}
          </Card.Text>
          <Card.Text className="platform-course-date">
            {props.date}
          </Card.Text>
          <Link to={"/education-detail"}>
          <Button className="educationButton apply-button w-100">{props.buttonText} </Button>
          </Link> 
        </Card.Body>
      </Card>
    </div> 
  );
};

export default TobetoPlatformVerticalCard;



