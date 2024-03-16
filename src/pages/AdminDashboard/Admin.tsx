import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "../../layouts/ProfileEditSidebar/profileEditSidebar.css";
import SidebarButton from "../../components/Profile/ProfileEdit/SidebarButton";
import "./admin.css";
import {
  adminElements,
  adminIconClassList,
  componentMap,
} from "../../utilities/Constants/adminElements";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";

type Props = {};

const Admin = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("kisiselbilgilerim");

  const handleActiveTab = (text: string) => {
    setActiveTab(text);
  };

  const renderContent = () => {
    const SelectedComponent = componentMap[activeTab] || AdminDashboard;
    return <SelectedComponent />;
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={3} className="col-control">
            <Navbar className="flex-column profile-edit-nav">
              {adminElements.map((element, index) => (
                <SidebarButton
                  key={index}
                  name={element.name}
                  setActiveTab={() => handleActiveTab(element.value)}
                  iconClass={adminIconClassList[index]}
                />
              ))}
            </Navbar>
          </Col>
          <Col xs={9}>
            <Card className="card-b">
              <Card.Body>{renderContent()}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
