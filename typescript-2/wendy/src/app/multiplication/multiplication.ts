import {Component} from "@angular/core";

@Component({
  selector : "multiplication",
  templateUrl : "multiplication.html"
})

export class Multiplication {
  public nombre1 : number;
  public nombre2 : number;
  public resultat : number;

  public setResultat () : void {
    this.resultat = this.nombre1 * this.nombre2;
  }

}
