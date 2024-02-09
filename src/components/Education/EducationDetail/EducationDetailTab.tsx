import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import EducationDetailContent from "./EducationDetailContent";
import EducationDetailAbout from "./EducationDetailAbout";
import "./educationDetailTab.css" 
import educationService from "../../../services/educationService";
import { GetAllEducationAboutResponse} from "../../../models/responses/education/getAllEducationAboutResponse";
import { object } from "yup";
type Props = {};

const EducationDetailTab = (props: Props) => {
  const [education, setEducation] = useState<GetAllEducationAboutResponse>(Object);


    const fetchEducationAbout = async () => {
      try {
        const result = await educationService.getByIdEducationAboutDetailDto(1);        // ID ÇEKCEZ
      console.log(result.data)
      setEducation(result.data);
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

    useEffect(() => {
      fetchEducationAbout();
    },[])

  return (
    <Tabs
      defaultActiveKey="content"
      transition={false}
      id="noanim-tab-example"
      className="mb3 educationDetailTab"
    >
      <Tab eventKey="content" title="İçerik">
        <Container>
          <Row>
            <Col>
              <EducationDetailContent 
                educationTitle="Dr. Ecmel Ayral'dan Hoşgeldin Mesajı"
                educationSubTitle="Hoşgeldin Mesajı"
                educationType="Video"
                educationTime="3 dk"
                educationCategory="Genel"
                educationLanguage="Türkçe"
                educationSubcategory="Video"
                educationCompany="Kurum içi üretim"
                likeCount={65}
              /> 
            </Col> 
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="about" title="Hakkında">
        <Container>
          <Row>
            <Col>
            {/* {education.map((education: any) => (
              <EducationDetailAbout
                startDate={education.startDate}
                endDate={education.endDate}
                timeSpent="2 dk"
                estimatedDuration="3 dk"
                category={education.categoryName}
                company={education.companyName}
              />
            ))} */}
            <EducationDetailAbout
                startDate={education.startDate}
                endDate={education.endDate}
                timeSpent="2 dk"
                estimatedDuration="3 dk"
                category={education.categoryName}
                company={education.companyName}
              />
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
};

export default EducationDetailTab;
