import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeMapComponent } from './component/home-map/home-map.component';
import { HomeGalleryComponent } from './component/home-gallery/home-gallery.component';
import { HomeListComponent } from './component/home-list/home-list.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { EventsComponent } from './page/events/events.component';
import { ImpressComponent } from './page/impress/impress.component';
import { ContactComponent } from './page/contact/contact.component';
import { ClientComponent } from './page/client/client.component';
import { EventComponent } from './page/event/event.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {ButtonModule} from 'primeng/button';
import {Carousel} from 'primeng/carousel';
import {Tag} from 'primeng/tag';
import { CarouselComponent } from './component/carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeMapComponent,
    HomeGalleryComponent,
    HomeListComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ImpressComponent,
    ContactComponent,
    ClientComponent,
    EventComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ButtonModule,
    Carousel,
    Tag,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({

    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
