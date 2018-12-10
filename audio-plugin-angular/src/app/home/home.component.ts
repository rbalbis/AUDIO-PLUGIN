import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  connected = false;
  constructor(public authentificationService: AuthentificationService) {
    this.connected = this.authentificationService.connected;
    console.log(this.connected);
  }

  ngOnInit() {}

  ngDoCheck() {
    this.connected = this.authentificationService.connected;
  }
}
