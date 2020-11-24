import { Component, OnInit } from '@angular/core';
import { links } from '../links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links = links;
  
  constructor() { }

  ngOnInit() {
  }

}