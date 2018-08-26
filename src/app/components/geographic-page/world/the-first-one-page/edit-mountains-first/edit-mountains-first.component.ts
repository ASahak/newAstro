

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstMountain} from "../../../../../models/FirstMountain";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-mountains-first',
  templateUrl: './edit-mountains-first.component.html',
  styleUrls: ['./edit-mountains-first.component.css']
})
export class EditMountainsFirstComponent implements OnInit {
  public idRecet:string;
  public isValue:string;
  public isLogin: boolean;
frtmounts:FirstMountain[];
frtmount: FirstMountain = {
    id:"",
    name:"",
    in_the:"",
    high:"",
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
          this.recetService.getOneRecetFirstMountain(this.idRecet).subscribe(frtmount => this.frtmount = frtmount);
      }
      onModificarRecetFirstMountain({value} : {value:FirstMountain}){
        value.id = this.idRecet;
          this.recetService.updateRecetFirstMountain(value)
          this.router.navigate(['./geographic/world/the-first-one/mountains'])
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
