export interface GetExperienceItem {
    userProfileId: number,
    cityId: number,
    organizationName: string,
    position: string,
    sector: string,
    startDate: Date,
    endDate: Date,
    description: string
}

export interface GetExperienceInformationsItem {
    organizationName: string,
    position: string,
    sector: string,
    startDate: Date,
    endDate: Date,
    cityName: string
}

export interface GetExperience{
    items: GetExperienceInformationsItem[];
}