import { LoaderService } from './services/loader/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loaderState: boolean;

  constructor(private loader: LoaderService) {

  }

  ngOnInit(): void {
    this.loader.loaderListener.subscribe((isVisible: boolean) => {
      this.loaderState = isVisible;
    });
    this.loader.hideLoader();
  }
}
