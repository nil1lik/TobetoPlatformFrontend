import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";
import { pageIsNotFound, returnToHomepage } from "../../utilities/Constants/constantValues";

const NotFoundPage = () => {
  return (
    <div className="notfound-bg">
      <div className="notfound-cont">
        <div className="notfound-img"></div>
        <div className="notfound-nav">
          <p className="notfound-text">{pageIsNotFound}</p>
          <Link to={"/giris"} className="notfound-btn">
          {returnToHomepage}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;