
// export interface GetAllDistrictByIdCityDistrictsItem{
//     id:number;
//     name:string;
// }

export interface GetDistrictByIdCityNameItem{
    cityName: {name:any;}
}

export interface GetDistrictByIdCityNameItemList{
    id:number;
    name:string;
}

export interface GetAllDistrictByIdCityItem{
    id:number;
    name:string;
}

export interface GetAllDistrictByIdCity{
    districts: GetAllDistrictByIdCityItem[];
}


