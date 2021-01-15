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
import {Multiplication} from "./multiplication/multiplication";
import {Division} from "./division/division";
import {Geometrie} from "./geometrie/geometrie";
import {Moyenne} from "./moyenne/moyenne";
import {PlusDeux} from "./plus-deux/plus-deux";
import {LancerBanque} from "./banque/banque";
import {ArraySkills} from "./array-skills/array-skills";
import {Devise} from "./devise/devise";

@NgModule({
  declarations: [
    AppComponent,
    SuperPage,
    Exercice,
    Pratique,
    PairImpair,
    FicheProduit,
    VerificationAge,
    Multiplication,
    Division,
    Geometrie,
    Moyenne,
    PlusDeux,
    LancerBanque,
    ArraySkills,
    Devise

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
