import { Injectable } from '@angular/core';
import {Citys} from "../models/citys";
import {Provinces} from "../models/provinces";
import {Rivers} from "../models/rivers";
import {Pools} from "../models/pools";
import {Mountains} from "../models/mountains";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/observable";
@Injectable()
export class RecetService {
recetCollection: AngularFirestoreCollection<Citys>;
recetDoc: AngularFirestoreDocument<Citys>;
citys: Observable<Citys[]>;
city: Observable<Citys>;

recetCollectionProvince: AngularFirestoreCollection<Provinces>;
recetDocProvince: AngularFirestoreDocument<Provinces>;
provinces: Observable<Provinces[]>;
province: Observable<Provinces>;

recetCollectionRiver: AngularFirestoreCollection<Rivers>;
recetDocRiver: AngularFirestoreDocument<Rivers>;
rivers: Observable<Rivers[]>;
river: Observable<Rivers>;

recetCollectionPool: AngularFirestoreCollection<Pools>;
recetDocPool: AngularFirestoreDocument<Pools>;
pools: Observable<Pools[]>;
pool: Observable<Pools>;

recetCollectionMountain: AngularFirestoreCollection<Mountains>;
recetDocMountain: AngularFirestoreDocument<Mountains>;
mountains: Observable<Mountains[]>;
mountain: Observable<Mountains>;


    constructor(
        private afs:AngularFirestore
    ) {
        this.recetCollectionPool = this.afs.collection("pools", ref => ref.orderBy('publication'));
        this.recetCollectionMountain = this.afs.collection("mountains", ref => ref.orderBy('publication'));
        this.recetCollectionProvince = this.afs.collection("provinces", ref => ref.orderBy('publication'));
        this.recetCollectionRiver = this.afs.collection("rivers", ref => ref.orderBy('publication'));
        this.recetCollection = this.afs.collection("citys", ref => ref.orderBy('publication'));
    
    }

//Armenian City start

addNewCity(city:Citys){
    this.recetCollection.add(city)
}
getOneRecet(idRecet:string){
    this.recetDoc = this.afs.doc<Citys>(`citys/${idRecet}`);
    this.city = this.recetDoc.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as Citys;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.city;
}
updateRecet(city:Citys){
    this.recetDoc = this.afs.doc(`citys/${city.id}`)
    this.recetDoc.update(city)
}
getAllRecets():Observable<Citys[]>{
    this.citys = this.recetCollection.snapshotChanges()
    .map(changes =>{
        return changes.map(action =>{
            const data = action.payload.doc.data() as Citys;
            data.id = action.payload.doc.id;
            return data; 
        })
    })
    return this.citys;
}
deleteRecet(id){
    this.recetDoc = this.afs.doc(`citys/${id.id}`)
    this.recetDoc.delete()
  }

//Armenian City emnd




//Armenian Provinces start
addNewProvince(province:Provinces){
    this.recetCollectionProvince.add(province)
}

getAllRecetsProvinces():Observable<Provinces[]>{
    this.provinces = this.recetCollectionProvince.snapshotChanges()
    .map(changes =>{
        return changes.map(action =>{
            const data = action.payload.doc.data() as Provinces;
            data.id = action.payload.doc.id;
            return data; 
        })
    })
    return this.provinces;
}

getOneRecetProvince(idRecet:string){
    this.recetDocProvince = this.afs.doc<Provinces>(`provinces/${idRecet}`);
    this.province = this.recetDocProvince.snapshotChanges().map(action =>{
        if(action.payload.exists === false){
            return null;
        }
        else{
            const data = action.payload.data() as Provinces;
            data.id = action.payload.id;
            return data;
        }
    })
    return this.province;
}
updateRecetProvince(province:Provinces){
    this.recetDocProvince = this.afs.doc(`provinces/${province.id}`)
    this.recetDocProvince.update(province)
}
deleteRecetProvince(id){
    this.recetDocProvince = this.afs.doc(`provinces/${id.id}`)
    this.recetDocProvince.delete()
  }
//Armenian Provinces end




//Armenian Rivers start
addNewRiver(river:Rivers){
    this.recetCollectionRiver.add(river)
}

getAllRecetsRivers():Observable<Rivers[]>{
    this.rivers = this.recetCollectionRiver.snapshotChanges()
    .map(changes =>{
        return changes.map(action =>{
            const data = action.payload.doc.data() as Rivers;
            data.id = action.payload.doc.id;
            return data; 
        })
    })
    return this.rivers;
}

getOneRecetRiver(idRecet:string){
    this.recetDocRiver = this.afs.doc<Rivers>(`rivers/${idRecet}`);
    this.river = this.recetDocRiver.snapshotChanges().map(action =>{
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
updateRecetRiver(river:Rivers){
    this.recetDocRiver = this.afs.doc(`rivers/${river.id}`)
    this.recetDocRiver.update(river)
}
deleteRecetRiver(id){
    this.recetDocRiver = this.afs.doc(`rivers/${id.id}`)
    this.recetDocRiver.delete()
  }
//Armenian Rivers end




//Armenian Pools start
addNewPool(pool:Pools){
    this.recetCollectionPool.add(pool)
}

getAllRecetsPools():Observable<Pools[]>{
    this.pools = this.recetCollectionPool.snapshotChanges()
    .map(changes =>{
        return changes.map(action =>{
            const data = action.payload.doc.data() as Pools;
            data.id = action.payload.doc.id;
            return data; 
        })
    })
    return this.pools;
}

getOneRecetPool(idRecet:string){
    this.recetDocPool = this.afs.doc<Pools>(`pools/${idRecet}`);
    this.pool = this.recetDocPool.snapshotChanges().map(action =>{
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
    this.recetDocPool = this.afs.doc(`pools/${pool.id}`)
    this.recetDocPool.update(pool)
}
deleteRecetPool(id){
    this.recetDocPool = this.afs.doc(`pools/${id.id}`)
    this.recetDocPool.delete()
  }
//Armenian Pools end







//Armenian Mountains start
addNewMountain(mountain:Mountains){
    this.recetCollectionMountain.add(mountain)
}

getAllRecetsMountains():Observable<Mountains[]>{
    this.mountains = this.recetCollectionMountain.snapshotChanges()
    .map(changes =>{
        return changes.map(action =>{
            const data = action.payload.doc.data() as Mountains;
            data.id = action.payload.doc.id;
            return data; 
        })
    })
    return this.mountains;
}

getOneRecetMountain(idRecet:string){
    this.recetDocMountain = this.afs.doc<Mountains>(`mountains/${idRecet}`);
    this.mountain = this.recetDocMountain.snapshotChanges().map(action =>{
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
updateRecetMountain(mountain:Mountains){
    this.recetDocMountain = this.afs.doc(`mountains/${mountain.id}`)
    this.recetDocMountain.update(mountain)
}
deleteRecetMountain(id){
    this.recetDocMountain = this.afs.doc(`mountains/${id.id}`)
    this.recetDocMountain.delete()
  }
//Armenian Mountains end


}