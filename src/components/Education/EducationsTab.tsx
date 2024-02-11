import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { EducationCompletionStatusHeaders } from "../../utilities/Constants/constantValues";

type Props = {};

const TobetoPlatformTab = (props: Props) => {
  return (
    <Tabs
      defaultActiveKey="educations"
      transition={false}
      id="noanim-tab-example"
      className="mb3 tobetoPlatformTab"
    >
      <Tab eventKey="educations" title={EducationCompletionStatusHeaders.allEducations}></Tab>
      <Tab eventKey="continue" title={EducationCompletionStatusHeaders.progressingEducations}></Tab>
      <Tab eventKey="completed" title={EducationCompletionStatusHeaders.completedEducations}></Tab>
    </Tabs>
  );
};

export default TobetoPlatformTab;