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
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string;
  public welcomeUser: string = "Welcome";

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  ngOnInit() {
    this.names$ = this.store.let(getNames);
    this.newName = '';
  }

  createGame() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/create'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
  viewGame() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
  playGame() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
