// libs
import { Component, ElementRef, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/sample/index';

@Component({
  moduleId: module.id,
  selector: 'sd-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class CreateComponent implements OnInit {
  public names$: Observable<any>;
  public email: string;
  public password: string;
  public userName: string;
  public locationList: Array<string> = ["Earlham Hall","OA","Mills"];
  public activeLocation = "Location chosen: Earlham Hall";

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
        this.activeLocation = "Location chosen: " + this.locationList[args.index]
    }

  ngOnInit() {
    this.names$ = this.store.let(getNames);
    this.email = '';
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new nameList.AddAction(this.email));
    this.email = '';
    return false;
  }

  addMessage() {
        // Try this in the {N} app
        // {N} can use these animation options
    }

    chooseLocation(){

    }

}
