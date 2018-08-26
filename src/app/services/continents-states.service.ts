import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {States} from "../models/States";
import {Pools} from "../models/PoolsContinent";
import {Islands} from "../models/island";
import {Rivers} from "../models/RiversContinent";
import {Mountains} from "../models/MountainsContinent";
import {WorldCity} from "../models/WorldCity";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
@Injectable()
export class ContinentsStatesService {
  recetCollectionStates: AngularFirestoreCollection<States>;
  recetDocStates: AngularFirestoreDocument<States>;
  states: Observable<States[]>;
  state: Observable<States>;

  recetCollectionPools: AngularFirestoreCollection<Pools>;
  recetDocPools: AngularFirestoreDocument<Pools>;
  pools: Observable<Pools[]>;
  pool: Observable<Pools>;

  recetCollectionMountains: AngularFirestoreCollection<Mountains>;
  recetDocMountains: AngularFirestoreDocument<Mountains>;
  mountains: Observable<Mountains[]>;
  mountain: Observable<Mountains>;

  recetCollectionRivers: AngularFirestoreCollection<Rivers>;
  recetDocRivers: AngularFirestoreDocument<Rivers>;
  rivers: Observable<Rivers[]>;
  river: Observable<Rivers>;

  recetCollectionIslands: AngularFirestoreCollection<Islands>;
  recetDocIslands: AngularFirestoreDocument<Islands>;
  islands: Observable<Islands[]>;
  island: Observable<Islands>;


  recetCollectionWorldCity: AngularFirestoreCollection<WorldCity>;
  recetDocWorldCity: AngularFirestoreDocument<WorldCity>;
  wcitys: Observable<WorldCity[]>;
  wcity: Observable<WorldCity>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.recetCollectionStates = this.afs.collection("States", ref => ref.orderBy('publication'))
    this.recetCollectionPools = this.afs.collection("Pools-Continents", ref => ref.orderBy('publication'))
    this.recetCollectionMountains = this.afs.collection("Mountains-Continents", ref => ref.orderBy('publication'))
    this.recetCollectionRivers = this.afs.collection("Rivers-Continents", ref => ref.orderBy('publication'))
    this.recetCollectionIslands = this.afs.collection("Islands", ref => ref.orderBy('publication'))
    this.recetCollectionWorldCity = this.afs.collection("WorldCity", ref => ref.orderBy('publication'))
    
  }

// States Continents
   addNewStates(state:States){
        this.recetCollectionStates.add(state);
    }
    getAllRecetsContinentsStates():Observable<States[]>{
        this.states = this.recetCollectionStates.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as States;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.states;
    }
    deleteRecetStates(id){
      this.recetDocStates = this.afs.doc(`States/${id.id}`)
      this.recetDocStates.delete();
    }
    getOneRecetStates(idRecet:string){
        this.recetDocStates = this.afs.doc<States>(`States/${idRecet}`);
        this.state = this.recetDocStates.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as States;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.state;
    }
    updateRecetState(state:States){
        this.recetDocStates = this.afs.doc(`States/${state.id}`)
        this.recetDocStates.update(state)
    }
    // States Continents

    // Pools Continents
    addNewPools(pool:Pools){
         this.recetCollectionPools.add(pool);
     }
     getAllRecetsContinentsPools():Observable<Pools[]>{
         this.pools = this.recetCollectionPools.snapshotChanges()
         .map(changes => {
             return changes.map(action =>{
                 const data = action.payload.doc.data() as Pools;
                 data.id = action.payload.doc.id;
                 return data;
             })
         })
         return this.pools;
     }
     deleteRecetPools(id){
       this.recetDocPools = this.afs.doc(`Pools-Continents/${id.id}`)
       this.recetDocPools.delete();
     }
     getOneRecetPools(idRecet:string){
         this.recetDocPools = this.afs.doc<Pools>(`Pools-Continents/${idRecet}`);
         this.pool = this.recetDocPools.snapshotChanges().map(action =>{
             if(action.payload.exists === false){
                 return null;
             }
             else{
                 const data = action.payload.data() as Pools;
                 data.id = action.payload.id;
                 return data;
             }
         })
         return this.pool;
     }
     updateRecetPool(pool:Pools){
         this.recetDocPools = this.afs.doc(`Pools-Continents/${pool.id}`)
         this.recetDocPools.update(pool)
     }
    // Pools Continents

    // Mountains Continents
    addNewMountains(mountain:Mountains){
         this.recetCollectionMountains.add(mountain);
     }
     getAllRecetsContinentsMountains():Observable<Mountains[]>{
         this.mountains = this.recetCollectionMountains.snapshotChanges()
         .map(changes => {
             return changes.map(action =>{
                 const data = action.payload.doc.data() as Mountains;
                 data.id = action.payload.doc.id;
                 return data;
             })
         })
         return this.mountains;
     }
     deleteRecetMountains(id){
       this.recetDocMountains = this.afs.doc(`Mountains-Continents/${id.id}`)
       this.recetDocMountains.delete();
     }
     getOneRecetMountains(idRecet:string){
         this.recetDocMountains = this.afs.doc<Mountains>(`Mountains-Continents/${idRecet}`);
         this.mountain = this.recetDocMountains.snapshotChanges().map(action =>{
             if(action.payload.exists === false){
                 return null;
             }
             else{
                 const data = action.payload.data() as Mountains;
                 data.id = action.payload.id;
                 return data;
             }
         })
         return this.mountain;
     }
     updateRecetMountains(mountain:Mountains){
         this.recetDocMountains = this.afs.doc(`Mountains-Continents/${mountain.id}`)
         this.recetDocMountains.update(mountain)
     }
    // Mountains Continents

    // Rivers Continents
    addNewRivers(river:Rivers){
         this.recetCollectionRivers.add(river);
     }
     getAllRecetsContinentsRivers():Observable<Rivers[]>{
         this.rivers = this.recetCollectionRivers.snapshotChanges()
         .map(changes => {
             return changes.map(action =>{
                 const data = action.payload.doc.data() as Rivers;
                 data.id = action.payload.doc.id;
                 return data;
             })
         })
         return this.rivers;
     }
     deleteRecetRivers(id){
       this.recetDocRivers = this.afs.doc(`Rivers-Continents/${id.id}`)
       this.recetDocRivers.delete();
     }
     getOneRecetRivers(idRecet:string){
         this.recetDocRivers = this.afs.doc<Rivers>(`Rivers-Continents/${idRecet}`);
         this.river = this.recetDocRivers.snapshotChanges().map(action =>{
             if(action.payload.exists === false){
                 return null;
             }
             else{
                 const data = action.payload.data() as Rivers;
                 data.id = action.payload.id;
                 return data;
             }
         })
         return this.river;
     }
     updateRecetRivers(river:Rivers){
         this.recetDocRivers = this.afs.doc(`Rivers-Continents/${river.id}`)
         this.recetDocRivers.update(river)
     }
    // Rivers Continents

    // Islands Continents
    addNewIslands(island:Islands){
         this.recetCollectionIslands.add(island);
     }
     getAllRecetsIslands():Observable<Islands[]>{
         this.islands = this.recetCollectionIslands.snapshotChanges()
         .map(changes => {
             return changes.map(action =>{
                 const data = action.payload.doc.data() as Islands;
                 data.id = action.payload.doc.id;
                 return data;
             })
         })
         return this.islands;
     }
     deleteRecetIslands(id){
       this.recetDocIslands = this.afs.doc(`Islands/${id.id}`)
       this.recetDocIslands.delete();
     }
     getOneRecetIslands(idRecet:string){
         this.recetDocIslands = this.afs.doc<Islands>(`Islands/${idRecet}`);
         this.island = this.recetDocIslands.snapshotChanges().map(action =>{
             if(action.payload.exists === false){
                 return null;
             }
             else{
                 const data = action.payload.data() as Islands;
                 data.id = action.payload.id;
                 return data;
             }
         })
         return this.island;
     }
     updateRecetIslands(island:Islands){
         this.recetDocIslands = this.afs.doc(`Islands/${island.id}`)
         this.recetDocIslands.update(island)
     }
    // Islands Continents


    // WorldCity Continents
    addNewWorldCity(wcity:WorldCity){
        this.recetCollectionWorldCity.add(wcity);
    }
    getAllRecetsWorldCity():Observable<WorldCity[]>{
        this.wcitys = this.recetCollectionWorldCity.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as WorldCity;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.wcitys;
    }
    deleteRecetWorldCity(id){
      this.recetDocWorldCity = this.afs.doc(`WorldCity/${id.id}`)
      this.recetDocWorldCity.delete();
    }
    getOneRecetWorldCity(idRecet:string){
        this.recetDocWorldCity = this.afs.doc<WorldCity>(`WorldCity/${idRecet}`);
        this.wcity = this.recetDocWorldCity.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as WorldCity;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.wcity;
    }
    updateRecetWorldCity(wcity:WorldCity){
        this.recetDocWorldCity = this.afs.doc(`WorldCity/${wcity.id}`)
        this.recetDocWorldCity.update(wcity)
    }
    
   // WorldCity Continents
}
