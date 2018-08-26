

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {Dependent} from "../../../../../models/Dependent";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-dependents',
  templateUrl: './edit-dependents.component.html',
  styleUrls: ['./edit-dependents.component.css']
})
export class EditDependentsComponent implements OnInit {

  public isValue:string;
   idRecet:string;
   dependents:Dependent[];
   public isLogin: boolean;
   dependent: Dependent = {
     id:"",
     name:"",
     area:"",
     capital:"",
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
          this.recetService.getOneRecetDependent(this.idRecet).subscribe(dependent => this.dependent = dependent);
      }
      onModificarRecetDependent({value} : {value:Dependent}){
          value.id = this.idRecet;
          this.recetService.updateRecetDependent(value)
          this.router.navigate(['./geographic/world/dependent-areas'])
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
