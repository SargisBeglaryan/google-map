import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
	displayedColumns = ['address', 'area-size', 'points-locations', 'actions'];
	locationsData = locationsAllData;

	constructor( 
		private dialog: MatDialog
	) { }

	openEditDialog() {
		let dialogRef = this.dialog.open(GoogleMapDialog, { width: '80%', height: '80%'});

		dialogRef.afterClosed().subscribe(result => {
		  dialogRef = null;
		});
	}
}

@Component({
  selector: 'map-dialog',
  templateUrl: 'map-dialog.html',
  styleUrls: ['./app.component.css']
})

export class GoogleMapDialog implements OnInit {
	public latitude: number;
	public longitude: number;
	public searchControl = new FormControl();
	public zoom: number;

	@ViewChild("search")
	public searchElementRef: ElementRef;

  	constructor(
  		public dialogRef: MatDialogRef<GoogleMapDialog>,
  		private mapsAPILoader: MapsAPILoader,
    	private ngZone: NgZone
  	) {}


	ngOnInit() {
		this.zoom = 4;
		this.latitude = 39.8282;
		this.longitude = -98.5795;

		this.setCurrentPosition();

		this.mapsAPILoader.load().then(() => {
		  let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
		    types: ["address"]
		  });
		  autocomplete.addListener("place_changed", () => {
		    this.ngZone.run(() => {
		      //get the place result
		      let place: google.maps.places.PlaceResult = autocomplete.getPlace();

		      //verify result
		      if (place.geometry === undefined || place.geometry === null) {
		        return;
		      }

		      //set latitude, longitude and zoom
		      this.latitude = place.geometry.location.lat();
		      this.longitude = place.geometry.location.lng();
		      this.zoom = 12;
		    });
		  });
		});
	}

	private setCurrentPosition() {
		if ("geolocation" in navigator) {
		  navigator.geolocation.getCurrentPosition((position) => {
		    this.latitude = position.coords.latitude;
		    this.longitude = position.coords.longitude;
		    this.zoom = 12;
		  });
		}
	}
}

export interface LocationsDetails {
  address: string;
  area_size: string;
  points_locations: string;
}

const locationsAllData: LocationsDetails[] = [
  {address: 'Hydrogen', area_size: 'Somethink', points_locations: 'test'},
];