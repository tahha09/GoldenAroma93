import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// use the already-defined application configuration (provides router + http client)
bootstrapApplication(App, appConfig).catch(err => console.error(err));
