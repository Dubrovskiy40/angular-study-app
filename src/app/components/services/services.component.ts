import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  _items: string[] = [];
  name: string = "";
  constructor(private _dataService: DataService){}

  addItem(name: string){
    this._dataService.addData(name);
    this.name = '';
  }

  get items(): string[] {
    return this._items = this._dataService.getData();
  }

  ngOnInit(){
    this.items
  }
}
