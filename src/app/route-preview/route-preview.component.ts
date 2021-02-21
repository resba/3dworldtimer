import { Component, OnInit } from '@angular/core';
import {RouteService} from '../route.service';

@Component({
  selector: 'app-route-preview',
  templateUrl: './route-preview.component.html',
  styleUrls: ['./route-preview.component.scss']
})
export class RoutePreviewComponent implements OnInit {

  constructor(
    public routeService: RouteService
  ) { }

  ngOnInit(): void {
  }

}
