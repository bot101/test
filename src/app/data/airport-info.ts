import { IAirport } from '../interfaces/airport/airport';

export class AirportInfo {
  public static readonly AIRPORTS: IAirport[] = [
    {
      icao: 'KATL',
      name: 'Hartsfield–Jackson Atlanta International Airport',
      url: 'http://www.atl.com/',
      imageUrl: '../assets/airports/atl/atl.jpg'
    }
  ];
}
