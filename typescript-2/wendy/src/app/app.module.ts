import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {SuperPage} from "./test/super-page";
import {Exercice} from "./dossier/exo-1";
import {Pratique} from "./pratique/pratique";
import {PairImpair} from "./pair-impair/pair-impair";
import {FicheProduit} from "./fiche-produit/fiche-produit";
import {VerificationAge} from "./majeur/majeur";

@NgModule({
  declarations: [
    AppComponent,
    SuperPage,
    Exercice,
    Pratique,
    PairImpair,
    FicheProduit,
    VerificationAge

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
