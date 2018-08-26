
import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../services/recet.service";
import {Rivers} from "../../../models/rivers";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-rivers-page',
  templateUrl: './rivers-page.component.html',
  styleUrls: ['./rivers-page.component.css']
})
export class RiversPageComponent implements OnInit {
  rivers:Rivers[];
  styleForm;
  idRecet:string;
  public isLogin:boolean;
  river:Rivers ={
        id:"",
        name:"",
        in_falls:"",
        long:"",
        longArm:"",
        publication:""
    }
  
  constructor(
    public recetService:RecetService, 
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
    onChangeAddRiver({value}:{value:Rivers}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewRiver(value)
        //})
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
    todosRecets(){
        this.recetService.getAllRecetsRivers().subscribe(rivers =>this.rivers = rivers);   
    }
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
            this.recetService.deleteRecetRiver(id);
            //this.router.navigate(['/'])
           
        }
    }

}

