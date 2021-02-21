import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
// @ts-ignore
import moment from 'moment';
import {TimerService} from '../timer.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {

  constructor(
    public timerService: TimerService
  ) {
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent){
    //console.log(event.key)
    if(event.key === ' '){
      this.startTimer();
    }
  }

  counter: number;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        function leaveZeros(s,numZ){
          s = s.toString();
          if(s.length === 1 && numZ===2){
            return '0'+s;
          }
          if(s.length === 1 && numZ===3){
            return '00'+s;
          }
          if(s.length === 2 && numZ===3){
            return '0'+s;
          }
          return s;
        }
        this.timerService.counter = leaveZeros(moment.duration(this.counter).hours(),2)+":"+leaveZeros(moment.duration(this.counter).minutes(),2)+":"+leaveZeros(moment.duration(this.counter).seconds(),2)+"."+leaveZeros(moment.duration(this.counter).milliseconds(),3);
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    this.timerService.counter = "00:00:00.000"
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

}
