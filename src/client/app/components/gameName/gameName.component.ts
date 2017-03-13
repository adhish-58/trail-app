// libs
import { Component, ElementRef, ViewChild, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/sample/index';


@Component({
  moduleId: module.id,
  selector: 'sd-game_name',
  templateUrl: 'game_name.component.html',
  styleUrls: ['game_name.component.css']
})

@Injectable()
export class GameNameComponent implements OnInit {
  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  public name: string = "";
  public description: string = "";

  ngOnInit() {
  }

  addMessage() {
    // Try this in the {N} app
    // {N} can use these animation options
    if (this.name == "" || this.description == ""){
        alert("Need a name and description!");
    } else {
        this.routerext.navigate(['/createMessage'], {
          transition: {
            duration: 500,
            name: 'flipRight',
          }
        });
    }

  }
}
