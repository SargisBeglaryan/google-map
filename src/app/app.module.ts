import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
