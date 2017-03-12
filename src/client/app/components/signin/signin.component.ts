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
  selector: 'sd-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {
  public names$: Observable<any>;
  public email: string;
  public password: string;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}


  user1 = {
      email : "jamesptran96@gmail.com",
      password : "abc123"
  }
  user2 = {
      email : "ltnguyen14@earlham.edu",
      password : "abc123"
  }
  user3 = {
      email : "ssudhe13@earlham.edu",
      password : "abc123"
  }

  userList = [
      this.user1, this.user2, this.user3
  ]

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

  signinUser() {
        // Try this in the {N} app
        // {N} can use these animation options
        var verified = false;
        for (var i = 0; i < this.userList.length; i++) {
            if (this.email == this.userList[i].email && this.password == this.userList[i].password) {
                this.routerext.navigate(['/home'], {
                  transition: {
                    duration: 1000,
                    name: 'slideTop',
                  }
                });
                verified = true;
                break;
            }
        }
        if (!verified){
            alert("No user found! Maybe you want to register instead?")
        }
    }

}
