import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {
	MatButtonModule, 
	MatCheckboxModule, 
	MatDialogModule, 
	MatTableModule,
	MatCardModule,
	MatGridListModule,
	MatInputModule,
  MatIconModule
} from '@angular/material';


import { AppComponent, GoogleMapDialog } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgBy_DHNpUMeEMYPlN7hrtpzCNZQ8sFDI',
      libraries: ["places"]
    }),
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
  	MatGridListModule,
  	MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [GoogleMapDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
