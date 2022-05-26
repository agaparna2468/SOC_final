import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { C_LIST } from '../component_list';

@Component({
  selector: 'app-angular-components',
  templateUrl: './angular-components.component.html',
  styleUrls: ['./angular-components.component.css']
})
export class AngularComponentsComponent implements OnInit {

  c_list = C_LIST;


  constructor() { }

  ngOnInit(): void {
  }

}
