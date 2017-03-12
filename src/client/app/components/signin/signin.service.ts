import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignInService {
  constructor(private http: Http) {}

  signin() {
    console.log('TEST GET');
    this.http.get('http://10.0.2.2:5000/signin').map(response => response.text()).subscribe();
  }
}
