import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-structural',
  templateUrl: './directives-structural.component.html',
  styleUrls: ['./directives-structural.component.scss']
})
export class DirectivesStructuralComponent implements OnInit {
  condition: boolean = true;

  toggle(): void {
    this.condition=!this.condition;
  }

  items: string[] = ['Anatoliy', 'Anna', 'Petr', 'Ivan'];

  changeColor(event: any): void {
    console.log(event.target.textContent)
  }

  count: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
