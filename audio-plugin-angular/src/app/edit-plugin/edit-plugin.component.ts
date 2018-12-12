import { Component, OnInit, Input } from '@angular/core';
import { AuthentificationService } from "./../services/authentification.service";
import { AngularFireDatabase, AngularFireObject, } from "@angular/fire/database";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { PluginAudio } from '../plugin-audio';

@Component({
  selector: 'app-edit-plugin',
  templateUrl: './edit-plugin.component.html',
  styleUrls: ['./edit-plugin.component.css']
})
export class EditPluginComponent implements OnInit {

  @Input() plugin: PluginAudio;

  
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  connected;
  imageName: string;
  chargementImage: Observable<number>;
  imageUploaded: boolean;
  constructor(
    private db: AngularFireDatabase,
    private authentificationService: AuthentificationService,
    private afStorage: AngularFireStorage
  ) {
  }

  ngOnInit() {
    this.connected = this.authentificationService.connected;

  }

  save(newName: string, newDesc: string, tags: string) {
    var tagList = tags.split(";");
    var key = this.db
      .database
      .ref("list-plugin/" + this.plugin.key)
      .update({
        nomPlugin: newName,
        description: newDesc,
        tag1: (tagList[0] ? tagList[0] : null),
        tag2: (tagList[1] ? tagList[1] : null),
        image: (this.imageName? this.imageName : this.plugin.image)
      });

    
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
      window.alert("Plugin mis a jour avec succes ! ");

      }
    );




  }


}
