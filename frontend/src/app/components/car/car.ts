import {Feature} from "./feature";

export interface Car {
    id: number;
    name: string;
    year: number;
    model: string;
    speed: number;
    car_color: string;
    salon_color: string;
    wheels_color: string;
    features: Feature[];
}
