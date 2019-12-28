import { IAirportArrival } from './../../interfaces/airport-arrival/iairport-arrival';

export class AirportArrivalResponse {

  // tslint:disable-next-line: variable-name
  private _arrivals: IAirportArrival[];

  constructor(data: IAirportArrival[]) {
    this._arrivals = data;
  }

  get arrivals(): IAirportArrival[] {
    return this._arrivals;
  }
}

