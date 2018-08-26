


import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {OceanSeeCoc} from "../../../../../models/oceanSeeCoc";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-all-covacoc',
  templateUrl: './edit-all-covacoc.component.html',
  styleUrls: ['./edit-all-covacoc.component.css']
})
export class EditAllCovacocComponent implements OnInit {

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
    seescoc:OceanSeeCoc[];
    seecoc: OceanSeeCoc = {
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
      const path = `OceanSeeCocPhotos/${new Date().getTime()}_${file.name}`;
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
          this.recetService.getOneRecetOceanSeeCoc(this.idRecet).subscribe(seecoc => this.seecoc = seecoc);
      }
      onModificarRecetOceanSeeCoc({value} : {value:OceanSeeCoc}){
          value.id = this.idRecet;
          value.url = this.imageURL;
          if(value.url == undefined ){
            value.url = this.seecoc.url
          }
          this.recetService.updateRecetOceanSeeCoc(value)
          this.router.navigate(['./geographic/world/ocean/'+this.OceanArm+'/ծովածոցեր'])
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
