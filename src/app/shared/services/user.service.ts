import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  currentUser: User;
  currentUserSubscription: Subscription;
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      });
  }
  getById(id: string) {

    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.currentUser.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>(
      environment.api_url + '/users/' + id,
      options
    );
  }
}
