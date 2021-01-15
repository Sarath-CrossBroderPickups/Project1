import { Component, OnInit } from '@angular/core';
import { QuickBase } from '../quick-base.service';
import { packages } from './packages.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['../app.component.scss']
})
export class PackagesComponent implements OnInit {
  displayedColumns: string[] = ["3","497","12","158","38","11"];
  columnNames: Map<string, string> = new Map();
  data = [];
  constructor(private quickBase:QuickBase) { }
  selected = [];
  ngOnInit(): void {
    this.columnNames.set("3","Package Id");
    this.columnNames.set("497", "Action");
    this.columnNames.set("12","Received");
    //this.columnNames.set("32","Received From");
    this.columnNames.set("158","Size");
    this.columnNames.set("38","Tracking Number");
    this.columnNames.set("11","Carrier");
    //this.columnNames.set("19","Notes");
    this.quickBase.getOrders().subscribe(orders => {
        this.data = orders['data'];
        this.data = this.data.slice(0,10);
        console.log(orders,this.data, this.displayedColumns, this.columnNames );

      });
  }
}
