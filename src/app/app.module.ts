import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HListComponent } from './hotels/h-list/h-list.component';
import { HListItemComponent } from './hotels/h-list/h-list-item/h-list-item.component';
import { InfoComponent } from './info/info.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HotelsComponent,
    HListComponent,
    HListItemComponent,
    InfoComponent,
    AboutusComponent,
    ContactusComponent,
    FilterPipe,
    SortPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
