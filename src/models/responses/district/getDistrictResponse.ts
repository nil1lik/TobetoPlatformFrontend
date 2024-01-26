export interface GetDistrictItem{
    id:number;
    name:string;
    cityId: number;
}

export interface GetDistrict{
    items: GetDistrictItem[];
}