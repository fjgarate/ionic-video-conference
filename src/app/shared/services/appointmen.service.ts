import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/appointment';

import { AuthenticationService } from './authentication.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(
    private http: HttpClient,
    ) {

   }

  getAllCalendar(token: string, userId: string) {
    const options = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      })
    };
    return this.http.get<any>(
      environment.api_url + "/appointments/calendar" + "/" + userId,
      options
    );
  }  

}

