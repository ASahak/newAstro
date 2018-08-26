

import { Component, OnInit } from '@angular/core';
import {ContinentsStatesService} from "../../../../services/continents-states.service";
import {Islands} from "../../../../models/island";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-island-page',
  templateUrl: './island-page.component.html',
  styleUrls: ['./island-page.component.css']
})
export class IslandPageComponent implements OnInit {
islands:Islands[];
styleForm;
public isLogin: boolean;
island: Islands = {
    id:"",
    name:"",
    area:"",
    in_the:"",
    publication:""
}
  constructor(
    public statesService:ContinentsStatesService,
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
    onChangeAddIslands({value}:{value:Islands}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.statesService.addNewIslands(value)
        //})
    }
     todosRecets(){
        this.statesService.getAllRecetsIslands().subscribe(islands =>this.islands = islands);
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
            this.statesService.deleteRecetIslands(id);
            //this.router.navigate(['/'])

        }
    }


}
