import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-qr-code',
  imports: [RouterLink, QRCodeComponent, CommonModule],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode implements OnInit {

roomData: any[] = [];

  constructor(private http: HttpClient,
    router: Router,
    private cdr: ChangeDetectorRef
   ) {
    this.myAngularxQrCode = 'http://192.168.1.164:54348/Contact';}
    public myAngularxQrCode: string = "";
    public qrCodeDownloadLink: SafeUrl = "";
   onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

   ngOnInit(): void {
    this.getRoomData();
  }


  getRoomData() {
    this.http.get('http://192.168.1.164:8000/rooms').
    subscribe(
      (result: any) => {
        this.roomData = result;
        this.cdr.detectChanges();
      },
    );
  }



}
