import React from "react";
import { Card } from "react-bootstrap";
import "./educationDetail.css";
import EducationDetailTab from "../../components/Education/EducationDetail/EducationDetailTab";
import EducationDetailHeader from "../../components/Education/EducationDetail/EducationDetailHeader";

type Props = {};

const EducationDetail = (props: Props) => {
  return (
    <div className="page-content activity-detail">
      <Card className="activity-detail-header">
        <Card.Body>
          <EducationDetailHeader
            imageUrl="tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg"
            educationName="Dr. Ecmel Ayral'dan Hoşgeldin Mesajı"
            likeCount={257}
            educationPoint={100}
            completionRate={100} 
          />
        </Card.Body>
        <Card.Body>
          <EducationDetailTab />
        </Card.Body> 
      </Card>
    </div>
  );
};

export default EducationDetail;
