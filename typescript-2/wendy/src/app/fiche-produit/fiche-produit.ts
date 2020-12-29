import {Component} from "@angular/core";

@Component({
  selector: "fiche-produit",
  templateUrl: "fiche-produit.html"
})
export class FicheProduit {
  public nomProduit: string;
  public prixUnitaire: number;
  public tva: number;
  public quantite: number;

  public prixTTC: number = 0;

  public calculerPrixTTC(): void {
    let prixHorsTaxe: number = this.prixUnitaire * this.quantite;
    this.prixTTC = prixHorsTaxe + (prixHorsTaxe * this.tva);
  }


}
