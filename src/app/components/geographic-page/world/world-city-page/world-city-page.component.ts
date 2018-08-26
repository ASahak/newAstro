import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import { animate, style, transition, trigger } from '@angular/animations';
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {WorldCity} from "../../../../models/WorldCity";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-world-city-page',
  templateUrl: './world-city-page.component.html',
  styleUrls: ['./world-city-page.component.css'],
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
export class WorldCityPageComponent implements OnInit {
  @ViewChild('query') queryFocus:ElementRef;
  @ViewChild('label') labelFocus:ElementRef;
  @ViewChild('mapClickUl') mapClickUl:ElementRef;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadWorldCity: Observable<any>;
  styleForm;
  imageURL: string;
  public isImage:Boolean=false;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  public isCount:boolean =  true;
  searchClient: WorldCity[];
  wcitys:WorldCity[];
  wcity: WorldCity = {
    id:"",
    name:"",
    in_the:"",
    population:"",
    area:"",
    url:"",
    density:"",
    in_continent:"",
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
 upload(event) {
   const file = event.target.files[0]
   const path = `WCityPhotos/${new Date().getTime()}_${file.name}`;
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
  ngOnInit() {
    this.todosRecets();
    this.onComprobarUserLogin();
    this.isValue = '';
  }
  onChangeAddWorldCity({value}:{value:WorldCity}){
    value.url = this.imageURL;
    console.log(value)
    value.publication = (new Date()).getTime();
    this.statesService.addNewWorldCity(value);
    this.isImage = false;
    this.imageURL = '';
}
  filterContinent(event:Event, th):void{
    Array.prototype.map.call(this.mapClickUl.nativeElement.children, (elm)=>{
      (<HTMLElement>elm).style.background = 'none';
      (<HTMLElement>elm.children[0]).style.color = '#000';
    });
    (<HTMLElement>event.target).parentElement.style.background = '#2497e391';
    (<HTMLElement>event.target).style.color = '#fff';
    if(th == 'all'){
      this.isCount = true;
    }
    else{
      this.isCount = false;
      this.isValue = th
    }
    
  }
  search(query:string){
  this.searchClient = (query) ? this.wcitys.filter(wcity => wcity.name.toLowerCase().includes(query.toLowerCase())):this.wcitys;
  }
  todosRecets(){
    //this.searchClient = this.states
  this.statesService.getAllRecetsWorldCity().subscribe(wcitys =>this.wcitys = wcitys);
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
      this.statesService.deleteRecetWorldCity(id);
    }
  }
}
