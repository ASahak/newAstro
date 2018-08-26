import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Oceans} from "../models/ocean";
import {OceanSee} from "../models/oceanSee";
import {OceanSeeCoc} from "../models/oceanSeeCoc";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
@Injectable()
export class OceanResetService {
  recetCollectionOceans: AngularFirestoreCollection<Oceans>;
  recetDocOceans: AngularFirestoreDocument<Oceans>;
  oceans: Observable<Oceans[]>;
  ocean: Observable<Oceans>;

  recetCollectionOceanSee: AngularFirestoreCollection<OceanSee>;
  recetDocOceanSee: AngularFirestoreDocument<OceanSee>;
  sees: Observable<OceanSee[]>;
  see: Observable<OceanSee>;

  recetCollectionOceanSeeCoc: AngularFirestoreCollection<OceanSeeCoc>;
  recetDocOceanSeeCoc: AngularFirestoreDocument<OceanSeeCoc>;
  seescoc: Observable<OceanSeeCoc[]>;
  seecoc: Observable<OceanSeeCoc>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.recetCollectionOceans = this.afs.collection("Oceans", ref => ref.orderBy('publication'))
    this.recetCollectionOceanSee = this.afs.collection("OceanSee", ref => ref.orderBy('publication'))
    this.recetCollectionOceanSeeCoc = this.afs.collection("OceanSeeCoc", ref => ref.orderBy('publication'))
   }

   // Oceans
      addNewOceans(ocean:Oceans){
           this.recetCollectionOceans.add(ocean);
       }
       getAllRecetOceans():Observable<Oceans[]>{
           this.oceans = this.recetCollectionOceans.snapshotChanges()
           .map(changes => {
               return changes.map(action =>{
                   const data = action.payload.doc.data() as Oceans;
                   data.id = action.payload.doc.id;
                   return data;
               })
           })
           return this.oceans;
       }
       deleteRecetOceans(id){
         this.recetDocOceans = this.afs.doc(`Oceans/${id.id}`)
         this.recetDocOceans.delete();
       }
       getOneRecetOceans(idRecet:string){
           this.recetDocOceans = this.afs.doc<Oceans>(`Oceans/${idRecet}`);
           this.ocean = this.recetDocOceans.snapshotChanges().map(action =>{
               if(action.payload.exists === false){
                   return null;
               }
               else{
                   const data = action.payload.data() as Oceans;
                   data.id = action.payload.id;
                   return data;
               }
           })
           return this.ocean;
       }
       updateRecetOceans(ocean:Oceans){
           this.recetDocOceans = this.afs.doc(`Oceans/${ocean.id}`)
           this.recetDocOceans.update(ocean)
       }
       // Oceans

       // OceanSee
          addNewOceanSee(see:OceanSee){
               this.recetCollectionOceanSee.add(see);
           }
           getAllRecetOceanSee():Observable<OceanSee[]>{
               this.sees = this.recetCollectionOceanSee.snapshotChanges()
               .map(changes => {
                   return changes.map(action =>{
                       const data = action.payload.doc.data() as OceanSee;
                       data.id = action.payload.doc.id;
                       return data;
                   })
               })
               return this.sees;
           }
           deleteRecetOceanSee(id){
             this.recetDocOceanSee = this.afs.doc(`OceanSee/${id.id}`)
             this.recetDocOceanSee.delete();
           }
           getOneRecetOceanSee(idRecet:string){
               this.recetDocOceanSee = this.afs.doc<OceanSee>(`OceanSee/${idRecet}`);
               this.see = this.recetDocOceanSee.snapshotChanges().map(action =>{
                   if(action.payload.exists === false){
                       return null;
                   }
                   else{
                       const data = action.payload.data() as OceanSee;
                       data.id = action.payload.id;
                       return data;
                   }
               })
               return this.see;
           }
           updateRecetOceanSee(see:OceanSee){
               this.recetDocOceanSee = this.afs.doc(`OceanSee/${see.id}`)
               this.recetDocOceanSee.update(see)
           }
           // OceansSee

           // OceanSeeCoc
              addNewOceanSeeCoc(seecoc:OceanSeeCoc){
                   this.recetCollectionOceanSeeCoc.add(seecoc);
               }
               getAllRecetOceanSeeCoc():Observable<OceanSeeCoc[]>{
                   this.seescoc = this.recetCollectionOceanSeeCoc.snapshotChanges()
                   .map(changes => {
                       return changes.map(action =>{
                           const data = action.payload.doc.data() as OceanSeeCoc;
                           data.id = action.payload.doc.id;
                           return data;
                       })
                   })
                   return this.seescoc;
               }
               deleteRecetOceanSeeCoc(id){
                 this.recetDocOceanSeeCoc = this.afs.doc(`OceanSeeCoc/${id.id}`)
                 this.recetDocOceanSeeCoc.delete();
               }
               getOneRecetOceanSeeCoc(idRecet:string){
                   this.recetDocOceanSeeCoc = this.afs.doc<OceanSeeCoc>(`OceanSeeCoc/${idRecet}`);
                   this.seecoc = this.recetDocOceanSeeCoc.snapshotChanges().map(action =>{
                       if(action.payload.exists === false){
                           return null;
                       }
                       else{
                           const data = action.payload.data() as OceanSeeCoc;
                           data.id = action.payload.id;
                           return data;
                       }
                   })
                   return this.seecoc;
               }
               updateRecetOceanSeeCoc(see:OceanSeeCoc){
                   this.recetDocOceanSeeCoc = this.afs.doc(`OceanSeeCoc/${see.id}`)
                   this.recetDocOceanSeeCoc.update(see)
               }
               // OceansSeeCoc

}
