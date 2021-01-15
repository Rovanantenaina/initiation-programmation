import {Component} from "@angular/core";

@Component({
  selector: "array-skills",
  templateUrl: "array-skills.html"
})
export class ArraySkills {

  public listeNom: Array<string> = ["rakoto", "solofo", "rabre", "zavana", "rajako"];
  public listeAge: number[] = [1, 2, 23, 98];

  public listeAkizy: string[] = [
    "dom", "wily", "pinocio", "casim", "aladin"
  ];


  public akizy: string;
}
