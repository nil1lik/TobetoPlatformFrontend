export interface UpdateUserProfileResponse{
    id:number,
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