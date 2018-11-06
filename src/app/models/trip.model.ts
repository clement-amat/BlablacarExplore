export class Trip {
    arrival_place : Place;
    price_with_commission : Price;
    distance : Measure;
    duration : Measure;
    links : Links;
    departure_date : any;
    arrival_date : Date;

}

export class Place {
    city_name : string;
    address : string;
    country_code : string;
    latitude : number;
    longitude : number;
}

export class Price {
    value : number;
    symbol : string;
}

export class Measure {
    value : number;
    unity : string;
}

export class Links {
    _self : string;
    _front : string;
}