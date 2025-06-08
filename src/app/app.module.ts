import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './social/includes/header/header.component';
import { FooterComponent } from './social/includes/footer/footer.component';
import { AccueilComponent } from './social/accueil/accueil.component';
import { ContactComponent } from './social/contact/contact.component';
import { ServicesComponent } from './social/services/services.component';
import { BlogComponent } from './social/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
