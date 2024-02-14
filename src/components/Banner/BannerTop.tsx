import React, { useContext, useEffect } from "react";
import { URL } from "url";
import { SearchbarContext } from "../../contexts/SearchBarContext";

type Props = { bannerUrl: string; bannerText: string };

const BannerTop = (props: Props) => {

  return (
    <div
      className="edu-banner-cont"
      style={{ backgroundImage: `url(${props.bannerUrl})` }}
    >
        <div className="row">
      <span className="banner-text">{props.bannerText}</span></div>
    </div>
  );
};

export default BannerTop;
