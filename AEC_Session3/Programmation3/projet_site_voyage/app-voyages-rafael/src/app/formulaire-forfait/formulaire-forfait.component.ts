import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

/**
 * @title Plain input autocomplete
 */


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
 
export class FormulaireForfaitComponent implements OnInit {
  nomHotel:string = "";
  adresseHotel:string = "";
  
  destinationsControl = new FormControl(); /* */
  departsControl = new FormControl(); /* */
  
  filteredDestinations:  Observable<string[]>; /* */
  filteredDeparts:  Observable<string[]>; /* */

  departs: string[] = ['Quebec', 'Montreal', 'Ottawa']; /**/
  destinations: string[] = ['Méxique', 'République dominicaine', 'Saint Barths', 'Bermudes']; /*destinations */


  ngOnInit() {
    this.filteredDestinations = this.destinationsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDestinations(value))
      );
      this.filteredDeparts = this.departsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDeparts(value))
      );
  }

  private filterDestinations(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.destinations.filter(paysdestination => paysdestination.toLowerCase().includes(filterValue));
  }

  private filterDeparts(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.departs.filter(choisdepart => choisdepart.toLowerCase().includes(filterValue));
  }

  
}
