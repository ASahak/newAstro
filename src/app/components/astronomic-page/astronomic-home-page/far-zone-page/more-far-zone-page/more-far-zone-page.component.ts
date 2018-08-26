
import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {FarZone} from "../../../../../models/FarZone";
import {FarZoneMore} from "../../../../../models/FarZoneMore";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-more-far-zone-page',
  templateUrl: './more-far-zone-page.component.html',
  styleUrls: ['./more-far-zone-page.component.css']
})
export class MoreFarZonePageComponent implements OnInit {
  styleForm;
  public styleFormEmpty:Object = {};
  public positionTop = -200; 
  indexReload:Number;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  imageURL: string = '';
  public isLogin:boolean;
  public idRecet:string;
  public isValue:string;
  farZones:FarZone[];
  farZone: FarZone = {
    id:'',
    name:'',
    description:'',
    img:'',
    publication:''
  }
  farZoneMores:FarZoneMore[];
  farZoneMore: FarZoneMore = {
    id:'',
    name:'',
    type:'',
    periheli:'',
    apoheli:'',
    rotSun:'',
    discover:null,
    stooge:null,
    publication:null
  }
  constructor(
       public resetService:AstronomicMixService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage
  ) {
    var self = this,
    topMinus = 200;
    var width_wind_max_md = window.matchMedia("(max-width: 991px) and (min-width:767px)"),
        width_wind_max_lg = window.matchMedia("(max-width: 1200px) and (min-width:991px)"),
        width_wind_max_sm = window.matchMedia("(max-width: 767px) and (min-width:576px)"),
        width_wind_max_xs = window.matchMedia("(min-width:576px)"),
        width_wind_max_xl = window.matchMedia("(min-width:1200px)");
    window.onresize = () => {
        width_wind_max_md = window.matchMedia("(max-width: 991px) and (min-width:767px)");
        width_wind_max_lg = window.matchMedia("(max-width: 1200px) and (min-width:991px)");
        width_wind_max_sm = window.matchMedia("(max-width: 767px) and (min-width:576px)");
        width_wind_max_xs = window.matchMedia("(min-width:576px)");
        width_wind_max_xl = window.matchMedia("(min-width:1200px)")
    };
    if(width_wind_max_md.matches){
        self.positionTop = -60;
        topMinus = 60;
    }
    if(width_wind_max_lg.matches){
        self.positionTop = -100;
        topMinus = 100;
    }
    if(width_wind_max_sm.matches){
        self.positionTop = -70;
        topMinus = 70;
    }
    if(width_wind_max_xl.matches){
        self.positionTop = -280;
        topMinus = 280;
    }
    if(width_wind_max_xs.matches){
        window.onscroll = function(e){  
            if (this.scrollY < topMinus + 100) {
                if(width_wind_max_md.matches){
                    self.positionTop = -60;
                    topMinus = 60;
                }
                if(width_wind_max_lg.matches){
                    self.positionTop = -100;
                    topMinus = 100;
                }
                if(width_wind_max_sm.matches){
                    self.positionTop = -70;
                    topMinus = 70;
                }
                if(width_wind_max_xl.matches){
                    self.positionTop = -280;
                    topMinus = 280;
                }
            self.positionTop = 0;
            self.positionTop = -this.scrollY/2 - topMinus;
            }
        }
    }
  }

  
  AddForm(){
    this.styleForm = Object.assign({
        top:70+'px',
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
    onChangeAddFarZoneItems({value}:{value:FarZone}){
      value.publication = (new Date()).getTime();
      this.resetService.addNewFarZoneMore(value);
  }
     
    ngOnInit() {
      this.todosRecets();
      var interData = setInterval(()=>{
        if(this.farZones != undefined){
          Array.prototype.map.call(this.farZones, (elm, ind)=>{
            if(elm.id == this.route.snapshot.params['id']){
              this.indexReload = ind
            }
          })
          clearInterval(interData)
        }
      }, 1000)
      this.onComprobarUserLogin();
    }
  
   todosRecets(){
    this.idRecet = this.route.snapshot.params['id'];
      this.resetService.getOneRecetFarZone(this.idRecet).subscribe(farZone =>this.farZone = farZone);
      this.resetService.getAllRecetsFarZone().subscribe(farZones =>this.farZones = farZones);
      this.resetService.getAllRecetsFarZoneMore().subscribe(farZoneMores =>this.farZoneMores = farZoneMores);
    }
    onClickDelete(id){
      if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
        this.resetService.deleteRecetFarZoneMore(id);
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
