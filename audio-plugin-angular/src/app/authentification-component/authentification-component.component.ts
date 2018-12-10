import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit } from "@angular/core";
import { log } from "util";

@Component({
  selector: "app-authentification-component",
  templateUrl: "./authentification-component.component.html",
  styleUrls: ["./authentification-component.component.css"]
})
export class AuthentificationComponentComponent implements OnInit {
  login;
  password;
  constructor(private authentificationService: AuthentificationService) {}

  ngOnInit() {}

  connection() {
    console.log(this.login);
    console.log(this.password);
    let connected = this.authentificationService.connection(
      this.login,
      this.password
    );
    if (connected) {
      console.log("OK");
    } else {
      console.log("nope");
    }
  }
}
