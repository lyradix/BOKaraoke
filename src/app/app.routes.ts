import { Routes } from '@angular/router';

import { Home } from './home/home';
import { QrCode } from './qr-code/qr-code';
import { EventForm } from './event-form/event-form';

export const routes: Routes = [
     { path: '', component: Home },
     {path: 'QrCode', component: QrCode},
     {path: 'EventForm', component: EventForm},
     { path: '**', redirectTo: '' }
];
