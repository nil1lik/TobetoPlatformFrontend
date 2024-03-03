import React from "react";
import "./catalog.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  imageUrl : string
  instructorName: string;
  instructorSurname: string;
  time : number
};

const CatalogCard = (props: Props) => {
  return (
    
    <div className="col-12 col-lg-4 col-md-5 mb-3">
      <div className="education-box-new fade-in ">
      <Link to={"/catalog-detail"} >
        <Image
          className="edubox-img"
          src={props.imageUrl}
        />
        <div className="content">
          <div>
            <div className="property">
              <div>
                <i className="bi bi-person text-white" />
                <label className="pro">{props.instructorName} {props.instructorSurname}</label>
              </div>
              <div className="ml-auto">
                <i className="bi bi-alarm text-white" />
                <label className="pro">{props.time}</label>
              </div>
            </div>
            <div className="name">{props.name}</div>
          </div>
        </div>
        <div className="prog-cont">
          <div className="entry-btn">
          <i className="bi bi-play-circle"></i>
          </div>
        </div>
        </Link>
      </div>
    </div>
    
  );
};

export default CatalogCard;
