
import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {AntarktidaPhotos, Antarktida} from "../../../../../models/AntarktidaPhotos";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-continential-antarktida-page',
  templateUrl: './continential-antarktida-page.component.html',
  styleUrls: ['./continential-antarktida-page.component.css']
})
export class ContinentialAntarktidaPageComponent implements OnInit {

antarktidaphotos:AntarktidaPhotos[];
antarktidas:Antarktida[];
styleForm;
styleDrop;
public isLogin: boolean;
antarktida: Antarktida = {
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
    onChangeAddAntarktida({value}:{value:Antarktida}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewAntarktida(value)
        //})
    }
  todosRecets(){
    this.recetService.getAllRecetsAntarktida().subscribe(antarktidas =>this.antarktidas = antarktidas);
    this.recetService.getAllRecetsAntarktidaPhotos().subscribe(antarktidaphotos =>this.antarktidaphotos = antarktidaphotos);
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
            this.recetService.deleteRecetAntarktida(id);
            //this.router.navigate(['/'])
           
        }
    }
    onClickDeletePhoto(id){
        this.recetService.deleteRecetAntarktidaPhotos(id);
    }

}
