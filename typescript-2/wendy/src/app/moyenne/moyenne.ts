import {Component} from "@angular/core";

@Component({
  selector: "moyenne",
  templateUrl: "moyenne.html"
})

export class Moyenne {
  public nombre1: number;
  public nombre2: number;
  public nombre3: number;
  public nombre4: number;
  public nombre5: number;
  public moyenne: number;

  public getSomme(): number {
    let total: number = this.nombre1 + this.nombre2 + this.nombre3 + this.nombre4 + this.nombre5;
    return total;
  }

  public setMoyenne(): void {
    let somme: number = this.getSomme();
    this.moyenne = somme / 5;
  }

}

