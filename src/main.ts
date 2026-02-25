import { bootstrapApplication } from '@angular/platform-browser';
import {NestFactory} from '@nestjs/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
