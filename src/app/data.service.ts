import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

  constructor(private _logService: LogService) { }

  getData(): string[] {
    this._logService.write("операция получения данных");
    return this._data;
  }

  addData(name: string) {
    this._data.push(name);
    this._logService.write("операция добавления данных");
  }

}
