import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {Asia} from "../../../../../models/AsiaPhotos";
import {Europa} from "../../../../../models/EuropaPhotos";
import {Africa} from "../../../../../models/AfricaPhotos";
import {Australia} from "../../../../../models/AustraliaPhotos";
import {Antarktida} from "../../../../../models/AntarktidaPhotos";
import {NorthAmerica} from "../../../../../models/NorthAmericaPhotos";
import {SouthAmerica} from "../../../../../models/SouthAmericaPhotos";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-all-continents',
  templateUrl: './edit-all-continents.component.html',
  styleUrls: ['./edit-all-continents.component.css']
})
export class EditAllContinentsComponent implements OnInit {
//AsiaPage
  asias:Asia[];
  idRecet:string;
  public isLogin:boolean;
  public isAsia:boolean;
  asia: Asia = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//AsiaPage
  //EuropaPage
  europas:Europa[];
  public isEuropa:boolean;
  europa: Europa = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//EuropaPage
  //AfricaPage
  africas:Africa[];
  public isAfrica:boolean;
  africa: Africa = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//AfricaPage

 //AustraliaPage
  australias:Australia[];
  public isAustralia:boolean;
  australia: Australia = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//AustraliaPage

//AntarktidaPage
  antarktidas:Antarktida[];
  public isAntarktida:boolean;
  antarktida: Antarktida = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//AntarktidaPage

//NorthAmericaPage
  northamericas:NorthAmerica[];
  public isNorthAmerica:boolean;
  northamerica: NorthAmerica = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//NorthAmericaPage

//SouthAmericaPage
  southamericas:SouthAmerica[];
  public isSouthAmerica:boolean;
  southamerica: SouthAmerica = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
  }
//SouthAmericaPage

  constructor(
    public recetService:ContinetsResetService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private url:LocationStrategy
  ) {

  }

 ngOnInit() {
     this.onComprobarUserLogin();
    this.getDetailsRecet();
    this.onInitContinentBool()

  }
    onInitContinentBool(){
        const splitUrl = this.url.path().split("/");
         splitUrl.forEach(function (value, key) {
             if(value == "asia"){
                 this.isAsia = true
             }
             if(value == "europa"){
                 this.isEuropa = true
             }
             if(value == "africa"){
                 this.isAfrica = true
             }
             if(value == "australia"){
                 this.isAustralia = true
             }
             if(value == "antarktida"){
                 this.isAntarktida = true
             }
             if(value == "north-america"){
                 this.isNorthAmerica= true
             }
             if(value == "south-america"){
                 this.isSouthAmerica= true
             }

         }.bind(this))
    }
    getDetailsRecet(){
        this.idRecet = this.route.snapshot.params['id'];
        this.recetService.getOneRecetAsia(this.idRecet).subscribe(asia => this.asia = asia);
        this.recetService.getOneRecetEuropa(this.idRecet).subscribe(europa => this.europa = europa);
        this.recetService.getOneRecetAfrica(this.idRecet).subscribe(africa => this.africa = africa);
        this.recetService.getOneRecetAustralia(this.idRecet).subscribe(australia => this.australia = australia);
        this.recetService.getOneRecetAntarktida(this.idRecet).subscribe(antarktida => this.antarktida = antarktida);
        this.recetService.getOneRecetNorthAmerica(this.idRecet).subscribe(northamerica => this.northamerica = northamerica);
        this.recetService.getOneRecetSouthAmerica(this.idRecet).subscribe(southamerica => this.southamerica = southamerica);
    }
//AsiaPage
    onModificarRecetAsia({value} : {value:Asia}){
        value.id = this.idRecet;
        this.recetService.updateRecetAsia(value)
        this.router.navigate(['./geographic/world/continential/asia/'])

    }
//AsiaPage

//EuropaPage
    onModificarRecetEuropa({value} : {value:Europa}){
        value.id = this.idRecet;
        this.recetService.updateRecetEuropa(value)
        this.router.navigate(['./geographic/world/continential/europa/'])
    }
//EuropaPage

 //AfricaPage
    onModificarRecetAfrica({value} : {value:Africa}){
        value.id = this.idRecet;
        this.recetService.updateRecetAfrica(value)
        this.router.navigate(['./geographic/world/continential/africa/'])
    }
//AfricaPage

 //AustraliaPage
    onModificarRecetAustralia({value} : {value:Australia}){
        value.id = this.idRecet;
        this.recetService.updateRecetAustralia(value)
        this.router.navigate(['./geographic/world/continential/australia/'])
    }
//AustraliaPage

 //AntarktidaPage
    onModificarRecetAntarktida({value} : {value:Antarktida}){
        value.id = this.idRecet;
        this.recetService.updateRecetAntarktida(value)
        this.router.navigate(['./geographic/world/continential/antarktida/'])
    }
//AntarktidaPage

 //NorthAmericaPage
    onModificarRecetNorthAmerica({value} : {value:NorthAmerica}){
        value.id = this.idRecet;
        this.recetService.updateRecetNorthAmerica(value)
        this.router.navigate(['./geographic/world/continential/north-america/'])
    }
//NorthAmericaPage

 //SouthAmericaPage
    onModificarRecetSouthAmerica({value} : {value:SouthAmerica}){
        value.id = this.idRecet;
        this.recetService.updateRecetSouthAmerica(value)
        this.router.navigate(['./geographic/world/continential/south-america/'])
    }
//SouthAmericaPage


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
