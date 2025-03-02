import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'songs', component: SongsComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};