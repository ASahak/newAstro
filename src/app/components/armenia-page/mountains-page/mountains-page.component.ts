
import { Component, OnInit, ElementRef } from '@angular/core';
import {RecetService} from "../../../services/recet.service";
import {Mountains} from "../../../models/mountains";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
declare var Swiper: any;
@Component({
  selector: 'app-mountains-page',
  templateUrl: './mountains-page.component.html',
  styleUrls: ['./mountains-page.component.css']
})
export class MountainsPageComponent implements OnInit {
  mountains:Mountains[];
  styleForm;
  swiper;
  idRecet:string;
  public isLogin:boolean;
  mountain:Mountains ={
        id:"",
        name:"",
        pic:"",
        high:"",
        publication:""
    }
  
  constructor(
    public recetService:RecetService, 
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private elementRef: ElementRef
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
        this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.main_mountains'), {
            slidesPerView: 1,
            speed: 500,
            spaceBetween: 0,
            pagination:'.swiper-pagination',
            paginationClickable: true,
        });
    }, 3000)
}
    onChangeAddMountain({value}:{value:Mountains}){
        console.log(value)
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewMountain(value)
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
        this.recetService.getAllRecetsMountains().subscribe(mountains =>this.mountains = mountains);   
    }
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
            this.recetService.deleteRecetMountain(id);
            //this.router.navigate(['/'])
           
        }
    }

}


