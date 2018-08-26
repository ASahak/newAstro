

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstArea} from "../../../../../models/FirstArea";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-area-first',
  templateUrl: './area-first.component.html',
  styleUrls: ['./area-first.component.css']
})
export class AreaFirstComponent implements OnInit {
    styleForm;
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


      onChangeAddFirstArea({value}:{value:FirstArea}){
          value.publication = (new Date()).getTime();
          //this.authService.getAuth().subscribe(city =>{
              this.recetService.addNewFirstArea(value)
          //})
      }
       todosRecets(){
          this.recetService.getAllRecetFirstArea().subscribe(frtareas =>this.frtareas = frtareas);
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
              this.recetService.deleteRecetFirstArea(id);
              //this.router.navigate(['/'])

          }
      }
}
