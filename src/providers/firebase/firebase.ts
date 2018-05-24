import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public firebase: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getShoppingItems() {
    return this.firebase.list('/shoppingItems/');
  }

  addItem(name) {
    this.firebase.list('/shoppingItems/').push(name);
  }

  removeItem(id) {
    this.firebase.list('/shoppingItems/').remove(id);
  }


}
