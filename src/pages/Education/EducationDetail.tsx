import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./educationDetail.css";
import EducationDetailTab from "../../components/Education/EducationDetail/EducationDetailTab";
import EducationDetailHeader from "../../components/Education/EducationDetail/EducationDetailHeader";
import educationService from "../../services/educationService";
import { GetByIdEducation } from "../../models/responses/education/getByIdEducation";

type Props = {};

const EducationDetail = (props: Props) => {
  const [educationPath, setEducationPath] = useState<GetByIdEducation>(Object);
  const [id, setId] = useState<number>(0);

  const fetchEducation = async (id: number) => {
    const result = await educationService.getById(id);
    setEducationPath(result.data);
  };

  useEffect(() => {
    fetchEducation(id);
  }, [id]);

  return (
    <div className="page-content activity-detail">
      <Card className="activity-detail-header">
        <Card.Body>
          <EducationDetailHeader
            imageUrl={educationPath.imageUrl}
            educationName={educationPath.name}
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
