import { IAirportDeparture } from './../../interfaces/airport-departure/iairport-departure';

export class AirportDepartureResponse {

    // tslint:disable-next-line: variable-name
    private _departures: IAirportDeparture[];

    constructor(data: IAirportDeparture[]) {
      this._departures = data;
    }

    get departures(): IAirportDeparture[] {
      return this._departures;
    }
}
