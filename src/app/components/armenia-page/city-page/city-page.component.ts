import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../services/recet.service";
import {Citys} from "../../../models/citys";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {
  citys:Citys[];
  styleForm;
  idRecet:string;
  public isLogin:boolean;
    provinces_inCity = [
       {id: 1, name: "Գեղարքունիք"},
       {id: 2, name: "Կոտայք"},
       {id: 3, name: "Լոռի"},
       {id: 4, name: "Շիրակ"},
       {id: 5, name: "Արարատ"},
       {id: 6, name: "Տավուշ"},
       {id: 7, name: "Արագածոտն"},
       {id: 8, name: "Վայոց Ձոր"},
       {id: 9, name: "Սյունիք"},
       {id: 10, name: "Երևան"}
     ];
    
  city:Citys ={
        id:"",
        name:"",
        in_the:"",
        area:"",
        population:"",
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
    onChangeAddCity({value}:{value:Citys}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewCity(value)
            //})
    }
    todosRecets(){
        this.recetService.getAllRecets().subscribe(citys =>this.citys = citys);   
    }
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
            this.recetService.deleteRecet(id);
            //this.router.navigate(['/'])
           
        }
    }

}
