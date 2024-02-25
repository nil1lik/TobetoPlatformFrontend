export interface GetSkillByUserId{
    skillId: number,
    skillName:string
}

export interface GetSkillByUserIdList{
    userProfileId: number,
    skillDtoItems: GetSkillByUserId[];
}