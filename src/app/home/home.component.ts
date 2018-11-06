import { Component, OnInit } from '@angular/core';
import { MainFormData } from '../models/main-form-data.model';
import { FormDataService } from '../services/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : MainFormData;
  readonly MAX_PRICE = MainFormData.MAX_PRICE;
  readonly MIN_PRICE = MainFormData.MIN_PRICE;

  constructor(private formDataService : FormDataService,
              private router : Router) { }

  ngOnInit() {
    this.data = {} as MainFormData;
    this.data.budget = 30;
  }

  onExploreButtonClick() {
    this.formDataService.data = this.data;
    this.router.navigate(['explore', this.data.place]);
  }

}
