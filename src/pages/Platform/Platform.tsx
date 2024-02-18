import React, { useEffect, useState } from "react";
import TobetoPlatformItem from "../../components/Platform/TobetoPlatformItem";
import PlatformTab from "../../components/Platform/PlatformTab/PlatformTab";
import { Col, Container, Row } from "react-bootstrap";
import "./platform.css";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import Exams from "../../components/Exam/Exams";
import {
  platformHeader,
  platformTabTexts,
} from "../../utilities/Constants/constantValues";
import { GetByIdUser } from "../../models/responses/user/getByIdUser";
import UserService from "../../services/userService";
import userProfileService from "../../services/userProfileService";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {
};

const Platform = (props: Props) => {
  const [user, setUser] = useState<GetByIdUser>();
  const {userId} = useAuthContext();
  const fecthUserData = async (userId: number) => {
    const result = await userProfileService.getByUserId(userId);
    setUser(result.data);
  };

 
  useEffect(() => {
    fecthUserData(Number(userId));
  }, [userId]);


  return (
    <>
      <Container className="main-cont">
        <Row className="justify-content-center align-items-center">
          <Col className="col-12 col-md-12">
            <Container>
              <Row>
                <Col className="col-12 text-center mt-5">
                  <div className="mw-5xl mx-auto">
                    <h3>
                      <label className="text-secondary-platform">
                        {platformHeader.fragment1}
                      </label>
                      <label className="fw-normal text-info1">
                        {platformHeader.fragment2}
                      </label>
                      <label className="fw-normal text-info1">
                        {platformHeader.fragment3}
                      </label>
                    </h3>
                    <h4 className="fw-normal text-info1 text-info2">{user?.firstName}</h4>{" "}
                  </div>
                  <TobetoPlatformItem text={platformHeader.subtitle} />
                </Col>
              </Row>
              <Row className="content-cont">
                <TobetoPlatformItem
                  imageClass="ist-kod-png"
                  imageSrc="istanbulKodluyor.png"
                  text={platformTabTexts.imgSubtitle}
                />
                <label className="header-text-quot mb-4">
                  {platformTabTexts.fragment1} <span className="quot">"</span>
                  {platformTabTexts.fragment2}
                  <span className="quot">"</span> {platformTabTexts.fragment3}
                </label>
                <PlatformTab />
              </Row>
            </Container>
            <Container className="content-cont">
              <Exams />
            </Container>
            <br></br>
            <Container>
              <ProfileCard />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Platform;
