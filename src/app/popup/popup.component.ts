import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

export class User {
  name: string;
  unit1: string;
  job: string;
  unit2: string;
}

const ELEMENT_DATA: User[] = [
  { name: 'ali', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'karin', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'abbass', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'jalal', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'hamza', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'samer', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'abbass', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'jalal', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'hamza', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'samer', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'samer', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'abbass', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },
  { name: 'jalal', unit1: 'Web Development', job: 'xyz', unit2: 'Data Mining' },];
  //Data(should be dynamic)

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  userFilter: any = { name: '' };
  model: string;
  emails: string[] = []

  config: any;
  dataSource = ELEMENT_DATA;
  public responsive: boolean = true;

  list = [
    { name: 'TO' },
    { name: 'CC' },
    { name: 'BCC' }
  ]; //select options(Send to)

  color: ThemePalette = 'primary';
  show: boolean;

  constructor(private filterPipe: FilterPipe) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.dataSource.length
    }; //pagination configuration
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

    toggle() {
      this.show = !this.show;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }


  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
