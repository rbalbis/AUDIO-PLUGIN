import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { PluginAudio } from '../plugin-audio';
import { timeout } from 'q';
import { AuthentificationService } from "./../services/authentification.service";
import { Location } from '@angular/common';



@Component({
  selector: "app-plugin-details",
  templateUrl: "./plugin-details.component.html",
  styleUrls: ["./plugin-details.component.css"]
})
export class PluginDetailsComponent implements OnInit {

  connected : boolean;
  isEditable : boolean;
  id: string;
  db: AngularFireDatabase;
  plugin: PluginAudio;
  load = false;
  displayEdit = false;
  constructor(private route: ActivatedRoute,   db: AngularFireDatabase,
    private authentificationService: AuthentificationService,
    private location: Location) { 
    this.db = db;
  }

  ngOnInit() {
    
    this.getData();
  
      this.connected = this.authentificationService.connected;
      this.isEditable = (this.plugin && (this.authentificationService.login === this.plugin.nomCreateur) || ("admin" === this.authentificationService.login));
    
    

  }

  getData(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      this.db.database.ref("list-plugin/").child(this.id).on("value",(snpt) => {
        var elmt = snpt.toJSON()
        this.plugin = new PluginAudio(elmt["nomPlugin"],elmt["description"],elmt["nomCreateur"],elmt["key"],elmt["tag1"],elmt["tag2"],elmt["image"]);
        this.load = true;
        this.isEditable = (this.plugin && (this.authentificationService.login === this.plugin.nomCreateur) || ("admin" === this.authentificationService.login));
      });
    });
  }

  delete(){
    this.db.database.ref("list-plugin/").child(this.id).remove();
    window.alert("Plugin supprimé avec succes ! ");
    this.location.back();

  }

  toggleEdit(){
    this.displayEdit = !this.displayEdit;
  }

}
