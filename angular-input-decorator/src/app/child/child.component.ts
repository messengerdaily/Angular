import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input('data') data: any;
  constructor() { }

  ngOnInit() {
  }

}
