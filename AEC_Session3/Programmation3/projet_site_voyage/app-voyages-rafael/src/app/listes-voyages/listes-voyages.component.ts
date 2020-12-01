import { Component, OnInit } from '@angular/core';

import { forfaits } from '../mock-voyages';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-listes-voyages',
  templateUrl: './listes-voyages.component.html',
  styleUrls: ['./listes-voyages.component.css']
})
export class ListesVoyagesComponent implements OnInit {

  mesForfaits: Array<Forfait> = forfaits;

  constructor() { }

  ngOnInit(): void {
  }

}
