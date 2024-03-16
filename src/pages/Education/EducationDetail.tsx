import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./educationDetail.css";
import EducationDetailTab from "../../components/Education/EducationDetail/EducationDetailTab";
import EducationDetailHeader from "../../components/Education/EducationDetail/EducationDetailHeader";
import { useParams } from "react-router-dom";
import educationService from "../../services/educationService";
import { useLoadingContext } from "../../contexts/LoadingContext";
import { GetAllEducationResponse } from "../../models/responses/education/getAllEducationResponse";

type Props = {};

const EducationDetail = (props: Props) => {
  const [educationDetail, setEducationDetail] =
    useState<GetAllEducationResponse>(Object);
  const [aboutId, setAboutId] = useState<number>(0);
  const { handleSetLoading } = useLoadingContext();
  const params = useParams();

  const fetchEducationDetail = async () => {
    try {
      handleSetLoading((prev: any) => prev + 1);
      const result = await educationService.getEducationPathDetailByIdDto(
        Number(params.id)
      );
      setEducationDetail(result.data);
      setAboutId(result.data.educationAboutId);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
    handleSetLoading((prev: any) => prev - 1);
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
            isLiked = {educationDetail.isLiked}
            isFavourited = {educationDetail.isFavourited}
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
