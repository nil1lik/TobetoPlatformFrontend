export interface GetInstructorItem{
    id:number;
    firstName: string;
    lastName: string;
    imgUrl: string;
}

export interface GetInstructor{
    items: GetInstructorItem[];
}