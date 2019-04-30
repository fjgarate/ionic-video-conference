import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConversationService {
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

  getAll() {
    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.currentUser.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>(
      environment.apiUrl + '/conversations',
      options
    );
  }
  getConversationsByUserId(id: string) {
    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.currentUser.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>(
      environment.apiUrl + '/conversations/user' + '/' + id,
      options
    );
  }
  addMessage(conversationId: string, author: string, text: string) {
    const body = JSON.stringify({ author: author, text: text });
    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.currentUser.token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<any>(
      environment.apiUrl + '/conversations/' + conversationId, body, options
    );
  }
}

