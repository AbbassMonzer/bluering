import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openPopUp() {
    this.dialog.open(PopupComponent, {
      height: '580px',
      width: '900px',
    });
  }

}

