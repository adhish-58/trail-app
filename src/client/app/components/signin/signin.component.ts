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
  constructor(private store: Store<IAppState>, public routerext: RouterExtensions, private http: Http) {}

  ngOnInit() {
  }


  signinUser() {
      this.email = "";
      this.password = "";
    console.log('TEST GET');
    this.http.get('http://10.0.2.2:5000/signin').map(response => response.text()).subscribe();

    this.routerext.navigate(['/home'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

}
