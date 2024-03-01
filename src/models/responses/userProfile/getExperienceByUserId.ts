export interface GetExperienceByUserId{
    id: number,
    cityName: string,
    organizationName : string,
    position: string,
    sector: string,
    startDate: Date,
    endDate: Date,
    description: string
}

export interface GetExperienceByUserIdList{
    userProfileId: number,
    experiencesDtoItems: GetExperienceByUserId[];
}