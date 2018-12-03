import { Component, OnInit, ElementRef } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";
import { PluginAudio } from "../plugin-audio";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-plugin-list",
  templateUrl: "./plugin-list.component.html",
  styleUrls: ["./plugin-list.component.css"]
})
export class PluginListComponent implements OnInit {
  value;
  plugins = [];
  srchTerm: string;

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  db: AngularFireDatabase;
  constructor(private elementRef: ElementRef, db: AngularFireDatabase) {
    this.db = db;
  }

  ngOnInit() {
    this.getAllPlugin();
      }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      "#f6f6f6";
  }

  onSearch(form: NgForm){
    console.log(form.value.srchTerm);
    
    this.getFilteredPlugin(form.value.srchTerm));
  }

  getFilteredPlugin(filtre : string){
    this.plugins = [];
    var ref = this.db.list('list-plugin',ref => ref.orderByChild('tag1').equalTo(filtre)).valueChanges().subscribe(
      res => {
        console.log(res);
        res.forEach( elmt => {
          this.plugins.push(<PluginAudio>elmt);
        }

        )
      }
    )

    var ref = this.db.list('list-plugin',ref => ref.orderByChild('tag2').equalTo(filtre)).valueChanges().subscribe(
      res => {
        console.log(res);
        res.forEach( elmt => {
          this.plugins.push(<PluginAudio>elmt);
        }

        )
      }
    )

  }

  

  getAllPlugin(){
    this.db.list('list-plugin').valueChanges().subscribe(
      res => {
        console.log(res[0]);
        res.forEach( (elmt) => {
          this.plugins.push(<PluginAudio>elmt);
        })
        
        console.log(this.plugins);
        
      }
    )
  }
}
