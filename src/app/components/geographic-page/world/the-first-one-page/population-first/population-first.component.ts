
import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {FirstPopulation} from "../../../../../models/FirstPopulation";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-population-first',
  templateUrl: './population-first.component.html',
  styleUrls: ['./population-first.component.css']
})
export class PopulationFirstComponent implements OnInit {
    styleForm;
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


      onChangeAddFirstPopulation({value}:{value:FirstPopulation}){
          value.publication = (new Date()).getTime();
          //this.authService.getAuth().subscribe(city =>{
              this.recetService.addNewFirstPopulation(value)
          //})
      }
       todosRecets(){
          this.recetService.getAllRecetFirstPopulation().subscribe(frtpops =>this.frtpops = frtpops);
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
              this.recetService.deleteRecetFirstPopulation(id);
              //this.router.navigate(['/'])

          }
      }
}
