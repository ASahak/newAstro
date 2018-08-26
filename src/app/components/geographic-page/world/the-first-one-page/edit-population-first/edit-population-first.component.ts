


import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstPopulation} from "../../../../../models/FirstPopulation";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-population-first',
  templateUrl: './edit-population-first.component.html',
  styleUrls: ['./edit-population-first.component.css']
})
export class EditPopulationFirstComponent implements OnInit {
  public idRecet:string;
  public isValue:string;
public isLogin: boolean;
frtpops:FirstPopulation[];
frtpop: FirstPopulation = {
    id:"",
    name:"",
    population:"",
    publication:""
}
    constructor(
      public recetService:GeoMixResetService,
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
          this.recetService.getOneRecetFirstPopulation(this.idRecet).subscribe(frtpop => this.frtpop = frtpop);
      }
      onModificarRecetFirstPopulation({value} : {value:FirstPopulation}){
        value.id = this.idRecet;
          this.recetService.updateRecetFirstPopulation(value)
          this.router.navigate(['./geographic/world/the-first-one/country/population'])
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
