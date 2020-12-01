import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  /*@Input() etoiles: number;*/
  @Input() forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}