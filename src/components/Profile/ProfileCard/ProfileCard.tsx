import React from "react";
import "./platformCard.css"
import { Link } from "react-router-dom";
import { platformPageBottomCards, startButtonText } from "../../../utilities/Constants/constantValues";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="new-packs">
      <div className="package-card">
        <div className="details pack-bg-2">
          <h1 className="h1">
            <br />
            {platformPageBottomCards.card1Text}
          </h1>
          <Link to="/profilim/profilimi-duzenle">
          <button className="btnCard w-100 ">{startButtonText}</button>
          </Link>
        </div>
      </div>
      <div className="package-card">
        <div className="details pack-bg-3">
          <h1 className="h1">
            <br />
            {platformPageBottomCards.card2Text}
          </h1>
          <Link to="/degerlendirmeler">
          <button className="btnCard  w-100 ">{startButtonText}</button>
          </Link>
        </div>
      </div>
      <div className="package-card">
        <div className="details pack-bg-1">
          <h1 className="h1">
            <br />
            {platformPageBottomCards.card3Text}
          </h1>
          <Link to="/">
          <button className="btnCard  w-100 ">{startButtonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
