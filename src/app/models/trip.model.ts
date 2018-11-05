export class Trip {
    arrival_place : Place;
    price_with_commission : Price;
    departure_date : Date;
    distance : Distance;
    links : Links;
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

export class Distance {
    value : number;
    unity : string;
}

export class Links {
    _self : string;
    _front : string;
}