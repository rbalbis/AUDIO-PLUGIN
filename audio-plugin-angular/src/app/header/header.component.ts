import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public authentificationService: AuthentificationService,
    public routes: Router
  ) {}

  ngOnInit() {}

  deconnexion() {
    this.authentificationService.logout();
    this.routes.navigate(["home"]);
  }
}
