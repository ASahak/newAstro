import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {AsiaPhotos, Asia} from "../../../../../models/AsiaPhotos";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-continential-asia-page',
  templateUrl: './continential-asia-page.component.html',
  styleUrls: ['./continential-asia-page.component.css']
})
export class ContinentialAsiaPageComponent implements OnInit {

asiaphotos:AsiaPhotos[];
asias:Asia[];
styleForm;
styleDrop;
public isLogin: boolean;
/*asiaphoto: AsiaPhotos = {
    id:"",
    name:"",
    url:"",
    path:"",
    publication:""
}*/
asia: Asia = {
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
    onChangeAddAsia({value}:{value:Asia}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewAsia(value)
        //})

    }
  todosRecets(){
    this.recetService.getAllRecetsAsia().subscribe(asias =>this.asias = asias);
    this.recetService.getAllRecetsAsiaPhotos().subscribe(asiaphotos =>this.asiaphotos = asiaphotos);
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
            this.recetService.deleteRecetAsia(id);
            //this.router.navigate(['/'])

        }
    }
    onClickDeletePhoto(id){
        this.recetService.deleteRecetAsiaPhotos(id);
    }

}
