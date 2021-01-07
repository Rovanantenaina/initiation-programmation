import {Component} from "@angular/core";

@Component({
  selector: "plusDeux",
  templateUrl: "plus-deux.html"
})

export class PlusDeux {
  public nombre: number;
  public plusDeux: number;
  public afficherResultat: boolean = false;

  public setPlusdeux(): void {
    this.plusDeux = this.nombre + 2;
    this.afficherResultat = true;
  }

  public masquerResultat(): void {
    this.afficherResultat = false;
  }
}
