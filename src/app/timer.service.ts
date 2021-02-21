import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public counter = "00:00:00.000";
  constructor() { }
}
