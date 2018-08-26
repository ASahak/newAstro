
import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstMountain} from "../../../../../models/FirstMountain";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-mountains-first',
  templateUrl: './mountains-first.component.html',
  styleUrls: ['./mountains-first.component.css']
})
export class MountainsFirstComponent implements OnInit {
    styleForm;
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


      onChangeAddFirstMountain({value}:{value:FirstMountain}){
          value.publication = (new Date()).getTime();
          //this.authService.getAuth().subscribe(city =>{
              this.recetService.addNewFirstMountain(value)
          //})
      }
       todosRecets(){
          this.recetService.getAllRecetFirstMountain().subscribe(frtmounts =>this.frtmounts = frtmounts);
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
              this.recetService.deleteRecetFirstMountain(id);
              //this.router.navigate(['/'])

          }
      }
}
