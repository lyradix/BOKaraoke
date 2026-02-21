import { Routes } from '@angular/router';

import { Home } from './home/home';
import { QrCode } from './qr-code/qr-code';

export const routes: Routes = [
     { path: '', component: Home },
     {path: 'QrCode', component: QrCode},
     { path: '**', redirectTo: '' }
];
