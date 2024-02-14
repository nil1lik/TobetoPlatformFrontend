export interface GetAsyncLessonsByCourseIdItem {
  id: number;
  name: string;
  lessonType: string;
  time: string;
}

export interface GetAsyncLessonsByCourseIdResponse {
  asyncLessons: GetAsyncLessonsByCourseIdItem[];
}
