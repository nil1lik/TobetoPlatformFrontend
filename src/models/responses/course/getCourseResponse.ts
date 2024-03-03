export interface GetCourseResponseItem{
    id : number;
    educationPathId : number;
    name : string;

}

export interface GetCourseResponse {
    items : GetCourseResponseItem[]
}