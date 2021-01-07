import {Component} from "@angular/core";

@Component({
  selector : "majeur",
  templateUrl : "majeur.html"
})
export class VerificationAge {
  public age : number;
  public majeurMineur : string;

  public majeur () : void {
    if (this.age>= 18) {
      this.majeurMineur = "Majeur"
    } else {
      this.majeurMineur = "Mineur"
    }
  }
}
