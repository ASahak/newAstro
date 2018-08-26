import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../services/auth.service";
import {States} from "../../../../models/States";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-geographic-home-page',
  templateUrl: './geographic-home-page.component.html',
  styleUrls: ['./geographic-home-page.component.css'],
  animations: [
    trigger('fadeIn', [
        transition(':enter', [
            style({  transform:'translateX(20px)' }),
            animate('.25s ease-out', style({ })),
        ]),
        transition(':leave', [
            style({  transform:'translateX(0px)' }),
            animate('.25s ease-out', style({  })),
        ]),
    ])]
})

export class GeographicHomePageComponent implements OnInit {

  @ViewChild("map") someMap: ElementRef;
  public AllData:Object = {};
  private countryName:String= '';
  private MouseTop:Number;
  private MouseLeft:Number;
  private capital:string = '';
  private population:Number;
  private area:Number;
  public touchTop:any = 0;
  public touchLeft:any = 0;
  private zoomScale:any = 1;
  public heightGlobe:any = 0;
  public typ:Boolean = false;
  public topValue:any = 0;
  public leftValue:any = 0;
  public ogiginTop:any = 0;
  public ogiginLeft:any = 0;
  public boolTop:Boolean = false;
  public touchEvent:Function;
  imageURL: string;
  imageFlagURL: string;
  public arryFormData;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  states:States[];
  state: States = {
      id:"",
      name:"",
      capital:"",
      population:"",
      area:"",
      url:"",
      code:'',
      in_area:"",
      flag:"",
      description:"",
      publication:""
  }

 constructor(
     public statesService:ContinentsStatesService,
     public authService:AuthService,
     public route: ActivatedRoute,
     public router:Router,
     private url:LocationStrategy,
     private afStorage: AngularFireStorage
 ) {
  statesService.getAllRecetsContinentsStates().subscribe(users => {
    this.AllData = users;
  });
  document.querySelector('body').style.overflowX = 'hidden';
  this.heightGlobe = 'auto';

  this.touchEvent = ()=>{
    var src = document.getElementById("mapTouch"),
    tr = document.getElementById("zoomMap"),
    svgWorld = document.querySelector('#svgWorld'),
    topSVG = svgWorld.getBoundingClientRect().top;
    var clientX,
        clientY,
        elseBool = '',
        leftPos,
        typ = false, 
        topPos = 0,
        countBool = 0;
        this.ogiginTop = svgWorld.getBoundingClientRect().height/4;
        this.ogiginLeft = svgWorld.getBoundingClientRect().width/4;
    tr.onmousedown =  function(e) {
        leftPos = src.getBoundingClientRect().left;
        clientX = e.clientX;  
        clientY = e.clientY - topPos;
        if(this.typ){
          typ = true;
        }
        e.preventDefault()
    }.bind(this);
    window.onmouseup =  function(e) {
      this.boolTop = false;
        typ = false;
        if(elseBool == 'up'){
          src.style.transition = '.2s'
          this.touchTop = this.topValue-1;
          topPos = this.touchTop
        }
        else if(elseBool == 'down'){
          src.style.transition = '.2s'
          this.touchTop = -this.topValue-1;
          topPos = this.touchTop
        } 
        else if(elseBool == 'left'){
          src.style.transition = '.2s'
          this.touchLeft = this.leftValue-1;
        } 
        else if(elseBool == 'right'){
          src.style.transition = '.2s'
          this.touchLeft = -this.leftValue-1;
        } 
    }.bind(this);
    tr.onmousemove = function(e) {
        if(typ){
          if((this.touchTop < this.topValue)){
            src.style.transition = '0s'
            topPos = e.clientY - clientY;
            this.touchLeft = e.clientX - clientX + leftPos;
            this.touchTop = topPos
            elseBool = ' ';
            if(this.touchLeft > this.leftValue){
              src.style.transition = '0s'
              elseBool = 'left'
            }
            if(this.touchLeft < (-this.leftValue)){
              src.style.transition = '0s'
              elseBool = 'right'
            }
          }
          else{
              elseBool = 'up'
          }
          if(this.touchTop < (-this.topValue)){
             src.style.transition = '0s'
            elseBool = 'down'
          }
          
        }
    }.bind(this)
  }
 }

  ngOnInit() {
    this.todosRecets();
    this.touchEvent()
  }
  ngAfterViewInit() {
    function getColor(el):void{
      if(el.children.length > 0){
        Object.values(el.children).map((elm:HTMLElement, mls)=>{
          if(elm.children.length > 0){
            Object.values(elm.children).map((em:HTMLElement, ms)=>{
              em.style.fill = '#fff';
            })
          } 
          elm.style.fill = '#fff';
        })
      }
      else{ 
        el.style.fill = '#fff';
      }
    }
    function remColor(ind):void{
      if(ind.children.length > 0){
        Object.values(ind.children).map((elm:HTMLElement, mls)=>{
          if(elm.children.length > 0){
            Object.values(elm.children).map((em:HTMLElement, ms)=>{
              em.style.fill = '#000';
            })
          } 
          elm.style.fill = '#000';
        })
      }
      else{ 
        ind.style.fill = '#000';
      }
    }
    setTimeout(()=>{
      
      this.arryFormData = Array.prototype.slice.call(this.someMap.nativeElement.children)
      this.arryFormData.forEach((elm, mls)=>{
        elm.addEventListener('mousemove', (e)=>{
          if(elm.className.animVal != 'ocean'){
            for(var key in this.AllData){
              if(this.AllData[key].code.toLowerCase() == elm.getAttribute('id')){
                this.MouseTop = e.clientY - 150;
                this.MouseLeft = e.clientX - 50;
                this.area = this.AllData[key].area;
                this.capital = this.AllData[key].capital;
                this.population = this.AllData[key].population;
                this.countryName = this.AllData[key].name;
              }
            }
            getColor(elm);
          }
        })
        elm.addEventListener('mouseleave', (e)=>{
          if(elm.className.animVal != 'ocean'){
          this.countryName = '';
           this.capital = '';
            remColor(elm);
          }
        })
      })
     
    }, 0)
    
  }
    
  zoomMap(th){
    this.typ = true;
    document.getElementById('svgWorld').style.transition = '0.2s'
    this.boolTop = true;
    this.zoomScale += (this.zoomScale < 7)? 0.5: 0;
    this.topValue += (this.topValue<= 11*this.ogiginTop)?this.ogiginTop:0
    this.leftValue +=(this.leftValue <=11*this.ogiginLeft)?this.ogiginLeft:0;
  }
  outMap(th){
    this.boolTop = true;
    this.zoomScale -= (this.zoomScale > 1)? 0.5: 0;
    this.topValue -= (this.topValue> 0)?this.ogiginTop:0
    this.leftValue -=(this.leftValue >0)?this.ogiginLeft:0;
    if(this.topValue < this.touchTop){
      document.getElementById("mapTouch").style.transition = '0s'
      document.getElementById('svgWorld').style.transition = '0s'
      this.touchTop = this.topValue
    }
    if(this.zoomScale == 1){
      this.touchTop = this.topValue
      this.touchLeft = 0;
      this.typ = false;
    }
  }
  

  todosRecets(){
    //this.searchClient = this.states
   this.statesService.getAllRecetsContinentsStates().subscribe(states =>this.states = states);
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
}
