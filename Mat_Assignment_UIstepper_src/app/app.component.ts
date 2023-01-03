import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mat_Assignment';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExample,{
      width: '250px',
      height:'250px'
    });
  }

  contactDetailsOpenDialog(){
    this.dialog.open(contactDetailsDialog,{
      width: '250px',
      height:'250px'
    });
  }

}

@Component({
  selector: 'DialogExample',
  templateUrl: 'CEOmsg.html',
})

export class DialogExample {}

@Component({
  selector: 'contactDetailsDialog',
  templateUrl: 'contactDetails.html',
})

export class contactDetailsDialog {}



