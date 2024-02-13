export interface GetAsyncLessonsByCourseIdItem {
  id: number;
  name: string;
}

export interface GetAsyncLessonsByCourseIdResponse {
    asyncLessons: GetAsyncLessonsByCourseIdItem[];
}
