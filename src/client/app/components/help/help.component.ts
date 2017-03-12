// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/sample/index';

@Component({
  moduleId: module.id,
  selector: 'sd-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.css']
})
export class HelpComponent implements OnInit {
  public names$: Observable<any>;
  public email: string;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

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

  transitionToSignin() {
        // Try this in the {N} app
        // {N} can use these animation options
        this.routerext.navigate(['/signin'], {
          transition: {
            duration: 1000,
            name: 'slideTop',
          }
        });
    }

}
