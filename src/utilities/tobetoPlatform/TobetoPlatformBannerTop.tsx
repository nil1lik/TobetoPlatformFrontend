import React from "react";
import { URL } from "url";

type Props = { url: string; spanText: string };

const TobetoPlatformBannerTop = (props: Props) => {
  return (
    <div
      className="edu-banner-cont"
      style={{ backgroundImage: `url(${props.url})` }}
    >
        <div className="row">
      <span className="banner-text">{props.spanText}</span></div>
    </div>
  );
};

export default TobetoPlatformBannerTop;
