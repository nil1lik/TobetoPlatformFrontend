import React from "react";

type Props = { liked: boolean; toggleLike: () => void };

const HeartIcon = (props: Props) => {
    const handleClick = () => {
        props.toggleLike(); 
      };

  return (
    <svg
      id="heart-icon"
      className="education like-img"
      viewBox="0 0 20 20" 
      onClick={handleClick}
    >
      {/* inside the heart */}
      <path
        fill={props.liked ? "#FF0000" : "#FFFFFF"}
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
      {/* outside the heart */}
      <path
        fill="none"
        stroke={props.liked ? "#FF0000" : "#808080"}
        strokeWidth="1"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  );
};

export default HeartIcon;
