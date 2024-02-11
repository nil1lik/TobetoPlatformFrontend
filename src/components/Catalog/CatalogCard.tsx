import React from "react";
import "./catalog.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  name?: string;
  instructor?: string;
  time? : string
};

const CatalogCard = (props: Props) => {
  return (
    
    <div className="col-12 col-lg-4 col-md-5 mb-3">
      <div className="education-box-new fade-in ">
      <Link to={"/education-detail"}>
        <Image
          className="edubox-img"
          src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
        />
        <div className="content">
          <div>
            <div className="property">
              <div>
                <i className="bi bi-person text-white" />
                <label className="pro">{props.instructor}Gürkan İlişen</label>
              </div>
              <div className="ml-auto">
                <i className="bi bi-alarm text-white" />
                <label className="pro">{props.time}36</label>
              </div>
            </div>
            <div className="name">{props.name}Programlamanın Tarihçesi ve Gelişimi</div>
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
