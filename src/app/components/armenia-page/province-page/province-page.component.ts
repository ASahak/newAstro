import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../services/recet.service";
import {Provinces} from "../../../models/provinces";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.css']
})
export class ProvincePageComponent implements OnInit {
  styleForm;
  provinces:Provinces[];
  public isLogin:boolean;
    Provinces_obj = [
       {id: 1, name: "Գեղարքունիք", center:"Գավառ"},
       {id: 2, name: "Կոտայք", center:"Հրազդան"},
       {id: 3, name: "Լոռի", center:"Վանաձոր"},
       {id: 4, name: "Շիրակ", center:"Գյումրի"},
       {id: 5, name: "Արարատ", center:"Արտաշատ"},
       {id: 6, name: "Տավուշ", center:"Իջևան"},
       {id: 7, name: "Արագածոտն", center:"Թալին"},
       {id: 8, name: "Վայոց Ձոր", center:"Եղեգնաձոր"},
       {id: 9, name: "Սյունիք", center:"Կապան"},
       {id: 10, name: "Երևան", center:"Երևան"}
     ];
    
  province:Provinces = {
        id:"",
        name:"",
        center:"",
        area:"",
        population:"",
        description:"",
        density:"",
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
        top:30+'px',
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
      this.todosRecetsProvince();
     this.onComprobarUserLogin();
      
  }
    
   
    onChangeAddProvince({value}:{value:Provinces}){
        value.publication = (new Date()).getTime();
        this.recetService.addNewProvince(value)
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
    todosRecetsProvince(){
        this.recetService.getAllRecetsProvinces().subscribe(provinces =>this.provinces = provinces);   
    }
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
            this.recetService.deleteRecetProvince(id);
            //this.router.navigate(['/'])
           
        }
    }

}

