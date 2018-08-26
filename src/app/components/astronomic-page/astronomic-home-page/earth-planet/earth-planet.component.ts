import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../services/astronomic-mix.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {EarthPlanet} from "../../../../models/EarthPlanet";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-earth-planet',
  templateUrl: './earth-planet.component.html',
  styleUrls: ['./earth-planet.component.css']
})
export class EarthPlanetComponent implements OnInit {
  public isLogin:boolean;
  public idRecet:string;
  styleForm;
  public styleFormEmpty:Object = {};
  public isValue:string;
  public positionTop = -200; 
  earthPlanets:EarthPlanet[];
  earthPlanet: EarthPlanet = {
      id:"",
      title:"",
      value:"",
      publication:""
  }
  constructor(
       public resetService:AstronomicMixService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router
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
onChangeAddEarthPlanet({value}:{value:EarthPlanet}){
    value.publication = (new Date()).getTime();
    this.resetService.addNewEarthPlanet(value)
}

 todosRecets(){
    this.resetService.getAllRecetsEarthPlanet().subscribe(earthPlanets =>this.earthPlanets = earthPlanets);
  }

onClickDelete(id){
  if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
      this.resetService.deleteRecetEarthPlanet(id);
  }
}
}
