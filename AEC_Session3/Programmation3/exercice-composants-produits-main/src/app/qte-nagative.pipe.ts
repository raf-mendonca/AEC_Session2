import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './Produit';

@Pipe({
  name: 'qteNagative'
})
export class QteNagativePipe implements PipeTransform {

  transform(produits: Produit[]): Produit[] {
    return produits.filter(produit => produit.qteStock < 0);
  }

}
