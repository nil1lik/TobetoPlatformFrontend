export interface GetDistrictByIdCityItem{
    id:number;
    name:string;
}


export interface GetAllDistrictByIdCity{
    districts: GetDistrictByIdCityItem[];
}