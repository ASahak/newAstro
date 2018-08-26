
import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {OceanSee} from "../../../../../models/oceanSee";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-see-all-ocean',
  templateUrl: './see-all-ocean.component.html',
  styleUrls: ['./see-all-ocean.component.css']
})
export class SeeAllOceanComponent implements OnInit {


    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    uploadState: Observable<any>;
    styleForm;
    public isImage:Boolean = false;
    imageURL: string;
    public idRecet:string;
    public isValue:string;
    public OceanArm:string;
  sees:OceanSee[];
  public isLogin: boolean;
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
        private url:LocationStrategy,
        private afStorage: AngularFireStorage
    ) {

    }
    AddForm(){
        this.styleForm = Object.assign({
            top:120+'px',
            visibility:'visible',
            zIndex:'2223'
          })
          window.onclick = (e)=>{
              console.log((<HTMLElement>e.target).className.split(' ')[0])
            if((<HTMLElement>e.target).className.split(' ')[0] == 'formAdded'){
                this.styleForm = Object.assign({
                    top:0+'px',
                    visibility:'hidden',
                    zIndex:'-1'
                })          
            }
          }
    }
    closeForm(){
      this.styleForm = Object.assign({
        top:0+'px',
        visibility:'hidden',
        zIndex:'-1'
      })
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
        this.todosRecets();
        this.onComprobarUserLogin();
        this.onInitContinentBool();
        this.someMethod()
    }
    someMethod(){


  }
    onInitContinentBool(){
        var uri = this.router.url;
        var res = decodeURIComponent(uri);
         const splitUrl = res.split("/");
          splitUrl.forEach(function (value, key) {
              if(value == "Խաղաղ"){
                this.OceanArm = value;
                  this.isValue = 'xaxax'
              }
              if(value == "Հնդկական"){
                this.OceanArm = value;
                  this.isValue = 'india'
              }
              if(value == "Հս-Սառուցյալ"){
                this.OceanArm = value;
                  this.isValue = 'north-ice'
              }
              if(value == "Ատլանտյան"){
                this.OceanArm = value;
                  this.isValue = 'atlantic'
              }
          }.bind(this))
     }
      onChangeAddOceanSee({value}:{value:OceanSee}){
        value.url = this.imageURL;
          value.publication = (new Date()).getTime();
          //this.authService.getAuth().subscribe(city =>{
              this.recetService.addNewOceanSee(value);
              this.isImage = false;
              this.imageURL = '';
          //})
      }
       todosRecets(){
          this.recetService.getAllRecetOceanSee().subscribe(sees =>this.sees = sees);
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
      onClickDelete(id){
          if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
              this.recetService.deleteRecetOceanSee(id);
              //this.router.navigate(['/'])

          }
      }
}
