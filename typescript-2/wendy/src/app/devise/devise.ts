import {Component} from "@angular/core";

@Component({
  selector : "devise",
  templateUrl : "devise.html"
})

export class Devise {
 public devises : string[] = ["Euro", "Dollar", "FrancCfa", "Livre", "Couronne", "Ariary", "Dinar", "Peso", "Roupie"];
 public monaie : string;

}
