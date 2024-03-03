export interface GetGraduationByUserId{
    id: number ,
    degree: string,
    universityName: string,
    department: string,
    startDate : Date,
    endDate: Date,
}

export interface GetGraduationByUserIdList{
    userProfilId:number,
    graduationsDtoItems: GetGraduationByUserId[];
}