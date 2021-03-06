

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import { animate, style, transition, trigger } from '@angular/animations';
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../../services/auth.service";
import {Pools} from "../../../../../models/PoolsContinent";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-pools-all-continents',
  templateUrl: './pools-all-continents.component.html',
  styleUrls: ['./pools-all-continents.component.css'],
  animations: [
        trigger('fadeIn', [
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
export class PoolsAllContinentsComponent implements OnInit {
    @ViewChild('query') queryFocus:ElementRef;
    @ViewChild('label') labelFocus:ElementRef;
    styleForm;
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
   uploadProgress: Observable<number>;
   downloadURL: Observable<string>;
   uploadState: Observable<any>;
   public isImage:Boolean = false;
   imageURL: string;
   public idRecet:string;
   public isLogin:boolean;
   public isValue:string;
   searchClient: Pools[];
   pools:Pools[];
   pool: Pools = {
       id:"",
       name:"",
       deep:"",
       url:"",
       area:"",
       in_area:"",
       solty:"",
       description:"",
       publication:""
   }

  constructor(
      public statesService:ContinentsStatesService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private url:LocationStrategy,
      private afStorage: AngularFireStorage
  ) {
  }

  setInputFocus(event:Event): void {
    this.labelFocus.nativeElement.style.top = '-20px'
    this.labelFocus.nativeElement.style.fontSize = '11px'
}
setInputFocusOut(event:Event): void {
    if((<HTMLInputElement>event.target).value == ''){
        this.labelFocus.nativeElement.style.top = '7px'
        this.labelFocus.nativeElement.style.fontSize = '15px'
    }
    else{
        this.labelFocus.nativeElement.style.top = '-20px'
    this.labelFocus.nativeElement.style.fontSize = '11px'
    }
}
  AddForm(){
    this.styleForm = Object.assign({
        top:60+'px',
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
    const path = `PoolsPhotos/${new Date().getTime()}_${file.name}`;
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
      this.onInitContinentBool();
      this.onComprobarUserLogin()
  }
  search(query:string){
    this.searchClient = (query) ? this.pools.filter(pool => pool.name.toLowerCase().includes(query.toLowerCase())):this.pools;
  }
    onChangeAddPools({value}:{value:Pools}){
        value.url = this.imageURL;
        console.log(value)
        value.publication = (new Date()).getTime();
        this.statesService.addNewPools(value)
        this.isImage = false;
        this.imageURL = '';
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
     todosRecets(){
         //this.searchClient = this.states
        this.statesService.getAllRecetsContinentsPools().subscribe(pools =>this.pools = pools);
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
          this.statesService.deleteRecetPools(id);
      }
    }
}
