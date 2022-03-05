import { Injectable } from '@angular/core';
import { Flight } from '../Flight';
import { Mockflight } from './mockflight';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  FlightDetail: Flight[] = [];
  constructor() {
    this.FlightDetail = Mockflight.mflight;
  }
  getPage(){
    return this.FlightDetail
  }
}
