import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-attribute',
  templateUrl: './directives-attribute.component.html',
  styleUrls: ['./directives-attribute.component.scss']
})
export class DirectivesAttributeComponent implements OnInit {
  classStyle: boolean = true;
  classSize: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
