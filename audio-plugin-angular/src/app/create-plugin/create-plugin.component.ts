import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-plugin',
  templateUrl: './create-plugin.component.html',
  styleUrls: ['./create-plugin.component.css']
})
export class CreatePluginComponent implements OnInit {

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  db: AngularFireDatabase;


  constructor(db: AngularFireDatabase) {
    
    this.db = db;
  }

  save(newName : string, newCreateur: string, newDesc: string) {
    this.db.database.ref(this.db.createPushId()).set({"nomPlugin": newName, "nomCreateur":newCreateur, "description": newDesc});
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }

  ngOnInit() {
  }

}
