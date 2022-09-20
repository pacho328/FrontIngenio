import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowWeatherComponent } from './components/show-weather/show-weather.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherComponent,
    DialogoConfirmacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogoConfirmacionComponent,
  ]
})
export class AppModule { }
