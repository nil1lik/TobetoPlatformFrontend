export interface GetEducationbyUserId{
    id:number
    educationPathId:number
    educationPathName:string
    educationPathImageUrl:string
    startDate:string
}

export interface GetEducationByUserIdList{
    userProfileId: number,
    educationDtoItems: GetEducationbyUserId[];
}
