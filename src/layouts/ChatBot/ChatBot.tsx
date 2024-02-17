import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

const ChatBot = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const messageIcon = process.env.PUBLIC_URL + "/images/message-icon.svg";
  const chat = process.env.PUBLIC_URL + "/images/chatExample.png";
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-cont">
      {isOpen ? (
        <div onClick={handleToggle}>
          <img src={chat} className="chatExample" />
        </div>
      ) : (
        <div onClick={handleToggle} className="chatOpen">
          <img src={messageIcon} className="chatOpenIcon" />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
