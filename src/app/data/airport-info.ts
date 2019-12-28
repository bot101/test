import { IAirport } from '../interfaces/airport/airport';

export class AirportInfo {
  public static readonly AIRPORTS: IAirport[] = [
    {
      icao: 'KATL',
      name: 'Hartsfield–Jackson Atlanta International Airport',
      url: 'http://www.atl.com/',
      imageUrl: '../assets/airports/atl/atl.jpg'
    },
    {
      icao: 'ZBAA',
      name: 'Beijing Capital International Airport',
      url: 'http://en.bcia.com.cn/',
      imageUrl: '../assets/airports/beijing/beijing.jpg'
    },
    {
      icao: 'OMDB',
      name: 'Dubai International Airport',
      url: 'http://www.dubaiairports.ae/',
      imageUrl: '../assets/airports/dubai/dubai.jpg'
    },
    {
      icao: 'KLAX',
      name: 'Los Angeles International Airport',
      url: 'https://www.flylax.com/',
      imageUrl: '../assets/airports/lax/lax.jpg'
    },
    {
      icao: 'EGLL',
      name: 'Heathrow Airport',
      url: 'https://www.heathrow.com/',
      imageUrl: '../assets/airports/heathrow/heathrow.jpg'
    },
    {
      icao: 'LFPG',
      name: 'Charles de Gaulle Airport',
      url: 'http://www.aeroportsdeparis.fr/en/homepage',
      imageUrl: '../assets/airports/cdg/cdg.jpg'
    },
    {
      icao: 'VHHH',
      name: 'Hong Kong International Airport',
      url: 'http://www.hongkongairport.com/',
      imageUrl: '../assets/airports/hkg/hkg.jpg'
    },
    {
      icao: 'ZSPD',
      name: 'Shanghai Pudong International Airport',
      url: 'http://www.shairport.com/index_enpdjc.html',
      imageUrl: '../assets/airports/pdg/pdg.jpg'
    },
    {
      icao: 'KORD',
      name: 'O\'Hare International Airport',
      url: 'http://www.flychicago.com/ohare',
      imageUrl: '../assets/airports/ohr/ohr.jpg'
    },
    {
      icao: 'RJTT',
      name: 'Haneda Airport',
      url: 'http://www.haneda-airport.jp/inter/en/',
      imageUrl: '../assets/airports/beijing/beijing.jpg'
    }
  ];
}
