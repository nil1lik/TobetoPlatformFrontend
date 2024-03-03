export interface GetCatalogResponseItem{
    id:number,
    name:string,
    imageUrl:string,
    instructorName:string,
    instructorSurname:string,
    time:number
}

export interface GetCatalogList{
    items : GetCatalogResponseItem[]
}