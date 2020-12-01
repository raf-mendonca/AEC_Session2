import { Component, Input } from '@angular/core';
import { Forfait } from './forfait';
import { forfaits } from './mock-voyages';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-rafael';
  mesForfaits: Array<Forfait> = forfaits;
  
}
