import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { PRODUITS } from '../mock-produits';

@Component({
  selector: 'app-list-exemple',
  templateUrl: './list-exemple.component.html',
  styleUrls: ['./list-exemple.component.css']
})
export class ListExempleComponent implements OnInit {
  produits: Produit[] = PRODUITS;
  constructor() { }

  ngOnInit(): void {
  }

}
