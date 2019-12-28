import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderListener = new EventEmitter<boolean>();
  constructor() { }

  showLoader() {
    this.loaderListener.emit(true);
  }

  hideLoader() {
    this.loaderListener.emit(false);
  }

}
