import React from "react";
import { Tab, Tabs } from "react-bootstrap";

type Props = {};

const TobetoPlatformTab = (props: Props) => {
  return (
    <Tabs
      defaultActiveKey="educations"
      transition={false}
      id="noanim-tab-example"
      className="mb3 tobetoPlatformTab"
    >
      <Tab eventKey="educations" title="Tüm Eğitimlerim"></Tab>
      <Tab eventKey="continue" title="Devam Ettiklerim"></Tab>
      <Tab eventKey="completed" title="Tamamladıklarım"></Tab>
    </Tabs>
  );
};

export default TobetoPlatformTab;

