import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouteService} from './route.service';
import {TimerService} from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdwtimer';

  constructor(
    public routeService: RouteService,
    timerService: TimerService
  ) {
  }
}
