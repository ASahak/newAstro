

import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../services/astronomic-mix.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {SunPlanet} from "../../../../models/SunPlanet";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-sun-page',
  templateUrl: './sun-page.component.html',
  styleUrls: ['./sun-page.component.css']
})
export class SunPageComponent implements OnInit {
  styleForm;
  public styleFormEmpty:Object = {};
  public positionTop = -200; 
  public isLogin:boolean;
  public idRecet:string;
  public isValue:string;
  sunPlanets:SunPlanet[];
  sunPlanet: SunPlanet = {
      id:"",
      title:"",
      value:"",
      publication:""
  }
  constructor(
       public resetService:AstronomicMixService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      public flashMensaje:FlashMessagesService
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
  onChangeAddSunPlanet({value}:{value:SunPlanet}){
    value.publication = (new Date()).getTime();
    this.resetService.addNewSunPlanet(value)
    this.flashMensaje.show(`Ավելացվել է:`,
    {cssClass:"alert-success", timeout:3000})
}

 todosRecets(){
    this.resetService.getAllRecetsSunPlanet().subscribe(sunPlanets =>this.sunPlanets = sunPlanets);
  }

onClickDelete(id){
  if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
      this.resetService.deleteRecetSunPlanet(id);
  }
}
}

