import {Component} from "@angular/core";

@Component({
  selector : "devise",
  templateUrl : "devise.html"
})

export class Devise {
  public euro : Array<string> = ["Allemagne", "Autriche", "Andorre", "Belgique", "Chypre"
    , "Espagne", "Estonie", "Finlande", "France", "Saint Marin", "Monaco", "Vatican", "Grèce", "Irlande",
    "Italie", "Lettonie", "Lituanie", "Luxembourg", "Malte", "Pays-Bas",
    "Portugal", "Slovaquie", "Slovénie"];

  public dollar : string[] = ["Bahamas", "Barbade", "Belize", "Bermude", "Cambodge",
    "Costa Rica", "Équateur", "El Salvador", "États fédérés de Micronésie", "Haïti",
    "Honduras", "Irak", "Liban", "Libéria", "Iles Marshall", "Corée du Nord", "Palau",
    "Panama", "Somalie", "Timor-Leste", "États Unis", "Uruguay", "Zimbabwe", "Fidji", "Grenadines",
  "Belize", "Canada", "Hong Kong", "Dominique", "Australie", "Iles Caïmans", "Iles Cook", "Iles Salomon", "Surinam",
  "Taïwan"];

  public francCfa : Array<string> = ["Bénin", "Burkina Faso", "Côte d'Ivoire",
    "Guinée-Bissau", "Mali", "Niger", "Sénégal", "Togo"];

  public livre : string[] = ["Royaume-Unis", "Angleterre", "Ecosse", "Paus de Galles",
  "Jersey", "Sainte-Hélène", "Gibraltar", "Irlande de Nord", "Île de Man", "Guernesey"];

  public ariary : Array<string> = ["Madagascar"];

  public couronne : string[] = ["Bohême-Moravie", "Danemark", "Estonie", "Groeland", "Hongrie",
  "Iles Féroé", "Islande", "Norvège", "République Tchèque", "Slovaquie", "Suède", "Tchécoslovaquie"];

  public dinar : Array<string> = ["Algérie", "Bahreïn", "Irak", "Jordanie", "Koweït", "Libye",
  "Tunisie", "Youqoslavie"];

  public peso : string[] = ["Argentine", "Chili", "Colombie", "Cuba", "Guinée-Bissau", "Mexique",
  "Philippines", "République Dominicaine", "Uruguay"];

  public roupie : string[] = ["Ceylan", "Inde", "Maurice", "Népal", "Pakistan", "Seychelles", "Sri Lanka"];

}
