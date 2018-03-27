import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
      apiKey: 'AIzaSyBv5WVbMk9_C26b4JboXL0IvJieLZoyKfI'
    }),
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
  	MatGridListModule,
  	MatInputModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [GoogleMapDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
