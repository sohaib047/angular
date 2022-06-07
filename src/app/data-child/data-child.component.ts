import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {

  constructor() { }
  @Output () updateDataEvent = new EventEmitter<string>();
  @Output () u_data = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
