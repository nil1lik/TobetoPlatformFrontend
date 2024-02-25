export interface GetLanguageByUserId{
    id:number,
    languageId: number,
    languageLevelId: number,
    languageName:string,
    languageLevelName:string
}

export interface GetLanguageByUserIdList{
    userProfileId: number,
    languageDtoItems: GetLanguageByUserId[];
}