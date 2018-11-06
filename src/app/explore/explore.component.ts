import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { MainFormData } from '../models/main-form-data.model';
import { BlablacarApiService } from '../services/blablacar-api.service';
import { Trip } from '../models/trip.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query (':leave', [
          stagger(100, [
            animate('0.3s', style({ opacity: 0 }))
          ]), 
        ], {optional: true},),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.3s', style({ opacity: 1 }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class ExploreComponent implements OnInit {
  trips : Trip[] = [];

  /** Form data */
  data : MainFormData;
  readonly MAX_PRICE = MainFormData.MAX_PRICE;
  readonly MIN_PRICE = MainFormData.MIN_PRICE;

  constructor(
    private formDataService : FormDataService,
    private blablacarService : BlablacarApiService,
    private router : ActivatedRoute
  ) { }

  ngOnInit() {
    this.trips = [];
    this.data = {} as MainFormData;
    this.data.budget = 30;

    
    if (this.formDataService.data) {
      this.data = this.formDataService.data;
    } else {
      this.data.place = this.router.snapshot.params['place'];
    }
    this.loadTrips();
  }

  onExploreButtonClick() {
    this.trips = [];
    this.loadTrips();
  }

  loadTrips() : void {
    this.blablacarService.get(this.data).subscribe(response =>  {
      this.trips = response.trips;
      this.trips = this.blablacarService.formatTrips(this.trips);
    });
  }

}
