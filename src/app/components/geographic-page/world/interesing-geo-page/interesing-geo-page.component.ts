
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {GeoMixResetService} from "../../../../services/geo-mix-reset.service";
import {Observable} from "rxjs/Observable";
import { animate, style, transition, trigger } from '@angular/animations';
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {Interesing} from "../../../../models/Interesing";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-interesing-geo-page',
  templateUrl: './interesing-geo-page.component.html',
  styleUrls: ['./interesing-geo-page.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class InteresingGeoPageComponent implements OnInit {
  @ViewChild('isPreloaderSVG') isPreloaderSVG:ElementRef;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  public preloadCount: any = 7;
  public count: any = 0;
  public PreloaderData:any = [];
  styleForm;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  ints:Interesing[];
  int: Interesing = {
    id:"",
    description:"",
    publication:"",
  }
  constructor(
    public statesService:GeoMixResetService,
    public authService:AuthService,
    public route: ActivatedRoute,
    public router:Router,
    private afStorage: AngularFireStorage

  ) { }
  
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
    var interPre = setInterval(()=>{
      if(this.ints){
        Array.prototype.map.call(this.ints, (elm, ind)=>{
          if(ind < 7){
            this.PreloaderData.push(this.ints[ind])
          }
        })
        clearInterval(interPre);
      }
    }, 1000)
  
  }
  onScroll(event:Event):void{
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight - 100) {
      this.count++;
      if(this.count ==1){
        this.preloadCount+=(this.preloadCount<this.ints.length)?5:0;
         for(let i = this.PreloaderData.length; i<this.preloadCount; i++){
          if(this.ints[i]){
            this.isPreloaderSVG.nativeElement.style.display = 'block'
            setTimeout(()=>{
              if(this.PreloaderData.length < this.ints.length){
                this.PreloaderData.push(this.ints[i]); 
              }   
            }, 2000);
          }
          else{
            setTimeout(()=>{
              this.isPreloaderSVG.nativeElement.style.display = 'none'
            }, 2000)
          }
        }
      }
    }
    else{
      this.count =0;
    }
  
  }
  onChangeAddInteresing({value}:{value:Interesing}){
    value.publication = (new Date()).getTime();
    this.statesService.addNewInteresing(value)
  }
    todosRecets(){
      //this.searchClient = this.states
    this.statesService.getAllRecetInteresing().subscribe(ints =>this.ints = ints);
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
        this.statesService.deleteRecetInteresing(id);
      }
    }

}
