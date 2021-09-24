import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 1000;

  increment() {
    this.value = (this.value + Math.floor(Math.random() * 10));
  }
  decrement() {
    this.value = (this.value - Math.floor(Math.random() * 10));
  }
}
