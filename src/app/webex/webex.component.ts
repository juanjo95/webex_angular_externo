import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-webex',
  templateUrl: './webex.component.html',
  styleUrls: ['./webex.component.css']
})
export class WebexComponent {

  resp:any;
  access_token!:string;
  refresh_token!:string;

  constructor(private http: HttpClient) {}

  createMeeting(){
    const accessToken = 'MmIyNTM0MWQtMmRjYS00NGE2LWI5MTEtZTgwNGZiZTc1NjYwMGY3NjQ0MTgtZjZi_P0A1_ea5a2209-b8f9-43f6-94fd-33c82d62e74c';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = {
      title: 'Mi reunión de ejemplo',
      start: '2023-08-15T10:00:00Z', // Fecha y hora de inicio de la reunión en formato ISO 8601
      end: '2023-08-15T11:00:00Z' // Fecha y hora de finalización de la reunión en formato ISO 8601
    };

    this.http
      .post('https://webexapis.com/v1/meetings', body, { headers })
      .subscribe((response) => {
        console.log('Reunión creada exitosamente:', response);
        this.resp = response;
        console.log(this.resp);

        //this.redirectToMeeting();

      });
    }

    redirectToMeeting() {
    const meetingUrl = this.resp.webLink;
    window.open(meetingUrl, '_blank');
  }



}
