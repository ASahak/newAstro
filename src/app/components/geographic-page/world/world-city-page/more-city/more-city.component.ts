import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {WorldCity} from "../../../../../models/WorldCity";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-more-city',
  templateUrl: './more-city.component.html',
  styleUrls: ['./more-city.component.css']
})
export class MoreCityComponent implements OnInit {
  imageURL: string;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  public inContinentArea;
  wcitys: WorldCity[];
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
    public recetService:ContinentsStatesService,
     public authService:AuthService,
     public route: ActivatedRoute,
     public router:Router,
     private url:LocationStrategy,
     private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getDetailsRecet();
     this.onComprobarUserLogin();
     var interData = setInterval(()=>{
       if(this.wcity.id != ''){
        switch(this.wcity.in_continent){
          case 'asia':
            this.inContinentArea = 'Ասիա';
            break;
          case 'europa':
            this.inContinentArea = 'Եվրոպա';
            break;
          case 'north-america':
            this.inContinentArea = 'Հս. Ամերիկա';
            break;
          case 'south-america':
            this.inContinentArea = 'Հվ. Ամերիկա';
            break;
          case 'africa':
            this.inContinentArea = 'Աֆրիկա';
            break;
          case 'australia':
            this.inContinentArea = 'Ավստրալիա';
            break;
        }
        clearInterval(interData)
      }
    }, 500)
  }
  getDetailsRecet(){
    this.idRecet = this.route.snapshot.params['id'];
    this.recetService.getOneRecetWorldCity(this.idRecet).subscribe(wcity => this.wcity = wcity);
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
