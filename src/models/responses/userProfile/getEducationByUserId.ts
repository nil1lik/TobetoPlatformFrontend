export interface GetEducationbyUserId{
    id:number
    educationPathId:number
    educationPathName:string
    educationPathImageUrl:string
}

export interface GetEducationByUserIdList{
    userProfileId: number,
    educationDtoItems: GetEducationbyUserId[];
}
