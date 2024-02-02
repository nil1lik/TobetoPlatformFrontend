export interface GetEducationItem{
    id: number,
    imageUrl : string, 
    name: string,
    createdDate: Date
}

export interface GetEducation{
    items : GetEducationItem[];
}  