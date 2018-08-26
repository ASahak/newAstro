

import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {SunPlanet} from "../../../../../models/SunPlanet";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-sun-page',
  templateUrl: './edit-sun-page.component.html',
  styleUrls: ['./edit-sun-page.component.css']
})
export class EditSunPageComponent implements OnInit {
  public isValue:string;
  private idRecet:string;
   public isLogin: boolean;
   sunPlanets:SunPlanet[];
   sunPlanet: SunPlanet = {
       id:"",
       title:"",
       value:"",
       publication:""
   }
    constructor(
      public recetService:AstronomicMixService,
      public authService:AuthService,
        public route: ActivatedRoute,
        public router:Router
    ) {

    }


   ngOnInit() {
       this.onComprobarUserLogin();
       this.getDetailsRecet();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetSunPlanet(this.idRecet).subscribe(sunPlanet => this.sunPlanet = sunPlanet);
      }
      onModificarRecetSunPlanet({value} : {value:SunPlanet}){
          value.id = this.idRecet;
          this.recetService.updateRecetSunPlanet(value)
          this.router.navigate(['./astronomic/sun'])
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
