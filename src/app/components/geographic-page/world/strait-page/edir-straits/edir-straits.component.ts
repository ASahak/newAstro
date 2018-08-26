


import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {Strait} from "../../../../../models/Strait";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edir-straits',
  templateUrl: './edir-straits.component.html',
  styleUrls: ['./edir-straits.component.css']
})
export class EdirStraitsComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  public isImage:boolean;
  public isValue:string;
   idRecet:string;
   straits:Strait[];
   public isLogin: boolean;
   strait: Strait = {
     id:"",
     name:"",
     long:"",
     width:"",
     minDeep:"",
     binToFrom:"",
     url:"",
     description:"",
     publication:""
   }
    constructor(
      public recetService:GeoMixResetService,
      public authService:AuthService,
        public route: ActivatedRoute,
        public router:Router,
        private afStorage: AngularFireStorage
    ) {

    }
    upload(event) {
      const file = event.target.files[0]
      const path = `StraitPhotos/${new Date().getTime()}_${file.name}`;
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.afStorage.upload(path, file)
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.task.downloadURL();
      console.log(this.downloadURL.toPromise().then(
          res => {
            console.log(res);
            this.imageURL = res
          }
        ))
        this.isImage = true;
  }

   ngOnInit() {
       this.onComprobarUserLogin();
       this.getDetailsRecet();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetStrait(this.idRecet).subscribe(strait => this.strait = strait);
      }
      onModificarRecetStrait({value} : {value:Strait}){
          value.id = this.idRecet;
          value.url = this.imageURL;
          if(value.url == undefined ){
            value.url = this.strait.url
          }
          this.recetService.updateRecetStrait(value)
          this.router.navigate(['./geographic/world/strait'])
      }
       onComprobarUserLogin(){
          this.authService.getAuth().subscribe(auth =>{
              if(auth){
                  this.isLogin = true;
              }
              else{
                  this.isLogin = false;
              }
          })
      }

}
