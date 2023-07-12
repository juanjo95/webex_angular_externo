import { Component, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-webex',
  templateUrl: './webex.component.html',
  styleUrls: ['./webex.component.css']
})
export class WebexComponent implements AfterViewInit {

  resp:any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    const accessToken = 'YWI1ZDM0ZWQtMTQ4OC00YjhhLWIwYzQtYzUxOWVmZDQ2YTEwNzA1OTc3N2QtMzYz_P0A1_ea5a2209-b8f9-43f6-94fd-33c82d62e74c';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = {
      title: 'Mi reunión de ejemplo',
      start: '2023-07-13T10:00:00Z', // Fecha y hora de inicio de la reunión en formato ISO 8601
      end: '2023-07-13T11:00:00Z' // Fecha y hora de finalización de la reunión en formato ISO 8601
    };

    this.http
      .post('https://webexapis.com/v1/meetings', body, { headers })
      .subscribe((response) => {
        console.log('Reunión creada:', response);
        this.resp = response;
        console.log(this.resp);
        //this.redirectToMeeting();
      });
  }

  redirectToMeeting() {
    const meetingUrl = this.resp.webLink;
    window.open(meetingUrl, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600');
  }



}
