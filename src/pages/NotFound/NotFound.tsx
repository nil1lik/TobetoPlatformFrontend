import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notfound-bg">
      <div className="notfound-cont">
        <div className="notfound-img"></div>
        <div className="notfound-nav">
          <p className="notfound-text">Aradığınız sayfaya ulaşılamadı</p>
          <Link to={"/giris"} className="notfound-btn">
            Anasayfa'ya dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
