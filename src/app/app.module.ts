import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScientistsComponent } from './scientists/scientists.component';
import { AddScientistComponent } from './add-scientist/add-scientist.component';

import { FormsModule } from '@angular/forms';
import { UpdateScientistComponent } from './update-scientist/update-scientist.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchByFieldComponent } from './search-by-field/search-by-field.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ScientistsComponent,
    AddScientistComponent,
    UpdateScientistComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchByFieldComponent,
    SearchByNameComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
