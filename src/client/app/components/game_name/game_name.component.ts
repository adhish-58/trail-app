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
  public names$: Observable<any>;
  public newName: string;
  public welcomeUser: string = "Welcome";

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  ngOnInit() {
    this.names$ = this.store.let(getNames);
    this.newName = '';
  }

  chooseLocation() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/register'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
