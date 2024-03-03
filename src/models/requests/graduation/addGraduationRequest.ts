export interface AddGraduationRequest{
    userProfileId: number,
    degree: string,
    universityName: string,
    department: string,
    startDate: Date | null,
    endDate: Date | null
}