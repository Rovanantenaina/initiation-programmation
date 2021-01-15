import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Pratique} from "./pratique/pratique";
import {SuperPage} from "./test/super-page";
import {Exercice} from "./dossier/exo-1";
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
  imports: [RouterModule.forRoot([
    {path: "home", component: Exercice},
    {path: "super", component: SuperPage},
    {path: "application", component : Pratique},
    {path: "pair-impair", component : PairImpair},
    {path: "fiche-produit", component : FicheProduit},
    {path: "majeur", component : VerificationAge},
    {path: "multiplication", component : Multiplication},
    {path: "division", component : Division},
    {path: "geometrie", component: Geometrie},
    {path: "moyenne", component: Moyenne},
    {path: "plusDeux", component : PlusDeux},
    {path: "lancerBanque", component : LancerBanque},
    {path: "array-skills", component : ArraySkills},
    {path: "devise", component : Devise}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
