import {Component} from "@angular/core";

@Component({
  selector : "division",
  templateUrl : "division.html"
})

export class Division {
  public dividende : number;
  public diviseur : number;
  public quotient : number;

  public getCalcul () : void {
    let resultat = this.dividende / this.diviseur;
    this.quotient  = Math.round(resultat * 100) / 100;
  }

}
