export interface AddUserProfileRequest{
    userId: number,
    phone:string,
    birthDate: Date,
    nationalIdentity : string,
    country:string,
    cityId:number,
    districtId:number,
    addressDetail:string,
    description:string,
}
