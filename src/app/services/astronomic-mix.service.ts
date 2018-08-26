import { Injectable } from '@angular/core';
import {EarthPlanet} from "../models/earthPlanet";
import {SunPlanet} from "../models/sunPlanet";
import {MilkyWay} from "../models/MilkyWay";
import {Planets} from "../models/Planets";
import {FarZone} from "../models/FarZone";
import {FarZoneMore} from "../models/FarZoneMore";
import {UsefulHref} from "../models/UsefulHref";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/observable";
@Injectable()
export class AstronomicMixService {
    public navBarPlanets:any;
  recetCollectionEarthPlanet: AngularFirestoreCollection<EarthPlanet>;
  recetDoc: AngularFirestoreDocument<EarthPlanet>;
  earthPlanets: Observable<EarthPlanet[]>;
  earthPlanet: Observable<EarthPlanet>;

  recetCollectionSunPlanet: AngularFirestoreCollection<SunPlanet>;
  recetDocSun: AngularFirestoreDocument<SunPlanet>;
  sunPlanets: Observable<SunPlanet[]>;
  sunPlanet: Observable<SunPlanet>;

  recetCollectionMilkyWay: AngularFirestoreCollection<MilkyWay>;
  recetDocMilkyWay: AngularFirestoreDocument<MilkyWay>;
  milkyWays: Observable<MilkyWay[]>;
  milkyWay: Observable<MilkyWay>;

  recetCollectionPlanets: AngularFirestoreCollection<Planets>;
  recetDocPlanets: AngularFirestoreDocument<Planets>;
  planets: Observable<Planets[]>;
  planet: Observable<Planets>;

  recetCollectionFarZone: AngularFirestoreCollection<FarZone>;
  recetDocFarZone: AngularFirestoreDocument<FarZone>;
  farZones: Observable<FarZone[]>;
  farZone: Observable<FarZone>;

  recetCollectionFarZoneMore: AngularFirestoreCollection<FarZoneMore>;
  recetDocFarZoneMore: AngularFirestoreDocument<FarZoneMore>;
  farZoneMores: Observable<FarZoneMore[]>;
  farZoneMore: Observable<FarZoneMore>;


  recetCollectionUsefulHref: AngularFirestoreCollection<UsefulHref>;
  recetDocUsefulHref: AngularFirestoreDocument<UsefulHref>;
  usefulHrefs: Observable<UsefulHref[]>;
  usefulHref: Observable<UsefulHref>;

  constructor(private afs: AngularFirestore) {
    this.recetCollectionEarthPlanet = this.afs.collection("earthPlanet", ref => ref.orderBy('publication'))
    this.recetCollectionSunPlanet = this.afs.collection("sunPlanet", ref => ref.orderBy('publication'))
    this.recetCollectionMilkyWay = this.afs.collection("milkyWay", ref => ref.orderBy('publication'))
    this.recetCollectionPlanets = this.afs.collection("Planets", ref => ref.orderBy('publication'))
    this.recetCollectionFarZone = this.afs.collection("FarZone", ref => ref.orderBy('publication'))
    this.recetCollectionFarZoneMore = this.afs.collection("FarZoneMore", ref => ref.orderBy('publication'))
    this.recetCollectionUsefulHref = this.afs.collection("UsefulHref", ref => ref.orderBy('publication'))
   }


   //EarthPlanet Home page
addNewEarthPlanet(earthPlanet:EarthPlanet){
    this.recetCollectionEarthPlanet.add(earthPlanet)
}
getAllRecetsEarthPlanet():Observable<EarthPlanet[]>{
    this.earthPlanets = this.recetCollectionEarthPlanet.snapshotChanges()
    .map(changes => {
        return changes.map(action =>{
            const data = action.payload.doc.data() as EarthPlanet;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.earthPlanets;
}
updateRecetEarthPlanet(earthPlanet:EarthPlanet){
    this.recetDoc = this.afs.doc(`earthPlanet/${earthPlanet.id}`)
    this.recetDoc.update(earthPlanet)

}
deleteRecetEarthPlanet(id){
    this.recetDoc = this.afs.doc(`earthPlanet/${id.id}`)
    this.recetDoc.delete()
}
getOneRecetEarthPlanet(idRecet:string){
    this.recetDoc = this.afs.doc<EarthPlanet>(`earthPlanet/${idRecet}`);
    this.earthPlanet = this.recetDoc.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as EarthPlanet;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.earthPlanet;
}
//EarthPlanet Home page



//SunPlanet Home page
addNewSunPlanet(sunPlanet:SunPlanet){
    this.recetCollectionSunPlanet.add(sunPlanet)
}
getAllRecetsSunPlanet():Observable<SunPlanet[]>{
    this.sunPlanets = this.recetCollectionSunPlanet.snapshotChanges()
    .map(changes => {
        return changes.map(action =>{
            const data = action.payload.doc.data() as SunPlanet;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.sunPlanets;
}
updateRecetSunPlanet(sunPlanet:SunPlanet){
    this.recetDocSun = this.afs.doc(`sunPlanet/${sunPlanet.id}`)
    this.recetDocSun.update(sunPlanet)

}
deleteRecetSunPlanet(id){
    this.recetDocSun = this.afs.doc(`sunPlanet/${id.id}`)
    this.recetDocSun.delete()
}
getOneRecetSunPlanet(idRecet:string){
    this.recetDocSun = this.afs.doc<SunPlanet>(`sunPlanet/${idRecet}`);
    this.sunPlanet = this.recetDocSun.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as SunPlanet;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.sunPlanet;
}
//SunPlanet Home page


//MilkyWay Home page
addNewMilkyWay(milkyWay:MilkyWay){
    this.recetCollectionMilkyWay.add(milkyWay)
}
getAllRecetsMilkyWay():Observable<MilkyWay[]>{
    this.milkyWays = this.recetCollectionMilkyWay.snapshotChanges()
    .map(changes => {
        return changes.map(action =>{
            const data = action.payload.doc.data() as MilkyWay;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.milkyWays;
}
updateRecetMilkyWay(milkyWay:MilkyWay){
    this.recetDocMilkyWay = this.afs.doc(`milkyWay/${milkyWay.id}`)
    this.recetDocMilkyWay.update(milkyWay)

}
deleteRecetMilkyWay(id){
    this.recetDocMilkyWay = this.afs.doc(`milkyWay/${id.id}`)
    this.recetDocMilkyWay.delete()
}
getOneRecetMilkyWay(idRecet:string){
    this.recetDocMilkyWay = this.afs.doc<MilkyWay>(`milkyWay/${idRecet}`);
    this.milkyWay = this.recetDocMilkyWay.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as MilkyWay;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.milkyWay;
}
//MilkyWay Home page

//Planets Home page
addNewPlanets(planet:Planets){
    this.recetCollectionPlanets.add(planet)
}
getAllRecetsPlanets():Observable<Planets[]>{
    this.planets = this.recetCollectionPlanets.snapshotChanges()
    .map(changes => {
        return changes.map(function(action){
            const data = action.payload.doc.data() as Planets;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.planets;
}
updateRecetPlanets(planet:Planets){
    this.recetDocPlanets = this.afs.doc(`Planets/${planet.id}`)
    this.recetDocPlanets.update(planet)

}
deleteRecetPlanets(id){
    this.recetDocPlanets = this.afs.doc(`Planets/${id.id}`)
    this.recetDocPlanets.delete()
}
getOneRecetPlanets(idRecet:string){ 
    this.recetDocPlanets = this.afs.doc<Planets>(`Planets/${idRecet}`);
    this.planet = this.recetDocPlanets.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as Planets;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.planet;
}
//Planets Home page


//FarZone Home page
addNewFarZone(farZone:FarZone){
    this.recetCollectionFarZone.add(farZone)
}
getAllRecetsFarZone():Observable<FarZone[]>{
    this.farZones = this.recetCollectionFarZone.snapshotChanges()
    .map(changes => {
        return changes.map(function(action){
            const data = action.payload.doc.data() as FarZone;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.farZones;
}
updateRecetFarZone(farZone:FarZone){
    this.recetDocFarZone = this.afs.doc(`FarZone/${farZone.id}`)
    this.recetDocFarZone.update(farZone)

}
deleteRecetFarZone(id){
    this.recetDocFarZone = this.afs.doc(`FarZone/${id.id}`)
    this.recetDocFarZone.delete()
}
getOneRecetFarZone(idRecet:string){ 
    this.recetDocFarZone = this.afs.doc<FarZone>(`FarZone/${idRecet}`);
    this.farZone = this.recetDocFarZone.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as FarZone;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.farZone;
}
//FarZone Home page


//FarZoneMore Home page
addNewFarZoneMore(farZoneMore:FarZoneMore){
    this.recetCollectionFarZoneMore.add(farZoneMore)
}
getAllRecetsFarZoneMore():Observable<FarZoneMore[]>{
    this.farZoneMores = this.recetCollectionFarZoneMore.snapshotChanges()
    .map(changes => {
        return changes.map(function(action){
            const data = action.payload.doc.data() as FarZoneMore;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.farZoneMores;
}
updateRecetFarZoneMore(farZoneMore:FarZoneMore){
    this.recetDocFarZoneMore = this.afs.doc(`FarZoneMore/${farZoneMore.id}`)
    this.recetDocFarZoneMore.update(farZoneMore)

}
deleteRecetFarZoneMore(id){
    this.recetDocFarZoneMore = this.afs.doc(`FarZoneMore/${id.id}`)
    this.recetDocFarZoneMore.delete()
}
getOneRecetFarZoneMore(idRecet:string){ 
    this.recetDocFarZoneMore= this.afs.doc<FarZoneMore>(`FarZoneMore/${idRecet}`);
    this.farZoneMore = this.recetDocFarZoneMore.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as FarZoneMore;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.farZoneMore;
}
//FarZoneMore Home page


//UsefulHref Home page
addNewUsefulHref(usefulHref:UsefulHref){
    this.recetCollectionUsefulHref.add(usefulHref)
}
getAllRecetsUsefulHref():Observable<UsefulHref[]>{
    this.usefulHrefs = this.recetCollectionUsefulHref.snapshotChanges()
    .map(changes => {
        return changes.map(function(action){
            const data = action.payload.doc.data() as UsefulHref;
            data.id = action.payload.doc.id;
            return data;
        })
    })
    return this.usefulHrefs;
}
updateRecetUsefulHref(usefulHref:UsefulHref){
    this.recetDocUsefulHref = this.afs.doc(`UsefulHref/${usefulHref.id}`)
    this.recetDocUsefulHref.update(usefulHref)

}
deleteRecetUsefulHref(id){
    this.recetDocUsefulHref = this.afs.doc(`UsefulHref/${id.id}`)
    this.recetDocUsefulHref.delete()
}
getOneRecetUsefulHref(idRecet:string){ 
    this.recetDocUsefulHref= this.afs.doc<UsefulHref>(`UsefulHref/${idRecet}`);
    this.usefulHref = this.recetDocUsefulHref.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as UsefulHref;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.usefulHref;
}
//UsefulHref Home page
}
