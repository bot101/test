import { AirportArrivalResponse } from './../../models/airport-arrival/airport-arrival-response';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { OpenSkyService } from '../../services/opensky/open-sky.service';
import { ResizerService } from '../../services/resizer/resizer.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAirport } from '../../interfaces/airport/airport';
import { MatSelect } from '@angular/material/select';
import { switchMap } from 'rxjs/operators';
import { AirportDepartureResponse } from '../../models/airport-departure/airport-departure-response';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  selected;
  isMobile$: Observable<boolean>;
  departureResult = new AirportDepartureResponse([]);
  departureSelector: FormControl;
  departureForm: FormGroup;
  arrivalResult = new AirportArrivalResponse([]);
  arrivalSelector: FormControl;
  arrivalForm: FormGroup;

  constructor(
    private openSky: OpenSkyService,
    private resizer: ResizerService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {airport: IAirport}
  ) {
    this.departureForm = this.formBuilder.group({
      departureSelector: new FormControl([null, Validators.required])
    });
    this.arrivalForm = this.formBuilder.group({
      arrivalSelector: new FormControl([null, Validators.required])
    });
   }

  ngOnInit() {
    console.log(this.data);
    this.isMobile$ = this.resizer.observeMobile();
    this.getAirportDepartureData();
    this.getAirportArrivalData();
  }

  getAirportDepartureData() {
    this.departureForm.get('departureSelector').valueChanges.pipe(switchMap((newValue: number) => {
      return this.openSky.fetchAirportDepartures(this.data.airport.icao, newValue);
    })).subscribe(result => {
      this.departureResult = result;
    });
  }

  getAirportArrivalData() {
    this.arrivalForm.get('arrivalSelector').valueChanges.pipe(switchMap((newValue: number) => {
      return this.openSky.fetchAirportArrivals(this.data.airport.icao, newValue);
    })).subscribe(result => {
      this.arrivalResult = result;
    });
  }

}
