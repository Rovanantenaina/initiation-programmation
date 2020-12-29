import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Pratique} from "./pratique/pratique";
import {SuperPage} from "./test/super-page";
import {Exercice} from "./dossier/exo-1";
import {PairImpair} from "./pair-impair/pair-impair";
import {FicheProduit} from "./fiche-produit/fiche-produit";
import {VerificationAge} from "./majeur/majeur";
import {Multiplication} from "./multiplication/multiplication";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: "home", component: Exercice},
    {path: "super", component: SuperPage},
    {path: "application", component : Pratique},
    {path: "pair-impair", component : PairImpair},
    {path: "fiche-produit", component : FicheProduit},
    {path: "majeur", component : VerificationAge},
    {path: "multiplication", component : Multiplication}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
