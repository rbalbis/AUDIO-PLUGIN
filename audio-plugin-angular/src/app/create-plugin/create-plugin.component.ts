import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireObject, } from "@angular/fire/database";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";

@Component({
  selector: "app-create-plugin",
  templateUrl: "./create-plugin.component.html",
  styleUrls: ["./create-plugin.component.css"]
})
export class CreatePluginComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  //db: AngularFireDatabase;
  connected;
  imageName: string;
  chargementImage: Observable<number>;
  imageUploaded: boolean;

  constructor(
    private db: AngularFireDatabase,
    private authentificationService: AuthentificationService,
    private afStorage: AngularFireStorage
  ) {
    //this.db = db;
  }

  ngOnInit() {
    this.connected = this.authentificationService.connected;

  }


  save(newName: string, newDesc: string, tags: string) {
    var tagList = tags.split(";");
    var key = this.db
      .database
      .ref("list-plugin")
      .push({
        nomPlugin: newName,
        nomCreateur: this.authentificationService.login,
        description: newDesc,
        tag1: (tagList[0] ? tagList[0] : null), 
        tag2: (tagList[1] ? tagList[1] : null),
        image: (this.imageName ? this.imageName : null)
      }).key;

    this.db.database.ref("list-plugin/" + key).update({ key: key });
    this.authentificationService.addPlugin(key);
  }

  upload(event) {

    // create a random id
    this.imageName = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    var ref = this.afStorage.ref(this.imageName);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    var task = ref.put(event.target.files[0]);


    task.then(
      () => ref.getDownloadURL().subscribe(
        resp => {

          this.imageName = resp;
        }
      )
    );


    this.chargementImage = task.percentageChanges();

    this.chargementImage.subscribe(
      resp => { },
      err => { },
      () => {
        this.chargementImage = null;
        this.imageUploaded = true;
    window.alert("Plugin creer avec succes ! ");
        
      }
    );

    


  }


}


