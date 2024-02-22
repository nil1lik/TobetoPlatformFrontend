export interface AddExperienceRequest{
  userProfileId: number,
  cityId: number,
  organizationName: string,
  position: string,
  sector: string,
  startDate: Date,
  endDate: Date,
  description: string
}