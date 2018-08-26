

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {Aglomeration} from "../../../../../models/Aglomeration";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-aglomerations',
  templateUrl: './edit-aglomerations.component.html',
  styleUrls: ['./edit-aglomerations.component.css']
})
export class EditAglomerationsComponent implements OnInit {

  public isValue:string;
   idRecet:string;
   aglomerations:Aglomeration[];
   public isLogin: boolean;
   aglomeration: Aglomeration = {
     id:"",
     name:"",
     country:"",
     population:"",
     includes:"",
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
          this.recetService.getOneRecetAglomeration(this.idRecet).subscribe(aglomeration => this.aglomeration = aglomeration);
      }
      onModificarRecetAglomeration({value} : {value:Aglomeration}){
          value.id = this.idRecet;
          this.recetService.updateRecetAglomeration(value)
          this.router.navigate(['./geographic/world/aglomeration'])
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
