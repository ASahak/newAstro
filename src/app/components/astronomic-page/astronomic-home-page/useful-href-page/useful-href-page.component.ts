import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AstronomicMixService} from "../../../../services/astronomic-mix.service";
import {UsefulHref} from "../../../../models/UsefulHref";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-useful-href-page',
  templateUrl: './useful-href-page.component.html',
  styleUrls: ['./useful-href-page.component.css'],
  host:{
    '(window:click)':'noneMore($event)'
  }
})
export class UsefulHrefPageComponent implements OnInit {
  @ViewChild('pageNumbers') pageNumbers:ElementRef;
  styleForm;
  public ArrayData:any = [];
  public styleFormEmpty:Object = {};
  public positionTop = -200; 
  private objFixed: any ={};
  public isObjectNN:Boolean = false;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  imageURL: string = '';
  public isLogin:boolean;
  public isImage:boolean;
  public idRecet:string;
 usefulHrefs:UsefulHref[];
 usefulHref: UsefulHref = {
    id:'',
    name:'',
    url:'',
    desc:'',
    publication:''
  }
  constructor(
    
    public resetService:AstronomicMixService,
    public authService:AuthService,
    public route: ActivatedRoute,
    public router:Router,
    private afStorage: AngularFireStorage,
    public flashMensaje:FlashMessagesService
  ) {

    var self = this,
    topMinus = 200;
    var width_wind_max_md = window.matchMedia("(max-width: 991px) and (min-width:767px)"),
        width_wind_max_lg = window.matchMedia("(max-width: 1200px) and (min-width:991px)"),
        width_wind_max_sm = window.matchMedia("(max-width: 767px) and (min-width:576px)"),
        width_wind_max_xs = window.matchMedia("(min-width:576px)"),
        width_wind_max_xl = window.matchMedia("(min-width:1200px)");
    window.onresize = () => {
        width_wind_max_md = window.matchMedia("(max-width: 991px) and (min-width:767px)");
        width_wind_max_lg = window.matchMedia("(max-width: 1200px) and (min-width:991px)");
        width_wind_max_sm = window.matchMedia("(max-width: 767px) and (min-width:576px)");
        width_wind_max_xs = window.matchMedia("(min-width:576px)");
        width_wind_max_xl = window.matchMedia("(min-width:1200px)")
    };
    if(width_wind_max_md.matches){
        self.positionTop = -60;
        topMinus = 60;
    }
    if(width_wind_max_lg.matches){
        self.positionTop = -100;
        topMinus = 100;
    }
    if(width_wind_max_sm.matches){
        self.positionTop = -70;
        topMinus = 70;
    }
    if(width_wind_max_xl.matches){
        self.positionTop = -280;
        topMinus = 280;
    }
    if(width_wind_max_xs.matches){
        window.onscroll = function(e){  
            if (this.scrollY < topMinus + 100) {
                if(width_wind_max_md.matches){
                    self.positionTop = -60;
                    topMinus = 60;
                }
                if(width_wind_max_lg.matches){
                    self.positionTop = -100;
                    topMinus = 100;
                }
                if(width_wind_max_sm.matches){
                    self.positionTop = -70;
                    topMinus = 70;
                }
                if(width_wind_max_xl.matches){
                    self.positionTop = -280;
                    topMinus = 280;
                }
            self.positionTop = 0;
            self.positionTop = -this.scrollY/2 - topMinus;
            }
        }
    }
   }
  upload(event):void {
    const file = event.target.files[0]
    const path = `UsefulHrefPhotos/${new Date().getTime()}_${file.name}`;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.afStorage.upload(path, file)
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    console.log(this.downloadURL.toPromise().then(
        res => {
          console.log(res);
          this.imageURL = res
        }
      ))
      this.isImage = true;
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
      // Pageination
      var empotyObj:any = [],
          count = 5;
      var sliceItems = (items, count)=>{
        for(let i =1;i<=Math.ceil(items.length/(count+1)); i++){
          this.pageNumbers.nativeElement.insertAdjacentHTML('beforeend', '<a data-page="'+i*(count+1)+'" class="intoDiv">'+i+'</a>');
         
          var take = (el, styles) => {
            for (var property in styles)
                el.style[property] = styles[property];
          }
        }
        let element =  document.querySelectorAll('.intoDiv');
        Array.prototype.map.call(element, elm=>{
          (element[0]as HTMLElement).style.background = '#2497e3';
          (element[0]as HTMLElement).style.color = '#fff';
          (element[0]as HTMLElement).classList.add('activePage');
          take(elm, {
            border: '1px solid #2497e3', 
            color: '#555', 
            background: '#fff', 
            display: 'inline-block', 
            borderRadius: '5px',
            cursor:'pointer', 
            margin: '5px 1px',
            padding: '5px 10px' 
          });
          elm.onclick =  (e:Event)=>{
            for(let i = 0; i < element.length; i++){
              if(element[i].classList.contains('activePage')){
                element[i].classList.remove('activePage');
                (element[i]as HTMLElement).style.background = 'transparent';
                (element[i] as HTMLElement).style.color = '#555';
              }
            }
            (<HTMLElement>e.target).className += ' activePage';
            (document.querySelector('.activePage') as HTMLElement).style.background = '#2497e3';
            (document.querySelector('.activePage') as HTMLElement).style.color = '#fff';
            this.ArrayData = []
            for(let i = (<HTMLElement>e.target).attributes['data-page'].value - (count+1); i < (<HTMLElement>e.target).attributes['data-page'].value; i++){
              if(items[i] != undefined){
                this.ArrayData.push(items[i])
              }
            }
            setTimeout(()=>{
              window.scrollTo({
                top: (document.querySelector('.cardUseful')as HTMLElement).offsetTop,
                behavior: "smooth"
              });
            }, 500)
          }
          
        })
      
      items.forEach((elm, ind)=>{
        if(ind <= count){
          this.ArrayData.push(elm)
        }
      })
    }
  
    var bindChild = setInterval(()=>{
      this.pageNumbers;
      if(this.usefulHrefs !=  undefined){
        Array.prototype.map.call(this.usefulHrefs, elm =>{
          empotyObj.push(elm)
        })
        sliceItems(empotyObj, count)
        clearInterval(bindChild)
      }
    }, 1000)
    // Pageination


    this.onComprobarUserLogin();
    this.todosRecets();
  }
  noneMore(e){
    if((<Element>e.target).className.split(' ')[0] == 'frogeFixed'){
      this.isObjectNN = false;
    }
  }
  onChangeAddUsefulReferance({value}:{value:UsefulHref}){
    value.url = this.imageURL;
    value.publication = (new Date()).getTime();
    this.resetService.addNewUsefulHref(value)
    this.flashMensaje.show(`Ավելացվել է:`,
    {cssClass:"alert-success", timeout:3000})
    this.isImage = false;
}

fixedModal(data){
  this.objFixed = {url: data.url, name:data.name, desc:data.desc} 
  if(Object.keys(this.objFixed).length == 0){
    this.isObjectNN = false;
  }
  else{
    this.isObjectNN = true;
  }
  // window.onclick = (e:Event)=>{
  //   if((<HTMLElement>e.target).className == 'frogeFixed'){
  //     this.isObjectNN = false;
  //   }
  // }
}
closeModal(){
  this.isObjectNN = false;
}
todosRecets(){
    this.resetService.getAllRecetsUsefulHref().subscribe(usefulHrefs =>this.usefulHrefs = usefulHrefs);
  }
  onClickDelete(id){
    if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞")){
      this.resetService.deleteRecetUsefulHref(id);
    }
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
}
