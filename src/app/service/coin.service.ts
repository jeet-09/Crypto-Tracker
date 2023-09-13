import {Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private selectedCOin$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");
  constructor() { }

getCoin(){
   return this.selectedCOin$.asObservable();
 }
 setCoin(currency : string){
   this.selectedCOin$.next(currency);
 }
}