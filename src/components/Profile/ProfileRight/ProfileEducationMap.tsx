import React, { useEffect } from "react";
import { useProfileContext } from "../../../contexts/ProfileContext";
import userProfileService from "../../../services/userProfileService";
import { useAuthContext } from "../../../contexts/AuthContext";
import FormattedDate from "../../../utilities/Helpers/FormattedDate";
import { GetGraduationByUserId } from "../../../models/responses/userProfile/getGraduationByUserId";
import { GetExperienceByUserId } from "../../../models/responses/userProfile/getExperienceByUserId";

type Props = {
  graduationsDtoItems?: GetGraduationByUserId[]
  experiencesDtoItems?: GetExperienceByUserId[]
};

const ProfileEducationMap = (props: Props) => {
  const {
    userDetails,

  } = useProfileContext();
  const { userId } = useAuthContext();

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
                        {graduations.univercityName}
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
