import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
 
  monProduit1: Produit = {
    id: 'abc',
    nom: 'Guarana',
    description: 'Guaraná Antarctica est la boisson gazeuse à base de guarana, une fruit de l amazonie Brésil.', 
    prix: 2.95
  }

  monProduit2: Produit = {
    id: 'abc2',
    nom: 'Coca-Cola',
    description: 'Coca-Cola est une marque nord américaine de soda de type cola fabriquée par The Coca-Cola Company. Cette marque a été déposée en 1886.', 
    prix: 3.05
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
