import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-settings',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.css']
})
export class SettingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rows = [
    { name: 'Binh Le', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
}
