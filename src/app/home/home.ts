import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink], 
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    constructor(public router: Router) {}
}
