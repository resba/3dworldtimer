import {Component, HostListener, OnInit} from '@angular/core';
import {RouteService} from '../route.service';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-stage-info',
  templateUrl: './stage-info.component.html',
  styleUrls: ['./stage-info.component.scss']
})
export class StageInfoComponent implements OnInit {

  constructor(
    public routeService: RouteService,
    public timerService: TimerService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent){
    console.log(event.key)
    if(event.key === 'ArrowLeft' || event.key === 'ArrowUp'){
      try{
        this.routeService.currentStage--;
        console.log(this.routeService.stages[this.routeService.currentStage]);
        if(this.routeService.stages[this.routeService.currentStage] === undefined){
          this.routeService.currentStage++;
        }
      }catch(e){
        console.log(e);
        this.routeService.currentStage++;
      }
    }
    if(event.key === 'ArrowRight' || event.key === 'ArrowDown'){
      try{
        this.routeService.currentStage++;
        console.log(this.routeService.stages[this.routeService.currentStage]);
        if(this.routeService.stages[this.routeService.currentStage] === undefined){
          this.routeService.currentStage--;
        }
      }catch(e){
        console.log(e);
        this.routeService.currentStage--;
      }
    }
    if(event.key === '1'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 1;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 1;
      this.routeService.currentStage++;
    }
    if(event.key === '2'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 2;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 2;
      this.routeService.currentStage++;
    }
    if(event.key === '3'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 3;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 3;
      this.routeService.currentStage++;
    }
    if(event.key === '5'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 5;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 5;
      this.routeService.currentStage++;
    }
    if(event.key === '0'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 0;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 0;
      this.routeService.currentStage++;
    }
    if(event.key === '-'){
      this.routeService.stages[this.routeService.currentStage].starClaimed = 10;
      this.routeService.totalStarCount = this.routeService.totalStarCount + 10;
      this.routeService.currentStage++;
    }
  }

}
