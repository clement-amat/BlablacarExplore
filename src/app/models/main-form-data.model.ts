export class MainFormData {
    static readonly MIN_PRICE = 1; 
    static readonly MAX_PRICE = 150; 

    place : string;
    budget : number;

    departureDate : Date;  // optional
    seats : number;        // optional
}