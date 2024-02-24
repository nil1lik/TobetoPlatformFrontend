export interface GetEducationItem{
    id: number,
    imageUrl : string, 
    name: string,
    startDate: string 
}

export interface GetEducation{
    count: number,
    items : GetEducationItem[];
}  