import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {States} from "../../../../../models/States";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-all-states-continants',
  templateUrl: './edit-all-states-continants.component.html',
  styleUrls: ['./edit-all-states-continants.component.css']
})
export class EditAllStatesContinantsComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;
  uploadProgressFlag: Observable<number>;
  downloadURLFlag: Observable<string>;
  uploadStateFlag: Observable<any>;
  imageFlagURL: string;
  imageURL: string;
  states:States[];
  idRecet:string;
  public isLogin:boolean;
  public isImage:boolean;
  public isImageFlag:boolean;
  public isValue:string;
  state: States = {
    id:"",
    name:"",
    capital:"",
    population:"",
    area:"",
    url:"",
    code:'',
    in_area:"",
    flag:"",
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
      this.recetService.getOneRecetStates(this.idRecet).subscribe(state => this.state = state);
    }
    upload(event) {
      const file = event.target.files[0]
      const path = `StatePhotos/${new Date().getTime()}_${file.name}`;
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
  uploadFlag(event){
    const file = event.target.files[0]
    const path = `StatePhotosFlag/${new Date().getTime()}_${file.name}`;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.afStorage.upload(path, file)
    this.uploadProgressFlag = this.task.percentageChanges();
    this.downloadURLFlag = this.task.downloadURL();
    console.log(this.downloadURLFlag.toPromise().then(
        res => {
          console.log(res);
          this.imageFlagURL = res
        }
      ))
      this.isImageFlag = true;
  }

    onModificarRecetStates({value} : {value:States}){
        value.id = this.idRecet;
        value.url = this.imageURL;
        value.flag = this.imageFlagURL;
        (value.url == undefined) ? value.url = this.state.url:value.url = this.imageURL;
        (value.flag == undefined) ? value.flag = this.state.flag:value.flag = this.imageFlagURL;
        
        // if(value.url == undefined ){
        //   value.url = this.state.url;
        // }
        this.recetService.updateRecetState(value)
        this.router.navigate(['./geographic/world/continential/'+this.isValue+'/state'])
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
