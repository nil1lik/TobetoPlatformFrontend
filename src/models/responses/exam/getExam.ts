export interface GetExamItem {
    id: number,
    name: string,
    description: string,
    title: string,
    duration: string
    isCompleted: boolean
};

export interface GetExam{
    items: GetExamItem[];
}