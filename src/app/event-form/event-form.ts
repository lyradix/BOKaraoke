import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-event-form',
  imports: [RouterLink, QRCodeComponent],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss',
})
export class EventForm {
  // public myAngularxQrCode: string = null;
  // constructor () {

  //   this.myAngularxQrCode = 'http://localhost:4200/Contact';
  // }

   public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor (private sanitizer: DomSanitizer) {
    this.myAngularxQrCode = 'http://192.168.1.164:4200/Contact';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
