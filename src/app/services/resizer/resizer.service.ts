import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResizerService {

  constructor(private breakpointObserver: BreakpointObserver){ }

  observeMobile(): Observable<boolean>{
    return this.breakpointObserver.observe([
      Breakpoints.Handset,
    ]).pipe( 
        map(result => result.matches),
        shareReplay()
    );
  }
}
