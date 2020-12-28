import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span>TRAINEE</span>`
})


export class AppComponent {


  constructor() {
    let isMajeur: boolean;
    isMajeur = this.isMajeur(12);
    console.log(isMajeur);

    let multiplication: number;
    multiplication = this.multiplication(2, 5);
    console.log(2, "X", 5 , "= ", multiplication);

    let division : number;
    division = this.division(22 , 7);
    console.log(division);

    console.log("=======================================")

    let salutation : string;
    salutation = this.homeWork("Hello world!" +
      "voici un programme illustrant l'utilisation de cout");
    console.log("1-",salutation);

    let geometrie : number;
    geometrie = this.getGeometrie(12,24);
    let perimetre : number;
    perimetre = 12 + 24;
    console.log("2-Périmètre : ",perimetre);
    console.log("Surface : ", geometrie);

    let arithmetique : number;
    arithmetique = this.getArithmetique(4);
    let cinqsEntiers : number;
    cinqsEntiers = 0 + 1+ 2 + 3 + 4;
    let moyenne : number;
    moyenne = cinqsEntiers / 5;

    console.log("3-Moyenne :", moyenne);

    let prixTomates : number;
    prixTomates = this.getTva(4);
    let unKilo : number;
    unKilo = 1.33;
    let tomatesAchetes : number;
    tomatesAchetes = 4;
    let prixHt : number;
    prixHt = unKilo * tomatesAchetes;
    let tva : number;
    tva = (prixHt * 20) / 100;
    let prixTtc : number;
    prixTtc = prixHt + tva;
    console.log("4-Prix TTC du tomates achetés:", prixTtc);

  }
  private homeWork(introduction : string ) : string {
    return introduction;
  }

  private getGeometrie(largeur : number, longueur: number) : number {
    let perimetre : number;
    perimetre = largeur + longueur;
    let surface : number;
    surface = perimetre * 2;
    return surface;
  }

  private getArithmetique(nombre : number) : number {
    let cinqEntiers : number;
    cinqEntiers = 0 + 1 + 2 + 3 + nombre;
    let moyenne : number;
    moyenne = cinqEntiers / 5;
    return moyenne;

  }

  private getTva (nombre : number) : number {
    let unKilo : number;
    unKilo = 1.33;
    let tomatesAchetes : number;
    tomatesAchetes = nombre;
    let prixHt : number;
    prixHt = unKilo * tomatesAchetes;
    let tva : number;
    tva = (prixHt * 20) / 100;
    let prixTtc : number;
    prixTtc = prixHt + tva;
    return prixTtc;

  }




  private multiplication(nombre1: number, nombre2: number): number {
    let result: number;
    result = nombre1 * nombre2;
    return result;
  }
  private division(nombreA: number , nombreB: number) : number {
    let resultat : number;
    resultat = nombreA / nombreB;
    return resultat;
  }

  private getConvertion(celcius: number): number {
    let kelvin: number;
    kelvin = celcius + 273.15;
    return kelvin;
  }

  private isMajeur(age: number): boolean {
    let isMajeur: boolean;

    if (age >= 18) {
      isMajeur = true;
    } else {
      isMajeur = false;
    }
    return isMajeur;
  }


  private startFonctionParam(): void {

    this.direBonjour("Wendy");
    this.direBonjour("Elie");

    let anarana: string;
    anarana = "Rasoanaivo";
    this.direBonjour(anarana);

    let bjr: string;
    bjr = this.direBonjour1("Solofo");
    console.log(bjr);

    let somme: number;

    somme = this.plusDeux(20);
    console.log("Nombre plus deux:", somme);
  }

  private direBonjour(nom: string): void {
    console.log("Bonjour ", nom);
  }

  private direBonjour1(nom: string): string {
    return "Bonjour " + nom;
  }

  private plusDeux(nombre: number): number {
    let somme: number;
    somme = nombre + 2;
    return somme;
  }
}

class FonctionAvecReturnAvancee {

  constructor() {


  }




  private result1(): void {
    let nombre: number;
    nombre = this.getNumnber();
    if (nombre % 2 == 0) {
      console.log(nombre);
      console.log(nombre);
    } else {
      console.log(nombre);
    }
  }

  private result2(): void {
    let lettre: string;
    lettre = this.getLetter();
    console.error(lettre);
  }

  private result3(): void {
    let isSuccess: boolean;
    isSuccess = this.isSuccess();
    if (isSuccess) {
      console.log("succés");
    } else {
      console.log("échoués");
    }
  }

  private getNumnber(): number {
    let nombre: number;
    nombre = 18;
    return nombre;

  }

  private getLetter(): string {
    let lettre: string;
    lettre = "Bisou";
    return lettre;
  }

  private isSuccess(): boolean {
    let isSuccess: boolean;
    isSuccess = true;
    return isSuccess;
  }
}

class FonctionAvecReturn {
  constructor() {
    let greet: string;
    greet = this.direBonjour();
    console.log(greet);



  }


  private direBonjour(): string {
    return "Bonjour Wendy";
  }

  private fct3() {
    let nombre: number;
    nombre = 12;
    let nombre2: number;
    nombre2 = 14;

    nombre = nombre2;

    nombre = this.retourFct1();
    console.log(nombre);

    let lettre: string;

    lettre = this.retourFct2();

    console.log(lettre);
  }

  private fonction2(): void {
    console.log("2");
  }

  private fct1(): void {
    console.log("1");
    this.fonction2();
    return;
  }

  private retourFct1(): number {
    return 20;
  }

  private retourFct2(): string {
    let nom: string;
    nom = "Wendy";
    let prenom: string;
    prenom = "Xy";
    return nom;
  }

  private retourFct21(): string {
    let prenom: string;
    prenom = "Xy";
    return prenom;
  }
}

class Stockage {


  // attribut
  private nom: string;
  private civilite: string;
  private age: number;
  private coefficientH: number;
  private coefficientM: number;
  private coefficientm: number;

  saisirNom() {
    this.nom = "solofo";
  }

  changerNom() {
    this.nom = "nouveau nom";
  }

  lireNom() {
    console.log(this.nom);
  }

  homeworkCondition() {
    console.log("========Nombre========");
    let nombre: number;
    nombre = 21;


    if (nombre % 2 == 0) {
      console.log("Le nombre", nombre, "est pair");
    }
    if (nombre % 2 == 1) {
      console.log("Le nombre", nombre, "est impair");
    }

    console.log("=======Météo=======");

    let degre: number;
    degre = 50;

    if (degre <= -1) {
      console.log("Il neige",);
    }
    if (0 <= degre && degre <= 10) {
      console.log("Il fait froid",);
    }
    if (10 < degre && degre <= 18) {
      console.log("Il fait frais",);
    }
    if (degre > 18) {
      console.log("Il fait beau");
    }
    console.log("=======Devise========");

    let pays: string;
    pays = "usa";

    if (pays == "Madagascar" || pays == "madagascar") {
      console.log("La monaie utiliser est (Ariary)",);
    }

    if (pays == "France" || pays == "france") {
      console.log("La monaie utiliser est l'(Euro)");
    }

    if (pays == "USA" || pays == "usa") {
      console.log("La monaie utiliser est le (dollard)");
    }
  }

  homeworkConditionSuite() {

    let jour: string;
    jour = "Samedi";

    if (jour == "Samedi" || jour == "Dimanche" || jour == "samedi" || jour == "dimanche") {
      let x: number;
      console.log("On est en week-end", x);
    } else {
      console.log("On n'est pas en week-end");
    }

    let heure: string;
    heure = "19h:16";

    if ("01h:00" <= heure && heure < "12h:00") {
      console.log("Matin");
    }
    if ("12h:00" <= heure && heure < "18h:00") {
      console.log("Midi");
    }
    if ("18h:00 " <= heure && heure <= "24h:59") {
      console.log("Soir");
    }


  }

  pratiqueAttribut() {
    this.nom = "Rak";
    this.civilite = "H";
    this.age = 25;
    this.coefficientH = 25;
    this.coefficientM = 35;
    this.coefficientm = 10;

    if (this.civilite == "H") {
      console.log("Nom : Monsieur", this.nom);
      console.log("Age :", this.age);
      console.log("Coefficient :", this.coefficientH);
      console.log("Bonus :", this.coefficientH * this.age);
    } else if (this.civilite == "M") {
      console.log("Nom : Madame", this.nom);
      console.log("Age :", this.age);
      console.log("Coefficient :", this.coefficientM);
      console.log("Bonus :", this.age * this.coefficientM);
    } else if (this.civilite == "m") {
      console.log("Nom :", this.nom);
      console.log("Ag :", this.age);
      console.log("Coefficient :", this.coefficientm);
      console.log("Bonus :", this.age * this.coefficientm);
    } else {
      console.error("L'information entrée n'est pas dans les données");
    }

  }

  conditionPratique() {
    let civilite: string;
    let age: number;
    let coeffientH: number;
    let coeffientM: number;
    let coeffientm: number;
    let nom: string;

    coeffientH = 25;
    coeffientM = 35;
    coeffientm = 10;

    nom = "Rajako";
    civilite = "P";
    age = 25;


    if (civilite == "H") {
      console.log("Nom : Monsieur", nom);
      console.log("Age:", age, "ans");
      console.log("Coefficient:", coeffientH);
      console.log("Bonus:", age * coeffientH);
    } else if (civilite == "M") {
      console.log("Nom : Madame", nom);
      console.log("Age:", age, "ans");
      console.log("Coeffient:", coeffientM);
      console.log("Bonus:", age * coeffientM);
    } else if (civilite == "m") {
      console.log("Nom: Mademoiselle", nom);
      console.log("Age:", age, "ans");
      console.log("Coefficient:", coeffientm);
      console.log("Bonus:", age * coeffientm);
    } else {
      console.error("L'information entrée n'est pas dans les données");
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
