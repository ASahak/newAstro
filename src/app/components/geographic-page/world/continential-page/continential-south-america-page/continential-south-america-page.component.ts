
import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {SouthAmericaPhotos, SouthAmerica} from "../../../../../models/SouthAmericaPhotos";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-continential-south-america-page',
  templateUrl: './continential-south-america-page.component.html',
  styleUrls: ['./continential-south-america-page.component.css']
})
export class ContinentialSouthAmericaPageComponent implements OnInit {

southamericaphotos:SouthAmericaPhotos[];
southamericas:SouthAmerica[];
styleForm;
styleDrop;
public isLogin: boolean;
southamerica: SouthAmerica = {
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
    onChangeAddSouthAmerica({value}:{value:SouthAmerica}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewSouthAmerica(value)
        //})
    }
  todosRecets(){
    this.recetService.getAllRecetsSouthAmerica().subscribe(southamericas =>this.southamericas = southamericas);
    this.recetService.getAllRecetsSouthAmericaPhotos().subscribe(southamericaphotos =>this.southamericaphotos = southamericaphotos);
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
            this.recetService.deleteRecetSouthAmerica(id);
            //this.router.navigate(['/'])
           
        }
    }
    onClickDeletePhoto(id){
        this.recetService.deleteRecetSouthAmericaPhotos(id);
    }

}
