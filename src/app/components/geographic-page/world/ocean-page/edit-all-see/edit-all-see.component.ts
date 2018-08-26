

import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {OceanSee} from "../../../../../models/oceanSee";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-all-see',
  templateUrl: './edit-all-see.component.html',
  styleUrls: ['./edit-all-see.component.css']
})
export class EditAllSeeComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  public isImage:boolean;
  public isValue:string;
public OceanArm:string;
   idRecet:string;
    public isLogin:boolean;
    sees:OceanSee[];
    see: OceanSee = {
        id:"",
        name:"",
        area:"",
        in_area:"",
        deep:"",
        description:"",
        veryDeep:"",
        url:"",
        solty:"",
        publication:""
    }

    constructor(
      public recetService:OceanResetService,
      public authService:AuthService,
        public route: ActivatedRoute,
        public router:Router,
        private afStorage: AngularFireStorage
    ) {

    }
    upload(event) {
      const file = event.target.files[0]
      const path = `OceanSeePhotos/${new Date().getTime()}_${file.name}`;
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
        this.onInitContinentBool();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetOceanSee(this.idRecet).subscribe(see => this.see = see);
      }
      onModificarRecetOceanSee({value} : {value:OceanSee}){
          value.id = this.idRecet;
          value.url = this.imageURL;
          if(value.url == undefined ){
            value.url = this.see.url
          }
          this.recetService.updateRecetOceanSee(value)
          this.router.navigate(['./geographic/world/ocean/'+this.OceanArm+'/ծովեր'])
      }
      onInitContinentBool(){
          var uri = this.router.url;
          var res = decodeURIComponent(uri);
           const splitUrl = res.split("/");
            splitUrl.forEach(function (value, key) {
                if(value == "Խաղաղ"){
                  this.OceanArm = value;
                }
                if(value == "Հնդկական"){
                  this.OceanArm = value;
                }
                if(value == "Հս-Սառուցյալ"){
                  this.OceanArm = value;
                }
                if(value == "Ատլանտյան"){
                  this.OceanArm = value;
                }
            }.bind(this))
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
