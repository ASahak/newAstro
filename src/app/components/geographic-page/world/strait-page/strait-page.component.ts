

import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { GeoMixResetService } from "../../../../services/geo-mix-reset.service";
import { Strait } from "../../../../models/Strait";
import { AuthService } from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { animate, style, transition, trigger } from '@angular/animations';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-strait-page',
  templateUrl: './strait-page.component.html',
  styleUrls: ['./strait-page.component.css'],
  animations: [
    trigger('scale', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('.25s ease-out', style({ opacity: '1', transform:'scale(1)' })),
        ]),
        transition(':leave', [
            style({ opacity: '.6' }),
            animate('.25s ease-out', style({ opacity: '0', transform:'scale(0.5)' })),
        ]),
    ])]
})
export class StraitPageComponent implements OnInit {

    private objFixed: any ={};
    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;
    uploadState: Observable<any>;
    styleForm;
    public isImage:Boolean = false;
    isMore:Boolean = false;
    imageURL: string;
    public idRecet:string;
    public isValue:string;
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
    moreStraight(data){
        console.log(data)
        this.objFixed = {url: data.url, name:data.name, desc:data.description} 
        if(Object.keys(this.objFixed).length == 0){
            this.isMore = false;
        }
        else{
            this.isMore = true;
        }
        window.onclick = (e:Event)=>{
            console.log((<HTMLElement>e.target).className)
            if((<HTMLElement>e.target).className.split(' ')[0] == 'moreStraightDiv'){
            this.isMore = false;
            }
        }
    }
    closeModal(){
        this.isMore = false;
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
        this.todosRecets();
        this.onComprobarUserLogin();
    }

      onChangeAddStrait({value}:{value:Strait}){
        value.url = this.imageURL;
          value.publication = (new Date()).getTime();
          //this.authService.getAuth().subscribe(city =>{
              this.recetService.addNewStrait(value);
              this.isImage = false;
              this.imageURL = '';
              
          //})
      }
       todosRecets(){
          this.recetService.getAllRecetStrait().subscribe(straits =>this.straits = straits);
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
              this.recetService.deleteRecetStrait(id);
              //this.router.navigate(['/'])

          }
      }
}
