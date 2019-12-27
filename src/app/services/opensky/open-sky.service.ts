import { IAirportArrival } from './../../interfaces/airport-arrival/iairport-arrival';
import { AirportDepartureResponse } from './../../models/airport-departure/airport-departure-response';
import { AirportArrivalResponse } from './../../models/airport-arrival/airport-arrival-response';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { ConstantsService } from './../constants/constants.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAirportDeparture } from '../../interfaces/airport-departure/iairport-departure';

@Injectable({
  providedIn: 'root'
})
export class OpenSkyService {
  private readonly airportK = 'airport';
  constructor(private constants: ConstantsService, private http: HttpClient) { }

  /**
   * Fetches a list of departures from the airport indicated by the icao
   *
   * @param icao - Valid unique airport ICAO code
   * @param time - the number of seconds to go back in time and retrieve results for.
   */
  public fetchAirportDepartures(icao: string, time: number): Observable<AirportDepartureResponse> {
    const qParamsObj = this.getTimeRange(time);
    qParamsObj[this.airportK] = icao;
    const qParams = this.buildQueryParams(qParamsObj);
    return this.http.get<IAirportDeparture[]>(`${ConstantsService.BASE_URL}/flights/departure?${qParams}`)
    .pipe(first(), map((res: IAirportDeparture[]) => new AirportDepartureResponse(res)));
  }

  /**
   * Fetches a list of arrivals from the airport indicated by the icao
   *
   * @param icao - Valid unique airport ICAO code
   * @param time - the number of seconds to go back in time and retrieve results for.
   */
  public fetchAirportArrivals(icao: string, time: number): Observable<AirportArrivalResponse> {
    const qParamsObj = this.getTimeRange(time);
    qParamsObj[this.airportK] = icao;
    const qParams = this.buildQueryParams(qParamsObj);
    return this.http.get<IAirportArrival[]>(`${ConstantsService.BASE_URL}/flights/arrival?${qParams}`)
    .pipe(first(), map((res: IAirportArrival[]) => new AirportArrivalResponse(res)));
  }

  private getTimeRange(duration: number){
    const end = new Date().getTime();
    return {
      begin: Math.floor((end / 1000) - duration),
      end: Math.floor(end / 1000)
    }
  }

  private buildQueryParams(params: object) {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }

}
