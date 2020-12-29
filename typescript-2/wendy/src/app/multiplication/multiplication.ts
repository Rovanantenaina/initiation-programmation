import {Component} from "@angular/core";

@Component({
  selector : "multiplication",
  templateUrl : "multiplication.htlm"
})

export class Multiplication{
  public nombre1 : number;
  public nombre2 : number;
  public total : number;

  public resultat () : void {
    this.total = this.nombre1 * this.nombre2;
  }

}
