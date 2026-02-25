import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-day',
  imports: [RouterLink],
  templateUrl: './event-day.html',
  styleUrl: './event-day.scss',
})
export class EventDay {

  songData: any[] = [];

  constructor(private http: HttpClient,
    private cdr: ChangeDetectorRef) {

  }


  

}
