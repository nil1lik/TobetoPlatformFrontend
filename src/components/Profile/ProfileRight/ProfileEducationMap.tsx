import React, { useEffect } from "react";
import { useProfileContext } from "../../../contexts/ProfileContext";
import userProfileService from "../../../services/userProfileService";
import { useAuthContext } from "../../../contexts/AuthContext";
import FormattedDate from "../../../utilities/Helpers/FormattedDate";

type Props = {};

const ProfileEducationMap = (props: Props) => {
  const {
    userDetails,
    addGraduationsToUserDetails,
    addExperiencesToUserDetails,
  } = useProfileContext();
  const { userId } = useAuthContext();

  const fetchGraduationsByUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getGraduationsByUserId(userId);
      addGraduationsToUserDetails(result.data.graduationsDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const fetchExperiencesByUserId = async (userId: number) => {
    try {
      const result = await userProfileService.getExperiencesByUserId(userId);
      addExperiencesToUserDetails(result.data.experiencesDtoItems);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchExperiencesByUserId(Number(userId));
    fetchGraduationsByUserId(Number(userId));
  }, []);

  return (
    <>
      <div className="timeline">
        <div className="line">
          <div className="circle">
            <div className="before">
              <div className="content">
                {userDetails.graduationsDtoItems &&
                  userDetails.graduationsDtoItems.map((graduations: any) => (
                    <ul>
                      <li>
                        <FormattedDate
                          format="year"
                          date={graduations.startDate}
                        /> - 
                         <FormattedDate
                          format="year"
                          date={graduations.endDate}
                        />
                      </li>
                      <li
                        className="text-truncate"
                        style={{ maxWidth: "125px" }}
                      >
                        {graduations.universityName}
                      </li>
                      <li
                        className="text-truncate"
                        style={{ maxWidth: "125px" }}
                      >
                        {graduations.department}
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
          <div className="circle2">
            <div className="after">
              <div className="content">
                {userDetails.experiencesDtoItems &&
                  userDetails.experiencesDtoItems.map((experiences: any) => (
                    <ul>
                      <li>
                        <FormattedDate
                          format="year"
                          date={experiences.startDate}
                        /> - 
                        <FormattedDate
                          format="year"
                          date={experiences.endDate}
                        />
                      </li>
                      <li
                        className="text-truncate"
                        style={{ maxWidth: "125px" }}
                      >
                        {experiences.organizationName}
                      </li>
                      <li
                        className="text-truncate"
                        style={{ maxWidth: "125px" }}
                      >
                        {experiences.position}
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEducationMap;
