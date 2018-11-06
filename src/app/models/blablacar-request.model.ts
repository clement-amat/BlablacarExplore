import { environment } from "src/environments/environment";
import { MainFormData } from "./main-form-data.model";

export class BlablacarRequest {
    fn : string;            // departure place NAME (not coordinates)
    locale : string;
    db : Date;
    seats : number;
    pmin : number;
    pmax : number;

    constructor(data : MainFormData) {
        this.pmin = data.budget * 0.8;
        this.pmax = data.budget * 1.2;

        this.fn = data.place;
        this.seats = data.seats;
        this.db = data.departureDate;
    }
}