import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  nonhero1 = "Wolverine";
  nonhero2 = "Tornade"; 
  nonhero3 = "Cyclope";

  constructor() { }

  ngOnInit(): void {
  }

}
