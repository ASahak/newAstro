

import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {AstronomicMixService} from "../../../../services/astronomic-mix.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {Planets} from "../../../../models/Planets";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
import { FlashMessagesService } from 'angular2-flash-messages';
interface TestObject {
  name:string;
  value:string;
}

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css']
})

export class PlanetsPageComponent implements OnInit {
 @ViewChildren("tref") el:QueryList<any>;
 private static VIEW_LOADED = false;
  public classPlanetActive:boolean = false;
  public workedClass:any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  imageURL: string = '';

  sortingArray:TestObject[] = [
    {name:'Աստերոիդ', value:'asteroid'}, 
    {name:'Քյուբիվան', value:'qbone'}, 
    {name:'Պլուտինո', value:'plutino'}, 
    {name:'Ցրված սկավառակ', value:'scattered-disc'}, 
    {name:'Օօրտի ամպի մարմին', value:'oort-cloud'}
  ];
  public typArray:{} = [
    {name:'Մոլորակ', value:'planet'},
    {name:'Գաճաճ մոլորակ', value:'smallPlanet'},
    {name:'Այլ թեկնածուներ', value:'anotherAplicante'},
  ]
  private contentObject = {};
  styleForm;
  indexReload:Number;
  public styleFormEmpty:Object = {};
  public positionTop = -200; 
  public UrlLocationHash:string;
  public isLogin:boolean;
  public idRecet:string;
  public isValue:string;
  public isImage:boolean;
  planets:Planets[];
  planet: Planets = {
    id:'',
    name:'',
    diameter:'',
    weight:'',
    farEarth:'',
    rotOs:'',
    temperature:null,
    stoogeCount:null,
    discoverYear:null,
    inSort:'',
    periheli:'',
    apoheli:'',
    bigAnomalia:'',
    speed:'',
    image:'',
    description:'',
    type:'',
    publication:''
  }
  constructor(
       public resetService:AstronomicMixService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage,
      public flashMensaje:FlashMessagesService
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
    const path = `PlanetsPhotos/${new Date().getTime()}_${file.name}`;
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
    var interData = setInterval(()=>{
      if(this.planets != undefined){
        Array.prototype.map.call(this.planets, (elm, ind)=>{
          if(elm.id == this.route.snapshot.params['id']){
            this.indexReload = ind
          }
        })
        clearInterval(interData)
      }
    }, 1000)
    this.onComprobarUserLogin();
  }
 
  ngAfterViewChecked(){
    PlanetsPageComponent.VIEW_LOADED = false;
    if (! this.el.first) {
      return;
    }
    if (! PlanetsPageComponent.VIEW_LOADED) {
      PlanetsPageComponent.VIEW_LOADED = true;
      this.workedClass = ()=>{
        this.el.forEach((elm, mls)=>{
            $(elm.nativeElement).removeClass('planetActive')
            if(elm.nativeElement.innerText ==  this.route.snapshot.params['name']){
              $(elm.nativeElement).addClass('planetActive')
            }
          })
        }
      }
      this.workedClass();
    }

  bindYourContent(yourCont){
    this.contentObject = yourCont;
  }
  toggleClassActive(){
    var width_wind_max_xl = window.matchMedia("(max-width:576px)");
    window.onresize = () => {
      width_wind_max_xl = window.matchMedia("(max-width:576px)")
    }
    if(width_wind_max_xl.matches){
      setTimeout(()=>{
        window.scrollTo({
          top: document.querySelector('.cardPlanetMore').getClientRects()[0].top,
          behavior: "smooth"
        });
      }, 500)
    }
    this.workedClass();
  }

  onChangeAddPlanets({value}:{value:Planets}){
    value.image = this.imageURL;
    value.publication = (new Date()).getTime();
    this.flashMensaje.show(`Ավելացվել է:`,
    {cssClass:"alert-success", timeout:3000})
    this.resetService.addNewPlanets(value)
    this.isImage = false;
}

 todosRecets(){
    this.resetService.getAllRecetsPlanets().subscribe(planets =>this.planets = planets);
  }
  
 
onClickDelete(id, allData){
  if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
    this.resetService.deleteRecetPlanets(id);
    if(allData.length > 1){
      for(let key =0; key < allData.length ; key++){
        if(allData[key] == id){
          if(key == 0){
            setTimeout(function(){
              window.location.href = '/astronomic/planets/'+allData[1].name +'/'+ allData[1].id;
            }, 1000)
          }
          else{
            setTimeout(function(){
              window.location.href = '/astronomic/planets/'+allData[0].name +'/'+ allData[0].id;
            }, 1000)
          }
        }
      }
    }
    else{
      window.location.href = '/astronomic/planets'
    }
    
  }
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
onlogOut(){
  this.authService.logOut()
}
}

