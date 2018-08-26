

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstArea} from "../../../../../models/FirstArea";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-area-first',
  templateUrl: './edit-area-first.component.html',
  styleUrls: ['./edit-area-first.component.css']
})
export class EditAreaFirstComponent implements OnInit {
  public idRecet:string;
  public isValue:string;
public isLogin: boolean;
frtareas:FirstArea[];
frtarea: FirstArea = {
    id:"",
    name:"",
    area:"",
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
          this.recetService.getOneRecetFirstArea(this.idRecet).subscribe(frtarea => this.frtarea = frtarea);
      }
      onModificarRecetFirstArea({value} : {value:FirstArea}){
        value.id = this.idRecet;
          this.recetService.updateRecetFirstArea(value)
          this.router.navigate(['./geographic/world/the-first-one/country/area'])
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
