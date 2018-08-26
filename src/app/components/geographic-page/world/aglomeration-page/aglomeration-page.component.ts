

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../services/geo-mix-reset.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {Aglomeration} from "../../../../models/Aglomeration";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-aglomeration-page',
  templateUrl: './aglomeration-page.component.html',
  styleUrls: ['./aglomeration-page.component.css']
})
export class AglomerationPageComponent implements OnInit {
    styleForm;
   public idRecet:string;
   public isLogin:boolean;
   public isValue:string;
   aglomerations:Aglomeration[];
   aglomeration: Aglomeration = {
       id:"",
       name:"",
       country:"",
       population:"",
       includes:"",
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
  ngOnInit() {

      this.todosRecets();
      this.onComprobarUserLogin();
  }
    onChangeAddAglomeration({value}:{value:Aglomeration}){
        value.publication = (new Date()).getTime();
        this.resetService.addNewAglomeration(value)
    }

     todosRecets(){
         //this.searchClient = this.aglomerations
        this.resetService.getAllRecetAglomeration().subscribe(aglomerations =>this.aglomerations = aglomerations);
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
          this.resetService.deleteRecetAglomeration(id);
      }
    }
}
