import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Planets} from "../../models/Planets";
import {AstronomicMixService} from "../../services/astronomic-mix.service";
@Component({
  selector: 'app-astronomic-page',
  templateUrl: './astronomic-page.component.html',
  styleUrls: ['./astronomic-page.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
    '(window:scroll)': 'onScrollToTop($event)'
  }
})
export class AstronomicPageComponent implements OnInit {
  @ViewChild('mapElement') mapElement:ElementRef;
  @ViewChild('mapNavBar') mapNavBar:ElementRef;
  styleToTop;
  public isLogin:boolean;
  public stylesObj :Object = {};
  public varAssign;
  public activeBar;
  public statusClass:Boolean = true;
  public spanTrue:Boolean = false;
  planets:Planets[];
  planet: Planets = {
    id:'',
    name:'',
    diameter:'',
    weight:'',
    farEarth:'',
    rotOs:'',
    temperature:null,
    stoogeCount:null,
    discoverYear:null,
    inSort:'',
    periheli:'',
    apoheli:'',
    bigAnomalia:'',
    speed:'',
    image:'',
    description:'',
    type:'',
    publication:''
  }
  constructor(
    public resetService:AstronomicMixService,
    public authService:AuthService
  ) {
    
}
onResize(){
    this.activeBar = <HTMLElement>document.querySelector('.navCommon .active-link');
    if(this.activeBar != null){
        // if(!this.statusClass){
            this.spanTrue = true;
            this.activeBar.style.color = '#2497e3';
            this.varAssign = Object.assign({
                topSpanNavBar:(<HTMLElement>this.activeBar).offsetTop,
                leftSpanNavBar:(<HTMLElement>this.activeBar).offsetLeft,
                widthSpanNavBar:(<HTMLElement>this.activeBar).clientWidth,
                heightSpanNavBar:(<HTMLElement>this.activeBar).clientHeight
            }, this.stylesObj)   
        // }
    }
}
onScrollToTop(){
    if(window.scrollY == 0){
        this.styleToTop = { visibility: 'hidden', opacity:'0'}
    }
    if(window.scrollY > 200){
        this.styleToTop = { visibility: 'visible', opacity:'1'}
    }
}
clictTo(){
    setTimeout(()=>{
      window.scrollTo({
        top:0,
        behavior: "smooth"
      });
    }, 500)
  }
spanTrueFunc(){
    this.spanTrue = false;
    if(this.activeBar != null){
        this.activeBar.style.color = '#fff';
    }
}

clickStatus(){
    this.statusClass = !this.statusClass;
    setTimeout(()=>{
        this.activeBar = <HTMLElement>document.querySelector('.navCommon .active-link');
        if(this.activeBar != null){
            if(!this.statusClass){
                this.spanTrue = true;
                this.activeBar.style.color = '#2497e3';
                this.varAssign = Object.assign({
                    topSpanNavBar:(<HTMLElement>this.activeBar).offsetTop,
                    leftSpanNavBar:(<HTMLElement>this.activeBar).offsetLeft,
                    widthSpanNavBar:(<HTMLElement>this.activeBar).clientWidth,
                    heightSpanNavBar:(<HTMLElement>this.activeBar).clientHeight
                }, this.stylesObj)   
            }
            else{
                this.spanTrue = false;
                this.activeBar.style.color = '#fff';
            }
        }
    }, 1000)
    if(this.statusClass){
        if(this.activeBar != null){
            this.spanTrue = false;
            this.activeBar.style.color = '#fff';
        }
    }
}
ngOnInit() {
    var width_wind_max_md = window.matchMedia("(min-width: 991px)");
    window.onresize = () => {
        width_wind_max_md = window.matchMedia("(min-width:991px)");
    }
    if(width_wind_max_md.matches){
        var activeInter = setInterval(()=>{
            this.activeBar = <HTMLElement>document.querySelector('.navCommon .active-link');
            if(this.activeBar != null){
                this.spanTrue = true;
                console.log(this.activeBar)
                this.activeBar.style.color = '#2497e3';
                this.varAssign = Object.assign({
                    topSpanNavBar:(<HTMLElement>this.activeBar).offsetTop,
                    leftSpanNavBar:(<HTMLElement>this.activeBar).offsetLeft,
                    widthSpanNavBar:(<HTMLElement>this.activeBar).clientWidth,
                    heightSpanNavBar:(<HTMLElement>this.activeBar).clientHeight
                }, this.stylesObj)
                clearInterval(activeInter)
            }
        }, 1000)
    }
    
     Array.prototype.map.call(this.mapElement.nativeElement.children, (em)=>{
        em.onmouseenter = (e)=>{
            if(this.activeBar != null){
                this.activeBar.style.color = '#fff';
            }
            this.spanTrue = true;
            (<HTMLElement>e.target.children)[0].style.color = '#2497e3';
            this.varAssign = Object.assign({
                topSpanNavBar:(<HTMLElement>e.target).offsetTop,
                leftSpanNavBar:(<HTMLElement>e.target).offsetLeft,
                widthSpanNavBar:(<HTMLElement>e.target).clientWidth,
                heightSpanNavBar:(<HTMLElement>e.target).clientHeight
            }, this.stylesObj)
        }
        em.onmouseleave = (e)=>{
            // this.spanTrue = true;
            (<HTMLElement>e.target.children)[0].style.color = '#fff';
        }
     })
     this.mapElement.nativeElement.onmouseleave = (e)=>{
        this.activeBar  = <HTMLElement>document.querySelector('.navCommon .active-link');
        if(this.activeBar != null){
            this.activeBar.style.color = '#2497e3';
            this.varAssign = Object.assign({
                topSpanNavBar:(<HTMLElement>this.activeBar).offsetTop,
                leftSpanNavBar:(<HTMLElement>this.activeBar).offsetLeft,
                widthSpanNavBar:(<HTMLElement>this.activeBar).clientWidth,
                heightSpanNavBar:(<HTMLElement>this.activeBar).clientHeight
            }, this.stylesObj)
        }
        else{
            this.spanTrue = false;
        }
     }
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
    onlogOut(){
        this.authService.logOut()
    }
    todosRecets(){
        this.resetService.getAllRecetsPlanets().subscribe(planets =>this.planets = planets);
    }
    
}
