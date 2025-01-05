import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {AboutComponent} from './page/about/about.component';
import {EventsComponent} from './page/events/events.component';
import {ImpressComponent} from './page/impress/impress.component';
import {ContactComponent} from './page/contact/contact.component';
import {ClientComponent} from './page/client/client.component';
import {EventComponent} from './page/event/event.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/home', component: HomeComponent },
  { path: 'pages/about', component: AboutComponent },
  { path: 'pages/events', component: EventsComponent },
  { path: 'pages/impress', component: ImpressComponent },
  { path: 'pages/contact', component: ContactComponent },
  { path: 'pages/client', component: ClientComponent},
  { path: 'pages/event', component: EventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
