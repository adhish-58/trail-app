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
    var x = this.signInService.signin(this.email, this.password);
    console.log(x);
  }

}
