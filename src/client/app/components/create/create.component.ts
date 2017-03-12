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
  public locationList: Array<string> = ["Earlham Hall","OA","Mills", "Hoener", "Wellness Center", "Joseph Moore Museum"];
  public activeLocation = "Location chosen: Earlham Hall";
  public indexOfLocation = 0;
  public message : string = "";

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
        this.activeLocation = "Location chosen: " + this.locationList[args.index];
        this.indexOfLocation = args.index;
    }

  ngOnInit() {

  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */

    addMessage(){
        //Take all data and add a message
        console.log("Location index: " + this.indexOfLocation);
        console.log("Message: " + this.message);
        if (this.message == "") {
            alert("Message can't be empty!");
        }
    }

}
