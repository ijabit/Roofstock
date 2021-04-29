import { Country } from "./enums/Country";
import { State } from "./enums/State";

export interface Address {
    address1: string;
    address2: null | string;
    city: string;
    country: Country;
    county: null | string;
    district: null;
    state: State;
    zip: string;
    zipPlus4: null | string;
}