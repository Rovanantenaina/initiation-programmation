import {Component} from "@angular/core";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: "banque",
  templateUrl: "banque.html"
})


export class LancerBanque {

  public nom: string;
  public prenom: string;
  public dateDeNaissance: Date;
  public numeroDeCompte: string;
  public solde: number;

  public montantAVerser: number;
  public montantAVirer: number;
  public montantATirer: number;
  public droitDeDecouverte: number;
  public erreurVirement: string;
  public erreurRetrait: string;


  public afficherCreationDeCompte: boolean = true;
  public afficherDashboard: boolean = false;
  public afficherVersement: boolean = false;
  public afficherVirement: boolean = false;
  public afficherRetrait: boolean = false;


  public creationDeCompte(): void {
    this.solde = 10;
    this.droitDeDecouverte = 1000;
    this.numeroDeCompte = "XXXXXX123";

    this.afficherDashboard = true;
    this.afficherCreationDeCompte = false;
  }


  public versement(): void {
    this.afficherDashboard = false;

    this.afficherVersement = true;
  }


  public apresVersement(): void {
    this.solde = this.solde + this.montantAVerser;
    this.afficherVersement = false;
    this.afficherDashboard = true;
  }

  public virement(): void {
    this.afficherDashboard = false;
    this.afficherVirement = true;
  }

  public apresVirement(): void {
    this.afficherVirement = false;
    this.afficherDashboard = true;
    if (this.montantAVirer < (this.solde + this.droitDeDecouverte)) {

      this.solde = this.solde - this.montantAVirer;
    } else {
      this.erreurVirement = "Virement refusé";
    }

  }

  public retrait(): void {
    this.afficherDashboard = false;
    this.afficherRetrait = true;
  }

  public apresRetrait(): void {

    this.afficherRetrait = false;
    this.afficherDashboard = true;

    if (this.montantATirer < (this.solde + this.droitDeDecouverte)) {

      this.solde = this.solde - this.montantATirer;

    } else {
      this.erreurRetrait = "Retrait refusé"
    }
  }
}

