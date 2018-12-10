import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-create-plugin",
  templateUrl: "./create-plugin.component.html",
  styleUrls: ["./create-plugin.component.css"]
})
export class CreatePluginComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  db: AngularFireDatabase;
  connected;

  constructor(
    db: AngularFireDatabase,
    private authentificationService: AuthentificationService
  ) {
    this.connected = this.authentificationService.connected;
    this.db = db;
  }

  ngOnInit() {}


  save(newName: string, newCreateur: string, newDesc: string, tags: string, newImage: string) {
    var tagList = tags.split(";");
    var key = this.db
      .database
      .ref("list-plugin")
      .push({
        nomPlugin: newName,
        nomCreateur: newCreateur,
        description: newDesc,
        tag1: (tagList[0] ? tagList[0] : null) , tag2: (tagList[1] ? tagList[1] : null),
        image : newImage
      }).key;

    this.db.database.ref("list-plugin/"+ key).update({key: key});
    this.authentificationService.addPlugin(key);

  }

   
  }


