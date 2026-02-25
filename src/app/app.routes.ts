import { Routes } from '@angular/router';

import { Home } from './home/home';
import { QrCode } from './qr-code/qr-code';
import { EventForm } from './event-form/event-form';
import { EventDay } from './event-day/event-day';
import { ManageSong } from './manage-song/manage-song';

export const routes: Routes = [
     { path: '', component: Home },
     {path: 'QrCode', component: QrCode},
     {path: 'EventForm', component: EventForm},
     {path: 'EventDay', component: EventDay},
     { path: 'ManageSong', loadComponent: () => import('./manage-song/manage-song').then(m => m.ManageSong) },
     { path: '**', redirectTo: '' }
];
