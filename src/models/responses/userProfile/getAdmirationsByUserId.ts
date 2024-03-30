export interface GetAdmirationsByUserId{
    id: number;
    educationPathId: number;
    educationAdmirationId: number;
    isLiked: boolean;
    isFavourited: boolean;
    completionRate: number;
    educationPoint: number;
}

export interface GetAdmirationsByUserIdList{
  userProfileId: number;
  profileAdmirationItems: GetAdmirationsByUserId[];
}
