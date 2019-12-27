import { IAirport } from '../../interfaces/airport/airport';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-airport-card',
  templateUrl: './airport-card.component.html',
  styleUrls: ['./airport-card.component.scss']
})
export class AirportCardComponent implements OnInit {

  @Input() airportInfo: IAirport;
  constructor() { }

  ngOnInit() {
  }

}
