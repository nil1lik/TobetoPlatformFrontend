import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./educationDetail.css";
import EducationDetailTab from "../../components/Education/EducationDetail/EducationDetailTab";
import EducationDetailHeader from "../../components/Education/EducationDetail/EducationDetailHeader";
import { useParams } from "react-router-dom";
import educationService from "../../services/educationService";
import { useLoadingContext } from "../../contexts/LoadingContext";
import { GetAllEducationResponse } from "../../models/responses/education/getAllEducationResponse";
import userProfileService from "../../services/userProfileService";
import { GetAdmirationsByUserId } from "../../models/responses/userProfile/getAdmirationsByUserId";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {};

const EducationDetail = (props: Props) => {
  const [educationDetail, setEducationDetail] =
    useState<GetAllEducationResponse>(Object);
  const [aboutId, setAboutId] = useState<number>(0);
  const { handleSetLoading } = useLoadingContext();
  const [admirations, setAdmirations] = useState<GetAdmirationsByUserId[]>([]);
  const params = useParams();
  const { userId } = useAuthContext();

  //fiter profileAdmirationsByUserIdAndEducationPathId
  const fetchProfileAdmiration = async () => {
    try {
      const response = await userProfileService.getAdmirationsByUserId(
        Number(userId)
      );
      console.log("responsemla", response);
      if (response.data.profileAdmirationItems) {
        response.data.profileAdmirationItems.forEach((admiration) => {
          const filteredAdmirations = response.data.profileAdmirationItems.filter(admiration => admiration.educationPathId == Number(params.id))
          setAdmirations(filteredAdmirations);
            console.log("admirationmsl", response.data.profileAdmirationItems);
            console.log(admiration.educationPathId);
            console.log(params.id);
            console.log("filter", filteredAdmirations);
        });
      }
    } catch (error) {
      console.error("Error fetching user profile admirations:", error);
    }
  };

  // useEffect(() => {
  //   if (admirations.length > 0 && params.id) {
  //     const filtered = admirations.filter(
  //       admiration => admiration.educationPathId === Number(params.id)
  //     );
  //     setFilteredAdmirations(filtered);
  //   }
  // }, [admirations, params.id]);

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
    fetchProfileAdmiration();
  }, [params.id]);

  return (
    <div className="page-content activity-detail">
      <Card className="activity-detail-header">
        <Card.Body>
          {admirations.map((profileAdmirations) => (
            <EducationDetailHeader
              imageUrl={educationDetail.imageUrl}
              educationName={educationDetail.name}
              likeCount={257}
              educationPoint={profileAdmirations.educationPoint}
              completionRate={profileAdmirations.completionRate}
              isLiked={profileAdmirations.isLiked}
              isFavourited={profileAdmirations.isFavourited}
            />
          ))}
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
