import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Strait} from "../models/Strait";
import {FirstPopulation} from "../models/FirstPopulation";
import {FirstMountain} from "../models/FirstMountain";
import {FirstArea} from "../models/FirstArea";
import {Dependent} from "../models/Dependent";
import {Dictionary} from "../models/Dictionary";
import {Interesing} from "../models/Interesing";
import {Aglomeration} from "../models/Aglomeration";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
@Injectable()
export class GeoMixResetService {
  recetCollectionStrait: AngularFirestoreCollection<Strait>;
  recetDocStrait: AngularFirestoreDocument<Strait>;
  straits: Observable<Strait[]>;
  strait: Observable<Strait>;

  recetCollectionFirstPopulation: AngularFirestoreCollection<FirstPopulation>;
  recetDocFirstPopulation: AngularFirestoreDocument<FirstPopulation>;
  frtpops: Observable<FirstPopulation[]>;
  frtpop: Observable<FirstPopulation>;

  recetCollectionFirstArea: AngularFirestoreCollection<FirstArea>;
  recetDocFirstArea: AngularFirestoreDocument<FirstArea>;
  frtareas: Observable<FirstArea[]>;
  frtarea: Observable<FirstArea>;

  recetCollectionFirstMountain: AngularFirestoreCollection<FirstMountain>;
  recetDocFirstMountain: AngularFirestoreDocument<FirstMountain>;
  frtmounts: Observable<FirstMountain[]>;
  frtmount: Observable<FirstMountain>;

  recetCollectionDependent: AngularFirestoreCollection<Dependent>;
  recetDocDependent: AngularFirestoreDocument<Dependent>;
  dependents: Observable<Dependent[]>;
  dependent: Observable<Dependent>;

  recetCollectionAglomeration: AngularFirestoreCollection<Aglomeration>;
  recetDocAglomeration: AngularFirestoreDocument<Aglomeration>;
  aglomerations: Observable<Aglomeration[]>;
  aglomeration: Observable<Aglomeration>;

  recetCollectionDictionary: AngularFirestoreCollection<Dictionary>;
  recetDocDictionary: AngularFirestoreDocument<Dictionary>;
  dics: Observable<Dictionary[]>;
  dic: Observable<Dictionary>;

  recetCollectionInteresing: AngularFirestoreCollection<Interesing>;
  recetDocInteresing: AngularFirestoreDocument<Interesing>;
  ints: Observable<Interesing[]>;
  int: Observable<Interesing>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.recetCollectionStrait = this.afs.collection("Strait", ref => ref.orderBy('publication'))
    this.recetCollectionFirstPopulation = this.afs.collection("FirstPopulation", ref => ref.orderBy('publication'))
    this.recetCollectionFirstArea = this.afs.collection("FirstArea", ref => ref.orderBy('publication'))
    this.recetCollectionFirstMountain = this.afs.collection("FirstMountain", ref => ref.orderBy('high'))
    this.recetCollectionDependent = this.afs.collection("Dependent", ref => ref.orderBy('publication'))
    this.recetCollectionAglomeration = this.afs.collection("Aglomeration", ref => ref.orderBy('publication'))
    this.recetCollectionDictionary = this.afs.collection("Dictionary", ref => ref.orderBy('publication'))
    this.recetCollectionInteresing = this.afs.collection("Interesing", ref => ref.orderBy('publication'))
  }


     // Strait
        addNewStrait(strait:Strait){
             this.recetCollectionStrait.add(strait);
         }
         getAllRecetStrait():Observable<Strait[]>{
             this.straits = this.recetCollectionStrait.snapshotChanges()
             .map(changes => {
                 return changes.map(action =>{
                     const data = action.payload.doc.data() as Strait;
                     data.id = action.payload.doc.id;
                     return data;
                 })
             })
             return this.straits;
         }
         deleteRecetStrait(id){
           this.recetDocStrait = this.afs.doc(`Strait/${id.id}`)
           this.recetDocStrait.delete();
         }
         getOneRecetStrait(idRecet:string){
             this.recetDocStrait = this.afs.doc<Strait>(`Strait/${idRecet}`);
             this.strait = this.recetDocStrait.snapshotChanges().map(action =>{
                 if(action.payload.exists === false){
                     return null;
                 }
                 else{
                     const data = action.payload.data() as Strait;
                     data.id = action.payload.id;
                     return data;
                 }
             })
             return this.strait;
         }
         updateRecetStrait(strait:Strait){
             this.recetDocStrait = this.afs.doc(`Strait/${strait.id}`)
             this.recetDocStrait.update(strait)
         }
         // Strait

         // FirstPopulation
        addNewFirstPopulation(frtpop:FirstPopulation){
             this.recetCollectionFirstPopulation.add(frtpop);
         }
         getAllRecetFirstPopulation():Observable<FirstPopulation[]>{
             this.frtpops = this.recetCollectionFirstPopulation.snapshotChanges()
             .map(changes => {
                 return changes.map(action =>{
                     const data = action.payload.doc.data() as FirstPopulation;
                     data.id = action.payload.doc.id;
                     return data;
                 })
             })
             return this.frtpops;
         }
         deleteRecetFirstPopulation(id){
           this.recetDocFirstPopulation = this.afs.doc(`FirstPopulation/${id.id}`)
           this.recetDocFirstPopulation.delete();
         }
         getOneRecetFirstPopulation(idRecet:string){
             this.recetDocFirstPopulation = this.afs.doc<FirstPopulation>(`FirstPopulation/${idRecet}`);
             this.frtpop = this.recetDocFirstPopulation.snapshotChanges().map(action =>{
                 if(action.payload.exists === false){
                     return null;
                 }
                 else{
                     const data = action.payload.data() as FirstPopulation;
                     data.id = action.payload.id;
                     return data;
                 }
             })
             return this.frtpop;
         }
         updateRecetFirstPopulation(frtpop:FirstPopulation){
             this.recetDocFirstPopulation = this.afs.doc(`FirstPopulation/${frtpop.id}`)
             this.recetDocFirstPopulation.update(frtpop)
         }
         // FirstPopulation



   // FirstArea
      addNewFirstArea(frtarea:FirstArea){
           this.recetCollectionFirstArea.add(frtarea);
       }
       getAllRecetFirstArea():Observable<FirstArea[]>{
           this.frtareas = this.recetCollectionFirstArea.snapshotChanges()
           .map(changes => {
               return changes.map(action =>{
                   const data = action.payload.doc.data() as FirstArea;
                   data.id = action.payload.doc.id;
                   return data;
               })
           })
           return this.frtareas;
       }
       deleteRecetFirstArea(id){
         this.recetDocFirstArea = this.afs.doc(`FirstArea/${id.id}`)
         this.recetDocFirstArea.delete();
       }
       getOneRecetFirstArea(idRecet:string){
           this.recetDocFirstArea = this.afs.doc<FirstArea>(`FirstArea/${idRecet}`);
           this.frtarea = this.recetDocFirstArea.snapshotChanges().map(action =>{
               if(action.payload.exists === false){
                   return null;
               }
               else{
                   const data = action.payload.data() as FirstArea;
                   data.id = action.payload.id;
                   return data;
               }
           })
           return this.frtarea;
       }
       updateRecetFirstArea(frtarea:FirstArea){
           this.recetDocFirstArea = this.afs.doc(`FirstArea/${frtarea.id}`)
           this.recetDocFirstArea.update(frtarea)
       }
       // FirstArea

       // FirstMountain
          addNewFirstMountain(frtmount:FirstMountain){
               this.recetCollectionFirstMountain.add(frtmount);
           }
           getAllRecetFirstMountain():Observable<FirstMountain[]>{
               this.frtmounts = this.recetCollectionFirstMountain.snapshotChanges()
               .map(changes => {
                   return changes.map(action =>{
                       const data = action.payload.doc.data() as FirstMountain;
                       data.id = action.payload.doc.id;
                       return data;
                   })
               })
               return this.frtmounts;
           }
           deleteRecetFirstMountain(id){
             this.recetDocFirstMountain = this.afs.doc(`FirstMountain/${id.id}`)
             this.recetDocFirstMountain.delete();
           }
           getOneRecetFirstMountain(idRecet:string){
               this.recetDocFirstMountain = this.afs.doc<FirstMountain>(`FirstMountain/${idRecet}`);
               this.frtmount = this.recetDocFirstMountain.snapshotChanges().map(action =>{
                   if(action.payload.exists === false){
                       return null;
                   }
                   else{
                       const data = action.payload.data() as FirstMountain;
                       data.id = action.payload.id;
                       return data;
                   }
               })
               return this.frtmount;
           }
           updateRecetFirstMountain(frtmount:FirstMountain){
               this.recetDocFirstMountain = this.afs.doc(`FirstMountain/${frtmount.id}`)
               this.recetDocFirstMountain.update(frtmount)
           }
           // FirstMountain


           // Dependent
        addNewDependent(dependent:Dependent){
             this.recetCollectionDependent.add(dependent);
         }
         getAllRecetDependent():Observable<Dependent[]>{
             this.dependents = this.recetCollectionDependent.snapshotChanges()
             .map(changes => {
                 return changes.map(action =>{
                     const data = action.payload.doc.data() as Dependent;
                     data.id = action.payload.doc.id;
                     return data;
                 })
             })
             return this.dependents;
         }
         deleteRecetDependent(id){
           this.recetDocDependent = this.afs.doc(`Dependent/${id.id}`)
           this.recetDocDependent.delete();
         }
         getOneRecetDependent(idRecet:string){
             this.recetDocDependent = this.afs.doc<Dependent>(`Dependent/${idRecet}`);
             this.dependent = this.recetDocDependent.snapshotChanges().map(action =>{
                 if(action.payload.exists === false){
                     return null;
                 }
                 else{
                     const data = action.payload.data() as Dependent;
                     data.id = action.payload.id;
                     return data;
                 }
             })
             return this.dependent;
         }
         updateRecetDependent(dependent:Dependent){
             this.recetDocDependent = this.afs.doc(`Dependent/${dependent.id}`)
             this.recetDocDependent.update(dependent)
         }
         // Dependent

      // Aglomeration
      addNewAglomeration(aglomeration:Aglomeration){
           this.recetCollectionAglomeration.add(aglomeration);
       }
       getAllRecetAglomeration():Observable<Aglomeration[]>{
           this.aglomerations = this.recetCollectionAglomeration.snapshotChanges()
           .map(changes => {
               return changes.map(action =>{
                   const data = action.payload.doc.data() as Aglomeration;
                   data.id = action.payload.doc.id;
                   return data;
               })
           })
           return this.aglomerations;
       }
       deleteRecetAglomeration(id){
         this.recetDocAglomeration = this.afs.doc(`Aglomeration/${id.id}`)
         this.recetDocAglomeration.delete();
       }
       getOneRecetAglomeration(idRecet:string){
           this.recetDocAglomeration = this.afs.doc<Aglomeration>(`Aglomeration/${idRecet}`);
           this.aglomeration = this.recetDocAglomeration.snapshotChanges().map(action =>{
               if(action.payload.exists === false){
                   return null;
               }
               else{
                   const data = action.payload.data() as Aglomeration;
                   data.id = action.payload.id;
                   return data;
               }
           })
           return this.aglomeration;
       }
       updateRecetAglomeration(aglomeration:Aglomeration){
           this.recetDocAglomeration = this.afs.doc(`Aglomeration/${aglomeration.id}`)
           this.recetDocAglomeration.update(aglomeration)
       }
       // Aglomeration


    // Dictionary
    addNewDictionary(dic:Dictionary){
        this.recetCollectionDictionary.add(dic);
    }
    getAllRecetDictionary():Observable<Dictionary[]>{
        this.dics = this.recetCollectionDictionary.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Dictionary;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.dics;
    }
    deleteRecetDictionary(id){
      this.recetDocDictionary = this.afs.doc(`Dictionary/${id.id}`)
      this.recetDocDictionary.delete();
    }
    getOneRecetDictionary(idRecet:string){
        this.recetDocDictionary = this.afs.doc<Dictionary>(`Dictionary/${idRecet}`);
        this.dic = this.recetDocDictionary.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Dictionary;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.dic;
    }
    updateRecetDictionary(dic:Dictionary){
        this.recetDocDictionary = this.afs.doc(`Dictionary/${dic.id}`)
        this.recetDocDictionary.update(dic)
    }
    // Dictionary


    // Interesing
    addNewInteresing(int:Interesing){
        this.recetCollectionInteresing.add(int);
    }
    getAllRecetInteresing():Observable<Interesing[]>{
        this.ints = this.recetCollectionInteresing.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Interesing;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.ints;
    }
    deleteRecetInteresing(id){
      this.recetDocInteresing = this.afs.doc(`Interesing/${id.id}`)
      this.recetDocInteresing.delete();
    }
    getOneRecetInteresing(idRecet:string){
        this.recetDocInteresing = this.afs.doc<Interesing>(`Interesing/${idRecet}`);
        this.int = this.recetDocInteresing.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Interesing;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.int;
    }
    updateRecetInteresing(int:Interesing){
        this.recetDocInteresing = this.afs.doc(`Interesing/${int.id}`)
        this.recetDocInteresing.update(int)
    }
    // Interesing
}
