import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { QRCodeComponent } from 'angularx-qrcode';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-event-form',
  imports: [RouterLink],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss',
})
export class EventForm {
  nameValue: string = '';
  placeValue: string = '';
  dateValue: string = '';

  constructor(private http: HttpClient) {}

  name(event: Event) {
    this.nameValue = (event.target as HTMLInputElement).value;
  }

  place(event: Event) {
    this.placeValue = (event.target as HTMLInputElement).value;
  }
  
  date(event: Event) {
    this.dateValue = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(this.nameValue && this.placeValue && this.dateValue) {

      const eventData = {
        name: this.nameValue,
        place: this.placeValue,
        date: this.dateValue
      };

      this.http.post('http://192.168.1.164:8000/postRoom', eventData).subscribe(
        // (response) => console.log('ok', response),
         (response) =>console.log(eventData),
       
        (error) => console.error('Erreur', error)
      );
    } else {
      console.warn('Veuillez remplir tous les champs du formulaire.');

    }
  }
  
}
