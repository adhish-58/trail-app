// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/sample/index';
import { SignInService } from '../signin/signin.service';

@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  public fullname: string;
  public userName: string;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions, private SignInService: SignInService) {}

  ngOnInit() {
    this.userName = this.SignInService.ecUsername;
  }

  registerUser() {
    this.SignInService.registerThisUser(this.userName, this.fullname);

  }
}
