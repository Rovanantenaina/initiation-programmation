import {Component} from "@angular/core";

@Component({
  selector : "geometrie",
  templateUrl : "geometrie.html"
})

export class Geometrie {
  public largeur : number;
  public longueur : number;
  public perimetre : number;
  public  surface : number;

  public setPerimetre () : void {
    this.perimetre = this.largeur + this.longueur;
  }
  public getSurface () : void {
    this.surface = this.longueur * this.largeur;
  }
}
