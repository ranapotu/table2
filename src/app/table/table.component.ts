import { Component, OnInit } from '@angular/core';
import { Userdata } from '../userdata';

const ELEMENT_DATA: Userdata[] = [
  { firstname: 'Rana', lastname: 'potu', email: 'rana.potu@gmail' },
  { firstname: 'sandhya', lastname: 'potu', email: 'sandhya.potu@gmail.com' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  dataSource = ELEMENT_DATA;
}
