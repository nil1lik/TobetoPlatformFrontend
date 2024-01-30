export interface ProfileDto extends GetCityItem{
    // items: GetCityItem[];
    firstname: "",
    lastname: "",
    status: false,
}

export interface GetCityItem{
    id: number;
    name: string;
}

