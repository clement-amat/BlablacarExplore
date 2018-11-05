import { Injectable } from '@angular/core';
import { MainFormData } from '../models/main-form-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  data : MainFormData;

  constructor() { }
}
