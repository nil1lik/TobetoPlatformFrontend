import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./educationDetail.css";
import EducationDetailTab from "../../components/Education/EducationDetail/EducationDetailTab";
import EducationDetailHeader from "../../components/Education/EducationDetail/EducationDetailHeader";
import { useParams } from "react-router-dom";
import educationService from "../../services/educationService";
import { GetAllEducationHeaderResponse } from "../../models/responses/education/getAllEducationHeaderResponse";

type Props = {};

const EducationDetail = (props: Props) => {
  const [educationDetail, setEducationDetail] =
    useState<GetAllEducationHeaderResponse>(Object);
  const [aboutId, setAboutId] = useState<number>(0);
  const params = useParams();

  const fetchEducationDetail = async () => {
    try {
      const result = await educationService.getEducationPathDetailByIdDto(
        Number(params.id)
      );
      setEducationDetail(result.data);
      setAboutId(result.data.educationAboutId);
      console.log("educationAboutId " + result.data.educationAboutId);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchEducationDetail();
  }, [params.id]);
  return (
    <div className="page-content activity-detail">
      <Card className="activity-detail-header">
        <Card.Body>
          <EducationDetailHeader
            imageUrl={educationDetail.imageUrl}
            educationName={educationDetail.name}
            likeCount={257}
            educationPoint={educationDetail.educationPoint}
            completionRate={educationDetail.completionRate}
          />
        </Card.Body>
        <Card.Body>
          <EducationDetailTab
            educationAboutId={aboutId}
            educationDetailId={Number(params.id)}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default EducationDetail;
