export interface GetSocialMediaAccountByUserIdItem {
    id: number,
    socialMediaCategoryId: number,
    socialMediaCategoryName: string,
    mediaUrl: string
}

export interface GetSocialMediaAccountByUserIdList{
    userProfileId:number,
    socialMediaAccountsItems: GetSocialMediaAccountByUserIdItem[];
}