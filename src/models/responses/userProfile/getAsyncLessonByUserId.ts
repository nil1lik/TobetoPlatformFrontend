export interface GetAsyncLessonByUserId{
    id : number;
    asyncLessonId: number;
    isWatched: boolean;
}

export interface GetAsyncLessonByUserIdList{
  userProfileId: number;
  asyncLessonItem: GetAsyncLessonByUserId[];
}
