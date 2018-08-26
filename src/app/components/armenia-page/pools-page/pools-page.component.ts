
import { Component, OnInit, ElementRef } from '@angular/core';
import {RecetService} from "../../../services/recet.service";
import {Pools} from "../../../models/pools";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
declare var Swiper: any;
@Component({
  selector: 'app-pools-page',
  templateUrl: './pools-page.component.html',
  styleUrls: ['./pools-page.component.css']
})
export class PoolsPageComponent implements OnInit {
  pools:Pools[];
  styleForm;
  swiper;
  idRecet:string;
  public isLogin:boolean;
  pool:Pools ={
        id:"",
        name:"",
        in_the:"",
        height:"",
        area:"",
        publication:""
    }
  
  constructor(
    public recetService:RecetService, 
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      public elementRef:ElementRef
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
  ngAfterViewInit() {
    setTimeout(()=>{
        this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.main_lakes'), {
            slidesPerView: 1,
            speed: 500,
            spaceBetween: 0,
            pagination:'.swiper-pagination',
            paginationClickable: true,
        });
    }, 3000)
}
    onChangeAddPools({value}:{value:Pools}){
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewPool(value)
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
        this.recetService.getAllRecetsPools().subscribe(pools =>this.pools = pools);   
    }
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
            this.recetService.deleteRecetPool(id);
            //this.router.navigate(['/'])
           
        }
    }

}

