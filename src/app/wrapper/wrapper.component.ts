import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: '.app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  constructor() {
  }

  @Input() sidenavShow: Boolean;

}
