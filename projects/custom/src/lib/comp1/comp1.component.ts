import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public i = 1;
  public list = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.i++;
  }

}
