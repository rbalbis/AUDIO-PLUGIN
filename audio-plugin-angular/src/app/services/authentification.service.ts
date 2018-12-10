import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  login;
  password;
  connected;
  pluginsId = [];

  constructor() {}

  connection(login, password): boolean {
    if (
      (login == "admin" && password == "root") ||
      (login == "geoffrey" && password == "password") ||
      (login == "robin" && password == "password") ||
      (login == "michel" && password == "password")
    ) {
      this.login = login;
      this.password = password;
      this.connected = true;
      return true;
    }
    return false;
  }

  addPlugin(pluginId) {
    this.pluginsId.push(pluginId);
  }

  logout() {
    this.connected = false;
  }
}
