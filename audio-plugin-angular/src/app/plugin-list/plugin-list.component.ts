import { Component, OnInit, ElementRef } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-plugin-list",
  templateUrl: "./plugin-list.component.html",
  styleUrls: ["./plugin-list.component.css"]
})
export class PluginListComponent implements OnInit {
  value;
  plugins = [1, 2, 3, 4, 5];

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

  getAllPlugin() {
    var leadsRef = this.db.database.ref();
    leadsRef.on("value", function(snapshot) {
      snapshot.forEach(value => {
        console.log("test");

        console.log(value.val());
      });
    });
  }
}
