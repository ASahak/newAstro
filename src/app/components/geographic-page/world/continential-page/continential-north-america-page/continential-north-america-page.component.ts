

import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {NorthAmericaPhotos, NorthAmerica} from "../../../../../models/NorthAmericaPhotos";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-continential-north-america-page',
  templateUrl: './continential-north-america-page.component.html',
  styleUrls: ['./continential-north-america-page.component.css']
})
export class ContinentialNorthAmericaPageComponent implements OnInit {

northamericaphotos:NorthAmericaPhotos[];
northamericas:NorthAmerica[];
styleForm;
styleDrop;
public isLogin: boolean;
northamerica: NorthAmerica = {
    id:"",
    name:"",
    description:"",
    value:"",
    publication:""
}
  constructor(
  public recetService:ContinetsResetService, 
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router
  ) { 
    
  }
  AddDrop(){
    this.styleDrop = Object.assign({
      right:0+'px',
      visibility:'visible',
      zIndex:'2223'  
    })
     window.onclick = (e)=>{
        console.log((<HTMLElement>e.target).className.split(' ')[1])
      if((<HTMLElement>e.target).className.split(' ')[1] == 'uploadDrop'){
          this.styleDrop = Object.assign({
              right:-150+'px',
              visibility:'hidden',
              zIndex:'-1'
          })          
      }
    }
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
    onChangeAddNorthAmerica({value}:{value:NorthAmerica}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewNorthAmerica(value)
        //})
    }
  todosRecets(){
    this.recetService.getAllRecetsNorthAmerica().subscribe(northamericas =>this.northamericas = northamericas);
    this.recetService.getAllRecetsNorthAmericaPhotos().subscribe(northamericaphotos =>this.northamericaphotos = northamericaphotos);
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
            this.recetService.deleteRecetNorthAmerica(id);
            //this.router.navigate(['/'])
           
        }
    }
    onClickDeletePhoto(id){
        this.recetService.deleteRecetNorthAmericaPhotos(id);
    }

}
