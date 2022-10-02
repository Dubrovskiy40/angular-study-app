import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Anatoliy'
  name2: string = 'Petr'
  titleIsRed: boolean = true

  constructor() { }

  changeName() {
    this.name = 'Anna'
  }

  ngOnInit(): void {
  }

}
