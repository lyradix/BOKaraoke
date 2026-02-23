import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-qr-code',
  imports: [RouterLink, QRCodeComponent],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode {
  constructor(public router: Router) {
    this.myAngularxQrCode = 'http://192.168.1.164:54348/Contact';}
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
   onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

 
}
