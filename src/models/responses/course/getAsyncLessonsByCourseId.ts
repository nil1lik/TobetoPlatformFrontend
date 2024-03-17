export interface GetAsyncLessonsByCourseIdItem {
  id: number;
  name: string;
  lessonType: string;
  time: string;
  isCompleted: boolean;
}

export interface GetAsyncLessonsByCourseIdResponse {
  asyncLessons: GetAsyncLessonsByCourseIdItem[];
}
