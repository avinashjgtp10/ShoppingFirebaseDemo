import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingItems: FirebaseListObservable<any>;
  newItem = "";
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = firebaseProvider.getShoppingItems();
  }

  addItem(){
    this.firebaseProvider.addItem(this.newItem);
  }
  removeItem(id){
    this.firebaseProvider.removeItem(id);
  }

}
