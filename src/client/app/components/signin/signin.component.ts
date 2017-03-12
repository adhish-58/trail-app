// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/sample/index';
import { SignInService } from './signin.service';

@Component({
  moduleId: module.id,
  selector: 'sd-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private store: Store<IAppState>, public routerext: RouterExtensions, private signInService: SignInService) {}

  ngOnInit() {
  }


  signinUser() {

    let auth = this.signInService.signin(this.email, this.password);
    auth.subscribe(response  => {
      let stat = response['stat'];
      let usr = response['user'];
      if(stat.localeCompare('False') == 0){
        console.log(usr + " IS NOT in our trail_db! Status Response: " + stat);
      } else {
        console.log(usr + " IS in our trail_db! Status Response: " + stat);
      }
    },
      error => { console.log("Error happened" + error); },
    );

    this.routerext.navigate(['/home'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

}
