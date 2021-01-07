import {Component} from "@angular/core";

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
  public droitDeDecouverte : number = 1000;

  public afficherCreationDeCompte : boolean = true;
  public afficherDashboard : boolean = false;
  public afficherVersement : boolean = false;
  public afficherVirement : boolean = false;
  public afficherRetrait : boolean = false;


  public creationDeCompte () : void {
    this.solde = 10;
    this.numeroDeCompte = "XXXXXX123"

    this.afficherDashboard = true;
    this.afficherCreationDeCompte = false;
  }


  public versement () : void {
    this.afficherDashboard = false;

    this.afficherVersement = true;
  }


  public apresVersement () : void {
    this.solde = this.solde + this.montantAVerser;
    this.afficherVersement = false;
    this.afficherDashboard = true;
  }

  public virement () : void {


    this.afficherDashboard = false;
    this.afficherVirement = true;
  }

  public apresVirement () : void {
    this.solde = this.solde - this.montantAVirer;
    this.afficherVirement = false;
    this.afficherDashboard = true;
  }
  public retrait () : void {


    this.afficherDashboard = false;
    this.afficherRetrait = true;
  }

  public apresRetrait () : void {
    this.solde = this.solde - this.montantATirer;
    this.afficherRetrait = false;
    this.afficherDashboard = true;
  }

  public isDecouverte () : void {
    this.solde >= 0;
    this.solde = this.droitDeDecouverte;
  }




}

