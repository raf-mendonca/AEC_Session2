import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Forfait } from '../forfait';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-maxicomp',
  templateUrl: './maxicomp.component.html',
  styleUrls: ['./maxicomp.component.css']
  
})
export class MaxicompComponent implements OnInit {
  @Input() forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
