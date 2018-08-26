import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../services/continets-reset.service";
import {Continents} from "../../../../../models/continents";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-continential-home-page',
  templateUrl: './continential-home-page.component.html',
  styleUrls: ['./continential-home-page.component.css']
})
export class ContinentialHomePageComponent implements OnInit {
continents:Continents[];
styleForm;
public isLogin: boolean;
continent: Continents = {
    id:"",
    name:"",
    area:"",
    high_pic:"",
    under_pic:"",
    population:"",
    publication:""
}
continentsName = [
 {name:'Եվրասիա'},
 {name:'Աֆրիկա'},
 {name:'Հս.Ամերիկա'},
 {name:'Հվ.Ամերիկա'},
 {name:'Անտարկտիդա'},
 {name:'Ավստրալիա'}
]
  constructor(
    public recetService:ContinetsResetService, 
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
    Array.prototype.map.call(document.querySelectorAll('.continential_sub_ul'), (em)=>{
        em.style.height = 0 +'px';
    })
    Array.prototype.map.call(document.querySelectorAll('.lnr-circle-minus'), (em)=>{
        em.classList.remove('lnr-circle-minus')
        em.classList.add('lnr-plus-circle')
    })
      
    this.todosRecets();
      this.onComprobarUserLogin();
  }
    onChangeAddContinents({value}:{value:Continents}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewContinents(value)
        //})
    }
     todosRecets(){
        this.recetService.getAllRecetsContinents().subscribe(continents =>this.continents = continents);   
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
            this.recetService.deleteRecetContinent(id);
            //this.router.navigate(['/'])
           
        }
    }


}
