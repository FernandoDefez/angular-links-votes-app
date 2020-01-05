import { Component, OnInit, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})

export class LinkComponent implements OnInit {
  //Decorador
  @Input() link: Link;

  constructor() {

  }

  ngOnInit() {
  }

}
