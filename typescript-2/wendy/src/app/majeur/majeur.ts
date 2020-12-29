import {Component} from "@angular/core";

@Component({
  selector : "majeur",
  templateUrl : "majeur.html"
})
export class VerificationAge {
  public age : number;
  public verifier : string;

  public majeur () : void {
    if (this.age>= 18) {
      this.verifier = "Majeur"
    } else {
      this.verifier = "Mineur"
    }
  }
}
