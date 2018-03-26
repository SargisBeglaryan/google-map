import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayedColumns = ['address', 'area-size', 'points-locations', 'actions'];
	locationsData = locationsAllData;
	constructor( private dialog: MatDialog ) { }

	openEditDialog() {
		let dialogRef = this.dialog.open(GoogleMapDialog, {});

		dialogRef.afterClosed().subscribe(result => {
		  dialogRef = null;
		});
	}
}

@Component({
  selector: 'map-dialog',
  templateUrl: 'map-dialog.html',
})

export class GoogleMapDialog {
  constructor(public dialogRef: MatDialogRef<GoogleMapDialog>) { }
}

export interface LocationsDetails {
  address: string;
  area_size: string;
  points_locations: string;
}

const locationsAllData: LocationsDetails[] = [
  {address: 'Hydrogen', area_size: 'Somethink', points_locations: 'test'},
];