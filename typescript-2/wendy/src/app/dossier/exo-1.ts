import {Component} from "@angular/core";

@Component({
  selector: "exo1",
  templateUrl: "exo-1.html"
})
export class Exercice {

  public titre: string;
  public age : number;

  public isMajeur: boolean = false;

  public nomFruit: string;


  constructor() {
  }

  public setMajeur(): void {
    if (this.age >= 18) {
      this.isMajeur = true;
    } else  {
      this.isMajeur = false;
    }
  }

  public setTitle() : void {
    this.titre = "Titre";
  }

  public ajouterAge() : void {
    this.age = this.age + 10;
  }
  public renitialisationAge() : void {
    this.age = 0;
  }
}
