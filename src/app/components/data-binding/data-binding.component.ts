import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Anatoliy';
  name2: string = 'Petr';
  titleIsRed: boolean = true;
  randomName: string[] = ['Anatoliy', 'Anna', 'Petr', 'Ivan'];

  constructor() { }

  changeName() {
    this.name = String(this.randomName[Math.floor(Math.random() * (this.randomName.length - 0) + 0)]);
    this.titleIsRed = !this.titleIsRed
  }

  ngOnInit(): void {
  }

}
