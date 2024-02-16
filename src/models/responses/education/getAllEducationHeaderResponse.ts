export interface GetAllEducationResponse{
    id: number;
    educationAboutId: number;
    name:string;
    imageUrl:string;
    isLiked:boolean;
    isFavourited:boolean;
    completionRate: number;
    educationPoint: number;
}