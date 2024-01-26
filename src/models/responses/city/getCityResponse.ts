import { ReactNode } from "react";

export interface GetCityItem{
    id: number;
    name: string;
}

export interface GetCity{
    items: GetCityItem[];
}

