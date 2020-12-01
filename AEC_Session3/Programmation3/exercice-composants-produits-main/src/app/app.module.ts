import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailFicheProduitComponent } from './detail-fiche-produit/detail-fiche-produit.component';
import { EnteteComponent } from './entete/entete.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { QteNagativePipe } from './qte-nagative.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailFicheProduitComponent,
    EnteteComponent,
    FicheProduitComponent,
    ListeProduitsComponent,
    PiedDePageComponent,
    QteNagativePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
