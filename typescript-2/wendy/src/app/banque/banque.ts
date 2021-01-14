import {Component} from "@angular/core";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: "banque",
  templateUrl: "banque.html",
  styleUrls : ["banque.css"]
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
  public afficherVirementRefuse: boolean = false;
  public afficherRetraitRefuse: boolean = false;


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
    this.afficherVirementRefuse = false;
    this.afficherRetraitRefuse = false;
  }

  public virement(): void {
    this.afficherDashboard = false;
    this.afficherVirement = true;
  }

  public apresVirement(): void {
    this.afficherVirement = false;
    this.afficherDashboard = true;
    this.afficherRetraitRefuse = false;
    this.afficherVirementRefuse = false;


    this.solde = this.solde - this.montantAVirer;

  }

  public echecVirement(): void {
    this.afficherVirement = false;
    this.afficherDashboard = true;
    this.afficherVirementRefuse = true;

    if (this.montantAVirer > (this.solde + this.droitDeDecouverte)) {
      this.erreurVirement = "Virement refusé, manque de provision sur votre compte."
    } else {
      this.solde = this.solde - this.montantAVirer;
    }
  }

  public retrait(): void {
    this.afficherDashboard = false;
    this.afficherRetrait = true;
  }

  public apresRetrait(): void {

    this.afficherRetrait = false;
    this.afficherDashboard = true;
    this.afficherVirementRefuse = false;
    this.afficherRetraitRefuse = false;

    this.solde = this.solde - this.montantATirer;
  }

  public echecRetrait () : void {
    this.afficherRetrait = false;
    this.afficherDashboard = true;
    this.afficherRetraitRefuse = true;

    if (this.montantATirer > (this.solde + this.droitDeDecouverte)) {
      this.erreurRetrait = "Retrait refusé, manque de provision sur votre compte."
    } else  {
      this.solde = this.solde - this.montantATirer;
    }
  }
}

