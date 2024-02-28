export interface GetSyncLessonsByCourseIdItem {
    id: number;
    name: string;
    sessionName: string;
    syncVideoUrl: string;
    isJoin: boolean;
    startDate: string;
    endDate: string;
}

export interface GetSyncLessonsByCourseIdResponse {
    items: GetSyncLessonsByCourseIdItem[];
  }