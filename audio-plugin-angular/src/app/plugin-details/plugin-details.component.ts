import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { PluginAudio } from '../plugin-audio';
import { timeout } from 'q';


@Component({
  selector: "app-plugin-details",
  templateUrl: "./plugin-details.component.html",
  styleUrls: ["./plugin-details.component.css"]
})
export class PluginDetailsComponent implements OnInit {

  id: string;
  db: AngularFireDatabase;
  plugin: PluginAudio;
  load = false;
  constructor(private route: ActivatedRoute,   db: AngularFireDatabase) { 
    this.db = db;
  }

  ngOnInit() {
    
    this.getData();
    
    

  }

  getData(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      this.db.database.ref("list-plugin/").child(this.id).on("value",(snpt) => {
        var elmt = snpt.toJSON()
        this.plugin = new PluginAudio(elmt["nomPlugin"],elmt["description"],elmt["nomCreateur"],elmt["key"],elmt["tag1"],elmt["tag2"],elmt["image"]);
        this.load = true;
      });
    });
  }

  ngOnDestroy() {
   
  }
}
