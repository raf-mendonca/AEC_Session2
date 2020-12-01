import { Component } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-voyages';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent {
  showFiller = false;

  title = 'app-voyages-rafael';
  mesForfaits: Array<Forfait> = forfaits;
}
