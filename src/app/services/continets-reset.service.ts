import { Injectable } from '@angular/core';
import {Continents} from "../models/continents";
import {AsiaPhotos, Asia} from "../models/AsiaPhotos";
import {EuropaPhotos, Europa} from "../models/EuropaPhotos";
import {AfricaPhotos, Africa} from "../models/AfricaPhotos";
import {AustraliaPhotos, Australia} from "../models/AustraliaPhotos";
import {AntarktidaPhotos, Antarktida} from "../models/AntarktidaPhotos";
import {NorthAmericaPhotos, NorthAmerica} from "../models/NorthAmericaPhotos";
import {SouthAmericaPhotos, SouthAmerica} from "../models/SouthAmericaPhotos";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";


import {Observable} from "rxjs/observable";
@Injectable()
export class ContinetsResetService {
recetCollectionContinant: AngularFirestoreCollection<Continents>;
recetDoc: AngularFirestoreDocument<Continents>;
continents: Observable<Continents[]>;
continent: Observable<Continents>;


recetCollectionAsiaPhotos: AngularFirestoreCollection<AsiaPhotos>;
recetDocAsiaPhotos: AngularFirestoreDocument<AsiaPhotos>;
asiaphotos: Observable<AsiaPhotos[]>;
asiaphoto: Observable<AsiaPhotos>;

recetCollectionAsia: AngularFirestoreCollection<Asia>;
recetDocAsia: AngularFirestoreDocument<Asia>;
asias: Observable<Asia[]>;
asia: Observable<Asia>;

recetCollectionEuropaPhotos: AngularFirestoreCollection<EuropaPhotos>;
recetDocEuropaPhotos: AngularFirestoreDocument<EuropaPhotos>;
europaphotos: Observable<EuropaPhotos[]>;
europaphoto: Observable<EuropaPhotos>;

recetCollectionEuropa: AngularFirestoreCollection<Europa>;
recetDocEuropa: AngularFirestoreDocument<Europa>;
europas: Observable<Europa[]>;
europa: Observable<Europa>;


recetCollectionAfricaPhotos: AngularFirestoreCollection<AfricaPhotos>;
recetDocAfricaPhotos: AngularFirestoreDocument<AfricaPhotos>;
africaphotos: Observable<AfricaPhotos[]>;
africaphoto: Observable<AfricaPhotos>;

recetCollectionAfrica: AngularFirestoreCollection<Africa>;
recetDocAfrica: AngularFirestoreDocument<Africa>;
africas: Observable<Africa[]>;
africa: Observable<Africa>;

recetCollectionAustraliaPhotos: AngularFirestoreCollection<AustraliaPhotos>;
recetDocAustraliaPhotos: AngularFirestoreDocument<AustraliaPhotos>;
australiaphotos: Observable<AustraliaPhotos[]>;
australiaphoto: Observable<AustraliaPhotos>;

recetCollectionAustralia: AngularFirestoreCollection<Australia>;
recetDocAustralia: AngularFirestoreDocument<Australia>;
australias: Observable<Australia[]>;
australia: Observable<Australia>;

recetCollectionAntarktidaPhotos: AngularFirestoreCollection<AntarktidaPhotos>;
recetDocAntarktidaPhotos: AngularFirestoreDocument<AntarktidaPhotos>;
antarktidaphotos: Observable<AntarktidaPhotos[]>;
antarktidaphoto: Observable<AntarktidaPhotos>;

recetCollectionAntarktida: AngularFirestoreCollection<Antarktida>;
recetDocAntarktida: AngularFirestoreDocument<Antarktida>;
antarktidas: Observable<Antarktida[]>;
antarktida: Observable<Antarktida>;

recetCollectionNorthAmericaPhotos: AngularFirestoreCollection<NorthAmericaPhotos>;
recetDocNorthAmericaPhotos: AngularFirestoreDocument<NorthAmericaPhotos>;
northamericaphotos: Observable<NorthAmericaPhotos[]>;
northamericaphoto: Observable<NorthAmericaPhotos>;

recetCollectionNorthAmerica: AngularFirestoreCollection<NorthAmerica>;
recetDocNorthAmerica: AngularFirestoreDocument<NorthAmerica>;
northamericas: Observable<NorthAmerica[]>;
northamerica: Observable<NorthAmerica>;

recetCollectionSouthAmericaPhotos: AngularFirestoreCollection<SouthAmericaPhotos>;
recetDocSouthAmericaPhotos: AngularFirestoreDocument<SouthAmericaPhotos>;
southamericaphotos: Observable<SouthAmericaPhotos[]>;
southamericaphoto: Observable<SouthAmericaPhotos>;

recetCollectionSouthAmerica: AngularFirestoreCollection<SouthAmerica>;
recetDocSouthAmerica: AngularFirestoreDocument<SouthAmerica>;
southamericas: Observable<SouthAmerica[]>;
southamerica: Observable<SouthAmerica>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.recetCollectionContinant = this.afs.collection("continents", ref => ref.orderBy('publication')),
    this.recetCollectionAsiaPhotos = this.afs.collection("AsiaPhotos", ref => ref),
    this.recetCollectionAsia = this.afs.collection("Asia", ref => ref.orderBy('publication')),
    this.recetCollectionEuropaPhotos = this.afs.collection("EuropaPhotos", ref => ref),
    this.recetCollectionEuropa = this.afs.collection("Europa", ref => ref.orderBy('publication')),
    this.recetCollectionAfricaPhotos = this.afs.collection("AfricaPhotos", ref => ref),
    this.recetCollectionAfrica = this.afs.collection("Africa", ref => ref.orderBy('publication')),
    this.recetCollectionAustraliaPhotos = this.afs.collection("AustraliaPhotos", ref => ref),
    this.recetCollectionAustralia = this.afs.collection("Australia", ref => ref.orderBy('publication')),
    this.recetCollectionAntarktidaPhotos = this.afs.collection("AntarktidaPhotos", ref => ref),
    this.recetCollectionAntarktida = this.afs.collection("Antarktida", ref => ref.orderBy('publication')),
    this.recetCollectionNorthAmericaPhotos = this.afs.collection("NorthAmericaPhotos", ref => ref),
    this.recetCollectionNorthAmerica = this.afs.collection("NorthAmerica", ref => ref.orderBy('publication')),
    this.recetCollectionSouthAmericaPhotos = this.afs.collection("SouthAmericaPhotos", ref => ref),
    this.recetCollectionSouthAmerica = this.afs.collection("SouthAmerica", ref => ref.orderBy('publication'))
  }

//Continenst Home page
    addNewContinents(continent:Continents){
        this.recetCollectionContinant.add(continent)
    }
    getAllRecetsContinents():Observable<Continents[]>{
        this.continents = this.recetCollectionContinant.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Continents;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.continents;
    }
    updateRecetContinet(continent:Continents){
        this.recetDoc = this.afs.doc(`continents/${continent.id}`)
        this.recetDoc.update(continent)

    }
    deleteRecetContinent(id){
        this.recetDoc = this.afs.doc(`continents/${id.id}`)
        this.recetDoc.delete()
    }
    getOneRecetContinents(idRecet:string){
        this.recetDoc = this.afs.doc<Continents>(`continents/${idRecet}`);
        this.continent = this.recetDoc.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Continents;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.continent;
    }
//Continenst Home page


//Asia Page
    getAllRecetsAsiaPhotos():Observable<AsiaPhotos[]>{
        this.asiaphotos = this.recetCollectionAsiaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as AsiaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.asiaphotos;
    }

    deleteRecetAsiaPhotos(id){
        this.recetDocAsiaPhotos = this.afs.doc(`AsiaPhotos/${id.id}`)
        this.recetDocAsiaPhotos.delete();
    }
    addNewAsia(asia:Asia){
        this.recetCollectionAsia.add(asia)
    }

    getAllRecetsAsia():Observable<Asia[]>{
        this.asias = this.recetCollectionAsia.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Asia;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.asias;
    }
    deleteRecetAsia(id){
        this.recetDocAsia = this.afs.doc(`Asia/${id.id}`)
        this.recetDocAsia.delete()
    }
    getOneRecetAsia(idRecet:string){
        this.recetDocAsia = this.afs.doc<Continents>(`Asia/${idRecet}`);
        this.asia = this.recetDocAsia.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Asia;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.asia;
    }
    updateRecetAsia(asia:Asia){
        this.recetDocAsia = this.afs.doc(`Asia/${asia.id}`)
        this.recetDocAsia.update(asia)
    }

//Asia Page



//Europa Page
    getAllRecetsEuropaPhotos():Observable<EuropaPhotos[]>{
        this.europaphotos = this.recetCollectionEuropaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as EuropaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.europaphotos;
    }

    deleteRecetEuropaPhotos(id){
        this.recetDocEuropaPhotos = this.afs.doc(`EuropaPhotos/${id.id}`)
        this.recetDocEuropaPhotos.delete();
    }
    addNewEuropa(europa:Europa){
        this.recetCollectionEuropa.add(europa)
    }

    getAllRecetsEuropa():Observable<Europa[]>{
        this.europas = this.recetCollectionEuropa.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Europa;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.europas;
    }
    deleteRecetEuropa(id){
        this.recetDocEuropa = this.afs.doc(`Europa/${id.id}`)
        this.recetDocEuropa.delete()
    }
    getOneRecetEuropa(idRecet:string){
        this.recetDocEuropa = this.afs.doc<Continents>(`Europa/${idRecet}`);
        this.europa = this.recetDocEuropa.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Europa;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.europa;
    }
    updateRecetEuropa(europa:Europa){
        this.recetDocEuropa = this.afs.doc(`Europa/${europa.id}`)
        this.recetDocEuropa.update(europa)
    }

//Europa Page


//Africa Page
    getAllRecetsAfricaPhotos():Observable<AfricaPhotos[]>{
        this.africaphotos = this.recetCollectionAfricaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as AfricaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.africaphotos;
    }

    deleteRecetAfricaPhotos(id){
        this.recetDocAfricaPhotos = this.afs.doc(`AfricaPhotos/${id.id}`)
        this.recetDocAfricaPhotos.delete();
    }
    addNewAfrica(africa:Africa){
        this.recetCollectionAfrica.add(africa)
    }

    getAllRecetsAfrica():Observable<Africa[]>{
        this.africas = this.recetCollectionAfrica.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Africa;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.africas;
    }
    deleteRecetAfrica(id){
        this.recetDocAfrica = this.afs.doc(`Africa/${id.id}`)
        this.recetDocAfrica.delete()
    }
    getOneRecetAfrica(idRecet:string){
        this.recetDocAfrica = this.afs.doc<Continents>(`Africa/${idRecet}`);
        this.africa = this.recetDocAfrica.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Africa;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.africa;
    }
    updateRecetAfrica(africa:Africa){
        this.recetDocAfrica = this.afs.doc(`Africa/${africa.id}`)
        this.recetDocAfrica.update(africa)
    }

//Africa Page


//Australia Page
    getAllRecetsAustraliaPhotos():Observable<AustraliaPhotos[]>{
        this.australiaphotos = this.recetCollectionAustraliaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as AustraliaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.australiaphotos;
    }

    deleteRecetAustraliaPhotos(id){
        this.recetDocAustraliaPhotos = this.afs.doc(`AustraliaPhotos/${id.id}`)
        this.recetDocAustraliaPhotos.delete();
    }
    addNewAustralia(australia:Australia){
        this.recetCollectionAustralia.add(australia)
    }

    getAllRecetsAustralia():Observable<Australia[]>{
        this.australias = this.recetCollectionAustralia.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Australia;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.australias;
    }
    deleteRecetAustralia(id){
        this.recetDocAustralia = this.afs.doc(`Australia/${id.id}`)
        this.recetDocAustralia.delete()
    }
    getOneRecetAustralia(idRecet:string){
        this.recetDocAustralia = this.afs.doc<Continents>(`Australia/${idRecet}`);
        this.australia = this.recetDocAustralia.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Australia;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.australia;
    }
    updateRecetAustralia(australia:Australia){
        this.recetDocAustralia = this.afs.doc(`Australia/${australia.id}`)
        this.recetDocAustralia.update(australia)
    }

//Antarktida Page




//Antarktida Page
    getAllRecetsAntarktidaPhotos():Observable<AntarktidaPhotos[]>{
        this.antarktidaphotos = this.recetCollectionAntarktidaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as AntarktidaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.antarktidaphotos;
    }

    deleteRecetAntarktidaPhotos(id){
        this.recetDocAntarktidaPhotos = this.afs.doc(`AntarktidaPhotos/${id.id}`)
        this.recetDocAntarktidaPhotos.delete();
    }
    addNewAntarktida(antarktida:Antarktida){
        this.recetCollectionAntarktida.add(antarktida)
    }

    getAllRecetsAntarktida():Observable<Antarktida[]>{
        this.antarktidas = this.recetCollectionAntarktida.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as Antarktida;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.antarktidas;
    }
    deleteRecetAntarktida(id){
        this.recetDocAntarktida = this.afs.doc(`Antarktida/${id.id}`)
        this.recetDocAntarktida.delete()
    }
    getOneRecetAntarktida(idRecet:string){
        this.recetDocAntarktida = this.afs.doc<Continents>(`Antarktida/${idRecet}`);
        this.antarktida = this.recetDocAntarktida.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as Antarktida;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.antarktida;
    }
    updateRecetAntarktida(antarktida:Antarktida){
        this.recetDocAntarktida = this.afs.doc(`Antarktida/${antarktida.id}`)
        this.recetDocAntarktida.update(antarktida)
    }

//Africa Page


//NorthAmerica Page
    getAllRecetsNorthAmericaPhotos():Observable<NorthAmericaPhotos[]>{
        this.northamericaphotos = this.recetCollectionNorthAmericaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as NorthAmericaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.northamericaphotos;
    }

    deleteRecetNorthAmericaPhotos(id){
        this.recetDocNorthAmericaPhotos = this.afs.doc(`NorthAmericaPhotos/${id.id}`)
        this.recetDocNorthAmericaPhotos.delete();
    }
    addNewNorthAmerica(northamerica:NorthAmerica){
        this.recetCollectionNorthAmerica.add(northamerica)
    }

    getAllRecetsNorthAmerica():Observable<NorthAmerica[]>{
        this.northamericas = this.recetCollectionNorthAmerica.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as NorthAmerica;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.northamericas;
    }
    deleteRecetNorthAmerica(id){
        this.recetDocNorthAmerica = this.afs.doc(`NorthAmerica/${id.id}`)
        this.recetDocNorthAmerica.delete()
    }
    getOneRecetNorthAmerica(idRecet:string){
        this.recetDocNorthAmerica = this.afs.doc<Continents>(`NorthAmerica/${idRecet}`);
        this.northamerica = this.recetDocNorthAmerica.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as NorthAmerica;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.northamerica;
    }
    updateRecetNorthAmerica(northamerica:NorthAmerica){
        this.recetDocNorthAmerica = this.afs.doc(`NorthAmerica/${northamerica.id}`)
        this.recetDocNorthAmerica.update(northamerica)
    }

//NorthAmerica Page


//SouthAmerica Page
    getAllRecetsSouthAmericaPhotos():Observable<SouthAmericaPhotos[]>{
        this.southamericaphotos = this.recetCollectionSouthAmericaPhotos.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as SouthAmericaPhotos;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.southamericaphotos;
    }

    deleteRecetSouthAmericaPhotos(id){
        this.recetDocSouthAmericaPhotos = this.afs.doc(`SouthAmericaPhotos/${id.id}`)
        this.recetDocSouthAmericaPhotos.delete();
    }
    addNewSouthAmerica(southamerica:SouthAmerica){
        this.recetCollectionSouthAmerica.add(southamerica)
    }

    getAllRecetsSouthAmerica():Observable<SouthAmerica[]>{
        this.southamericas = this.recetCollectionSouthAmerica.snapshotChanges()
        .map(changes => {
            return changes.map(action =>{
                const data = action.payload.doc.data() as SouthAmerica;
                data.id = action.payload.doc.id;
                return data;
            })
        })
        return this.southamericas;
    }
    deleteRecetSouthAmerica(id){
        this.recetDocSouthAmerica = this.afs.doc(`SouthAmerica/${id.id}`)
        this.recetDocSouthAmerica.delete()
    }
    getOneRecetSouthAmerica(idRecet:string){
        this.recetDocSouthAmerica = this.afs.doc<Continents>(`SouthAmerica/${idRecet}`);
        this.southamerica = this.recetDocSouthAmerica.snapshotChanges().map(action =>{
            if(action.payload.exists === false){
                return null;
            }
            else{
                const data = action.payload.data() as SouthAmerica;
                data.id = action.payload.id;
                return data;
            }
        })
        return this.southamerica;
    }
    updateRecetSouthAmerica(southamerica:SouthAmerica){
        this.recetDocSouthAmerica = this.afs.doc(`SouthAmerica/${southamerica.id}`)
        this.recetDocSouthAmerica.update(southamerica)
    }

//SouthAmerica Page

}
