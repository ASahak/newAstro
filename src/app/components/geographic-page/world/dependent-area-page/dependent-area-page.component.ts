

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../services/geo-mix-reset.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {Dependent} from "../../../../models/Dependent";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-dependent-area-page',
  templateUrl: './dependent-area-page.component.html',
  styleUrls: ['./dependent-area-page.component.css']
})
export class DependentAreaPageComponent implements OnInit {
    styleForm;
   public idRecet:string;
   public isLogin:boolean;
   public isValue:string;
   dependents:Dependent[];
   dependent: Dependent = {
       id:"",
       name:"",
       capital:"",
       population:"",
       area:"",
       publication:""
   }

  constructor(
      public resetService:GeoMixResetService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router
  ) {
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
    onChangeAddDependent({value}:{value:Dependent}){
        value.publication = (new Date()).getTime();
        this.resetService.addNewDependent(value)
    }

     todosRecets(){
         //this.searchClient = this.dependents
        this.resetService.getAllRecetDependent().subscribe(dependents =>this.dependents = dependents);
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
    onClickDelete(id){
      if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
          this.resetService.deleteRecetDependent(id);
      }
    }
}
