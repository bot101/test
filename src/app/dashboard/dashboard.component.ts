import { IAirport } from './../interfaces/airport/airport';
import { AirportInfo } from './../data/airport-info';
import { ResizerService } from './../services/resizer/resizer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  isMobile$: Observable<boolean>
  airports: IAirport[];

  constructor(private dialog: MatDialog, private resizer: ResizerService) {}

  ngOnInit(): void {
    this.airports = AirportInfo.AIRPORTS;
    this.isMobile$ = this.resizer.observeMobile();
  }

  logout() {

  }

  showAirportInfo(airport: IAirport) {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: this.isMobile$ ? '100vw' : '80vw',
      height: this.isMobile$ ? '90vh' : '70vh',
      panelClass: 'traffic-dialog',
      data: {airport}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(){
    this.isMobile$ = null;
  }

}
