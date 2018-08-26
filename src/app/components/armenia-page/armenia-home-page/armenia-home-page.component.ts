import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {RecetService} from "../../../services/recet.service";
import {AuthService} from "../../../.../../services/auth.service";
import {Provinces} from "../../../models/provinces";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-armenia-home-page',
  templateUrl: './armenia-home-page.component.html',
  styleUrls: ['./armenia-home-page.component.css'],
  animations: [
    trigger('fadeIn', [
        transition(':enter', [
            style({  transform:'translateX(120px)' }),
            animate('.25s ease-out', style({ })),
        ]),
        transition(':leave', [
            style({  transform:'translateX(0px)' }),
            animate('.25s ease-out', style({  })),
        ]),
    ])]
})
export class ArmeniaHomePageComponent implements OnInit {
  @ViewChild('mapArm') armMap:ElementRef;
  provinces:Provinces[];
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
public armeniaFalse:Boolean = true;
public arryFormData:any;
public AllData:Object={};
public OneData:Object = {};
public  isLogin:Boolean;
private provinceName:String= '';
private MouseTop:Number;
private MouseLeft:Number;
  constructor(
    public recetService: RecetService,
    public authService:AuthService
  ) { 
    recetService.getAllRecetsProvinces().subscribe(
      provinces =>
      this.AllData = provinces
    ); 
  }

  ngOnInit() {
    this.todosRecets();
    this.onComprobarUserLogin();
  }
  ngAfterViewInit() {
    var self = this;
    function addColor(a, allData, attr){
      allData.forEach((elm, mls) => {
        elm.style.opacity = '0.5'
      })
      a.style.opacity = '1';
      for(var key in self.AllData){
        if(attr == self.AllData[key].name){
          self.OneData = self.AllData[key]
          self.provinceName = self.AllData[key].name
        }
      }
    }
    setTimeout(()=>{
      this.arryFormData = Array.prototype.slice.call(this.armMap.nativeElement.children)
        this.arryFormData.forEach((elm, mls)=>{
          elm.addEventListener('mousemove', (e)=>{
            this.MouseTop = e.clientY - 150;
            this.MouseLeft = e.clientX - 50;
            this.armeniaFalse = false;
            addColor(elm, this.arryFormData, elm.getAttribute('data-value'))
             
          })
        })
      }, 0)
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
    this.recetService.getAllRecetsProvinces().subscribe(provinces =>this.provinces = provinces);   
  }

}
