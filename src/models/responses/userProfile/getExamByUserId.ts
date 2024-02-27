export interface GetExamByUserId {
  examId: number;
  examName: string;
  examDuration: string;
  examCreatedDate: Date;
  questionCount: number;
  isCompleted: boolean;
}

export interface GetExamByUserIdList {
  userProfileId: number;
  examDtoItems: GetExamByUserId[];
}
