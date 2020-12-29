import {Component} from "@angular/core";

@Component({
  selector: "pair-impair",
  templateUrl: "pair-impair.html"
})
export class PairImpair {
  public nombre: number;
  public pair: string;

  public checkNombre(): void {
    if (this.nombre % 2 == 0) {
      this.pair = "PAIR";
    } else {
      this.pair = "IMPAIR";
    }
  }
}
