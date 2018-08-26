import { Injectable } from '@angular/core';
import {AppreciatedTools} from "../models/Appreciated";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/observable";
import * as firebase from 'firebase';
@Injectable()
export class ApprecitedResetService {
  public refUs;
  recetCollectionAppreciated: AngularFirestoreCollection<AppreciatedTools>;
  recetDocAppreciated: AngularFirestoreDocument<AppreciatedTools>;
  appreciateds: Observable<AppreciatedTools[]>;
  appreciated: Observable<AppreciatedTools>;
  constructor(private afs: AngularFirestore) {
    this.recetCollectionAppreciated = this.afs.collection("Appreciated", ref => ref.orderBy('publication'));
    // this.afs.collection("Appreciated") ssenc stanum es collectionyt
    //   .doc('AppreciatedCount')
    //   .ref
    //   .get().then(function(doc) {
    //       if (doc.exists) {
    //         console.log(doc.data()) 
    //       } else {
    //           console.log("No such document!");
    //       }
    //   }).catch(function(error) {
    //       console.log("Error getting document:", error);
    //   });
   }
   addNewAppreciated(appreciated:AppreciatedTools){
    this.recetCollectionAppreciated.add(appreciated)
  }
  getAllUsers():Observable<AppreciatedTools[]>{
    this.appreciateds = this.recetCollectionAppreciated.snapshotChanges()
    .map(changes => {
        return changes.map(action =>{
            const data = action.payload.doc.data() as AppreciatedTools;
            // data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.appreciateds;

  }
}
