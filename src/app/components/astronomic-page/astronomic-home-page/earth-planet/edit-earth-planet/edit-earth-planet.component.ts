


import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {EarthPlanet} from "../../../../../models/EarthPlanet";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-earth-planet',
  templateUrl: './edit-earth-planet.component.html',
  styleUrls: ['./edit-earth-planet.component.css']
})
export class EditEarthPlanetComponent implements OnInit {

  public isValue:string;
  private idRecet:string;
   public isLogin: boolean;
   earthPlanets:EarthPlanet[];
   earthPlanet: EarthPlanet = {
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
          this.recetService.getOneRecetEarthPlanet(this.idRecet).subscribe(earthPlanet => this.earthPlanet = earthPlanet);
      }
      onModificarRecetEarthPlanet({value} : {value:EarthPlanet}){
          value.id = this.idRecet;
          this.recetService.updateRecetEarthPlanet(value)
          this.router.navigate(['./astronomic/earth-planet'])
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
