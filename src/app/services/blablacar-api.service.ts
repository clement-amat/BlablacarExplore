import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainFormData } from '../models/main-form-data.model';
import { BlablacarRequest } from '../models/blablacar-request.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';
@Injectable({
  providedIn: 'root'
})
export class BlablacarApiService {

  constructor(private httpClient : HttpClient) { }

  get(data : MainFormData) : Observable<any>{
    let parameters : BlablacarRequest = new BlablacarRequest(data);

    let uri = environment.blablacar_api + "?key=" + environment.blablacar_key +"&locale=fr_FR&_format=json&cur=EUR"; // TODO handle w

    for (let key in parameters) {
      if (parameters[key]) {
        uri += "&" + key + "=" + encodeURI(parameters[key]);
      }
    }

    console.log(uri);
    return this.httpClient.get(uri);
  }

  // fix problem with date format
  formatTrips(trips : Trip[]) {
    trips.forEach(t => {
      //console.log(t.departure_date.);
    })

    return null;
  }
}
