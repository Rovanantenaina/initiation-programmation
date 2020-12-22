import {Component} from '@angular/core';
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import {createElementCssSelector} from "@angular/compiler";

@Component({
  selector: 'app-root',
  template: `<span>TRAINEE</span>`
})
export class AppComponent {

  constructor() {
    this.homeworkCondition()
  }

  homeworkCondition() {
    console.log("========Nombre========")
    let x: number;
    x : 23;


    if (x == 0) {
      console.log("Le nombre x est pair",);
    } else {
      console.log("Le nombre x est impair",);
    }
    console.log("=======Météo=======")

    let degre: number;
    degre = -2;

    if (degre <= -1) {
      console.log("Il neige",);
    }
    if (0 <= degre && degre <= 10) {
      console.log("Il fait froid",);
    }
    if (10 <= degre && degre <= 18) {
      console.log("Il fait frais",);
    }
    console.log("=======Devise========")

    let pays : string;
    pays = "Madagascar";

    if ( pays = "Madagascar") {
      console.log("La monaie utiliser est (Ariary)",);
    }
    pays = "France";

    if ( pays = "France") {
      console.log("La monaie utiliser est l'(Euro)");
    }
    pays = "USA";

    if (pays = "USA") {
      console.log("La monaie utiliser est le (dollard)");
    }
  }








  pratiqueConditon() {
    let age: number;
    age = 14;

    if (age <= 14) {
      console.log("Vous êtes un enfant");
    }
    if (15 <= age && age <= 17) {
      console.log("Vous êtes adolesecent");
    }
    if (18 <= age && age <= 30) {
      console.log("Vous êtes Jeune");
    }
    if (31 <= age && age <= 45) {
      console.log("Vous êtes adulte");
    }
    if (46 <= age && age <= 75) {
      console.log("Vous êtes vieux");
    }
    if (age >= 76) {
      console.log("Vous êtes un olo mody");
    }
  }

  kotranaCondition1() {
    // déclaration des variables
    let age: number;
    let isMajeur: boolean;

    // Affectation
    age = 18;
    isMajeur = age >= 18;

    // vérification des conditions et affichage du résultat
    if (isMajeur) {
      console.log("Vous êtes majeur");
    }
    if (!isMajeur) {
      console.log("Vous êtes mineur");
    }


  }

  kotranaCondition() {
    let age: number;
    let isMajeur: boolean;

    age = 12;
    isMajeur = age > 18;

    if (isMajeur == true) {
      console.log("vous êtes majeur");
    }

    if (isMajeur == false) {
      console.log("vous êtes mineur");
    }
  }


  lancerBanque() {

    let nomDuClient: string;
    let dateDeNaissance: Date;
    let numeroDeCompte: string;
    let solde: number;
    let montantDeVirement: number;
    let montantDeRetrait: number;
    let montantDeVersement: number;
    let isDecouvert: boolean;
    let droitDeDecouvert: number;

    nomDuClient = "Dupont Joe";
    dateDeNaissance = new Date("01-01-1960");
    numeroDeCompte = "WE-001";
    solde = 10;
    droitDeDecouvert = 150.5;

    console.log("===========Création d'un compte==========");
    console.log("Nom du client:", nomDuClient);
    console.log("Date de naissance:", dateDeNaissance);
    console.log("Numero de compte:", numeroDeCompte);
    console.log("Solde:", solde, "€");
    console.log("=========================================");

    montantDeVersement = 750;
    solde = montantDeVersement + solde;
    isDecouvert = solde < 0;

    console.log("============Opération===============");
    console.log("========Versement===========");
    console.log("Montant du versement:", montantDeVersement, "€");
    console.log("Nouveau solde:", solde, "€");
    if (isDecouvert) {
      console.log("Vous êtes à découverte");
    }
    console.log("=======================================");

    montantDeVersement = 150.55;
    solde = montantDeVersement + solde;
    isDecouvert = solde < 0;

    console.log("========Nouvelle opération========");
    console.log("=======Versement==========");
    console.log("Montant versé:", montantDeVersement, "€");
    console.log("Nouveau solde:", solde, "€");
    if (isDecouvert) {
      console.log("Vous êtes à découverte");
    }
    console.log("======================================");

    montantDeRetrait = 59;
    let sommeTemporaire: number;
    sommeTemporaire = solde - montantDeRetrait;

    if (sommeTemporaire >= droitDeDecouvert) {
      solde = solde - montantDeRetrait;
      isDecouvert = solde < 0;

      console.log("========Nouvelle opération========");
      console.log("=======Retrait=============");
      console.log("Montant du retrait:", montantDeRetrait, "€");
      console.log("Nouveau solde:", solde, "€");
      if (isDecouvert) {
        console.log("Vous êtes à découverte");
      }
      console.log("==================================");

    } else {
      console.error("Votre droit de découvert est dépasé, l'opération est annulée.");
      console.log("Pensez à recharger votre compte.");
      console.log("WE banque vous souhaite une excellente journée.");
    }


    montantDeVirement = 400;
    solde = solde - montantDeVirement;
    isDecouvert = solde < 0;

    if (solde >= droitDeDecouvert) {
      solde = solde - montantDeVirement;
      isDecouvert = solde < 0;

      console.log("============Nouvelle opération==============");
      console.log("==========Virement=============");
      console.log("Montant à viré:", montantDeVirement, "€");
      console.log("Nouveau solde:", solde, "€");
      if (isDecouvert) {
        console.log("Vous êtes à découverte");
      }
      console.log("========================================");
    } else {
      console.log("Votre droit de découverte est dépassée");
      console.log("Vous pouvez pas effectuer cette opération");
    }


    montantDeRetrait = 500;
    solde = solde - montantDeRetrait;
    isDecouvert = solde < 0;

    console.log("===========Nouvelle opération==============");
    console.log("==========Rétrait==============");
    console.log("Montant du retrait:", montantDeRetrait, "€");
    console.log("Nouveau solde:", solde, "€");
    if (isDecouvert) {
      console.log("Vous êtes à découverte");

      console.log("============================================");

    }
    montantDeRetrait = 200;
    sommeTemporaire = solde - montantDeRetrait;

    if (sommeTemporaire >= droitDeDecouvert) {
      solde = solde - montantDeRetrait;
      isDecouvert = solde < 0;
      console.log("==========Nouvelle opération============");
      console.log("=========Retrait=============");
      console.log("Montant de retrait:", montantDeRetrait, "€");
      console.log("Nouvelle soldes:", solde, "€");
    } else {
      console.log("Votre droit de découverte est dépassée");
      console.log("Vous pouvez pas effectuer cette opération");

    }


  }


  temporaire() {
    let start: string;
    start = "Hello world!";
    start = "Wendy";
    console.log(start);

    let marque: string;
    let annee: number;
    let proprio: string;
    let accident: boolean;
    let vitesse: number;
    let piloteAutomatiquqe: boolean;
    let age: number;

    marque = "Audi";
    annee = 2010;
    proprio = "Lina Wendy";
    accident = false;
    vitesse = 6;
    piloteAutomatiquqe = false;
    age = 2020 - annee;

    console.log("marque :", marque);
    console.log("annee :", annee);
    console.log("proprio :", proprio);
    console.log("accident :", accident);
    console.log("vitesse :", vitesse);
    console.log("piloteAutomatiquqe :", piloteAutomatiquqe);
    console.log("age :", age);


  }

  private kotranaCondition2() {
    let nombre: number;
    nombre = 10;

    if (nombre < 10) {
      console.log("nombre inf à 10");
    }

    if (nombre == 10) {
      console.log("nombre == à 10");
      console.log("");
      let x: number;
      x = 10;
      console.log(x);
    }

    if (nombre > 10) {
      console.log("nombre sup à 10");
    }

    console.log("fin du programme !!!!");
  }
}
