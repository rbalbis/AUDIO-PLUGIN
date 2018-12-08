import { AuthentificationService } from "./../services/authentification.service";
import { Component, OnInit, ElementRef } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";
import { PluginAudio } from "../plugin-audio";
import { NgForm } from "@angular/forms";
import { log } from "util";

@Component({
  selector: "app-plugin-list",
  templateUrl: "./plugin-list.component.html",
  styleUrls: ["./plugin-list.component.css"]
})
export class PluginListComponent implements OnInit {
  value;
  plugins: PluginAudio[];
  srchTerm = "";

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  db: AngularFireDatabase;
  constructor(
    private elementRef: ElementRef,
    db: AngularFireDatabase,
    private authentificationService: AuthentificationService
  ) {
    this.db = db;
  }

  ngOnInit() {
    this.getAllPlugin();
    console.log(this.authentificationService.connected);
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      "#f6f6f6";
  }

  /* getFilteredPlugin(filtre : string){
    this.plugins = [];
    var ref = this.db.list('list-plugin',ref => ref.orderByChild('tag1').startAt(filtre).endAt(filtre+"\uf8ff")).valueChanges().subscribe(
      res => {
        console.log(res);
        res.forEach( elmt => {
          this.plugins.push(<PluginAudio>elmt);
        }

        )
      }
    )

    var ref = this.db.list('list-plugin',ref => ref.orderByChild('tag2').startAt(filtre).endAt(filtre+"\uf8ff")).valueChanges().subscribe(
      res => {
        console.log(res);
        res.forEach( elmt => {
          if(this.plugins.map(p => {return p.}) indexOf(elmt) === -1){
            console.log(elmt);
            console.log(this.plugins);
            
            
          this.plugins.push(<PluginAudio>elmt);
          }
        }

        )
      }
    )

  } */

  getAllPlugin() {
    this.plugins = [];
    this.db
      .list("list-plugin")
      .valueChanges()
      .subscribe(res => {
        res.forEach(elmt => {
          var newPlugin = new PluginAudio(
            elmt["nomPlugin"],
            elmt["description"],
            elmt["nomCreateur"],
            elmt["key"],
            elmt["tag1"],
            elmt["tag2"]
          );
          this.plugins.push(newPlugin);
        });
      });
  }
}
