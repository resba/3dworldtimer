import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stage} from './interfaces/stage';
import {Papa} from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public totalStarCount: number = 0;

  public stages: Stage[];

  public currentStage = 0;

  public loaded = false;

  constructor(
    http: HttpClient
  ) {
    this.stages = new Array<Stage>();
    http.get('/assets/run/sm3dw.csv', {responseType: "text"})
      .subscribe(
        (res) => {
          console.log(res);
          let papa: Papa = new Papa();
          papa.parse(res, {
            complete: (result) => {
              function parseTrueFalse(datumElement: string): boolean {
                if(datumElement === "TRUE"){
                  return true;
                }
                return false;
              }

              for (let i = 1; i < result.data.length; i++) {
                this.stages.push({
                  starClaimed: 0, // not in import
                  world:        result.data[i][0],
                  level:        result.data[i][1],
                  name:         result.data[i][2],
                  character:    result.data[i][3],
                  stars:        result.data[i][4],
                  starCount:    result.data[i][5],
                  order:        result.data[i][6],
                  catSuit:      parseTrueFalse(result.data[i][7]),
                  warpPipe:     parseTrueFalse(result.data[i][8]),
                  starLimit:    result.data[i][9] | 0,
                  notes:        result.data[i][10],
                  change: 0, // change stuff, not in import
                  completed: false, // not in import
                } as Stage)

              }
              console.log("Loaded "+this.stages.length+" Stages");
              //this.stages.sort(function c(a: Stage,b: Stage): number{ if(a.order < b.order){return -1;} if(a.order > b.order) {return 1} });
              //console.log("Sorted Stages by Order");
              this.loaded = true;
            }
          })
        }
      )
  }


  getClosestBlocker(): Stage {
    let n = this.currentStage;
    for (let i = n; i < this.stages.length; n++) {
      if(this.stages[n].starLimit > 0){
        return this.stages[n];
      }
    }
    return this.stages[n];

  }

  getLastBlocker(): Stage {
    return this.stages[this.stages.length-1];
  }
}
