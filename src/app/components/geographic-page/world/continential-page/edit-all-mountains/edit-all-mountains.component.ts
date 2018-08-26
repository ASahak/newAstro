

import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Mountains} from "../../../../../models/MountainsContinent";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-all-mountains',
  templateUrl: './edit-all-mountains.component.html',
  styleUrls: ['./edit-all-mountains.component.css']
})
export class EditAllMountainsComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  mountains:Mountains[];
  idRecet:string;
  public isLogin:boolean;
  public isImage:boolean;
  public isValue:string;
  mountain: Mountains = {
    id:"",
    pic:"",
    high:"",
    url:"",
    ridge:"",
    in_area:"",
    description:"",
    publication:""
  }
  constructor(
    public recetService:ContinentsStatesService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private url:LocationStrategy,
      private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin()
    this.getDetailsRecet()
    this.onInitContinentBool()
  }
  onInitContinentBool(){
       const splitUrl = this.url.path().split("/");
        splitUrl.forEach(function (value, key) {
            if(value == "asia"){
                this.isValue = 'asia'
            }
            if(value == "europa"){
                this.isValue = 'europa'
            }
            if(value == "africa"){
                this.isValue = 'africa'
            }
            if(value == "australia"){
                this.isValue = 'australia'
            }
            if(value == "antarktida"){
                this.isValue = 'antarktida'
            }
            if(value == "north-america"){
                this.isValue = 'north-america'
            }
            if(value == "south-america"){
                this.isValue = 'south-america'
            }
        }.bind(this))
   }
   getDetailsRecet(){
      this.idRecet = this.route.snapshot.params['id'];
      this.recetService.getOneRecetMountains(this.idRecet).subscribe(mountain => this.mountain = mountain);
    }
    upload(event) {
      const file = event.target.files[0]
      const path = `MountainsContinentPhotos/${new Date().getTime()}_${file.name}`;
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

    onModificarRecetMountains({value} : {value:Mountains}){
        value.id = this.idRecet;
        //(value.url == undefined) ? value.url = this.state.url:value.url = this.imageURL;
        value.url = this.imageURL;
        if(value.url == undefined ){
          value.url = this.mountain.url
        }
        this.recetService.updateRecetMountains(value)
        this.router.navigate(['./geographic/world/continential/'+this.isValue+'/mountains'])
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
