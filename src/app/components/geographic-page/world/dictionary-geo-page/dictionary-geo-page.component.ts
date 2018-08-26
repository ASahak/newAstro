import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {GeoMixResetService} from "../../../../services/geo-mix-reset.service";
import {Observable} from "rxjs/Observable";
import { animate, style, transition, trigger } from '@angular/animations';
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../services/auth.service";
import {Dictionary} from "../../../../models/Dictionary";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-dictionary-geo-page',
  templateUrl: './dictionary-geo-page.component.html',
  styleUrls: ['./dictionary-geo-page.component.css'],
  animations: [
    trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('.25s ease-out', style({ opacity: '1', transform:'scale(1)' })),
        ]),
        transition(':leave', [
            style({ opacity: '.6' }),
            animate('.25s ease-out', style({ opacity: '0', transform:'scale(0.5)' })),
        ]),
    ])],
    host: {
      '(window:scroll)': 'onScroll($event)'
    }
})
export class DictionaryGeoPageComponent implements OnInit {
  @ViewChild('query') queryFocus:ElementRef;
  @ViewChild('label') labelFocus:ElementRef;
  @ViewChild('mapClickUl') mapClickUl:ElementRef;
  @ViewChild('isPreloaderSVG') isPreloaderSVG:ElementRef;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  styleForm;
  public preloadCount: any = 3;
  public count: any = 0;
  public PreloaderData:any = [];
  imageURL: string = '';
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  public isImage:Boolean = false;
  searchClient: Dictionary[];
  dics:Dictionary[];
  dic: Dictionary = {
    id:"",
    name:"",
    url:"",
    description:"",
    publication:"",
  }
  constructor(
    public statesService:GeoMixResetService,
    public authService:AuthService,
    public route: ActivatedRoute,
    public router:Router,
    private afStorage: AngularFireStorage

  ) {


   }
  setInputFocus(event:Event): void {
    this.labelFocus.nativeElement.style.top = '-20px'
    this.labelFocus.nativeElement.style.fontSize = '11px'
  }
  setInputFocusOut(event:Event): void {
      if((<HTMLInputElement>event.target).value == ''){
          this.labelFocus.nativeElement.style.top = '7px'
          this.labelFocus.nativeElement.style.fontSize = '15px'
      }
      else{
          this.labelFocus.nativeElement.style.top = '-20px'
      this.labelFocus.nativeElement.style.fontSize = '11px'
      }
  }
 
  upload(event) {
    const file = event.target.files[0]
    const path = `DictionaryPhotos/${new Date().getTime()}_${file.name}`;
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

    this.todosRecets();
    this.onComprobarUserLogin();
    var interPre = setInterval(()=>{
      if(this.dics){
        Array.prototype.map.call(this.dics, (elm, ind)=>{
          if(ind < 3){
            this.PreloaderData.push(this.dics[ind])
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
        this.preloadCount+=(this.preloadCount<this.dics.length)?3:0;
         for(let i = this.PreloaderData.length; i<this.preloadCount; i++){
          if(this.dics[i]){
            this.isPreloaderSVG.nativeElement.style.display = 'block'
            setTimeout(()=>{
              if(this.PreloaderData.length < this.dics.length){
                this.PreloaderData.push(this.dics[i]); 
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
  onChangeAddDictionary({value}:{value:Dictionary}){
    value.url = this.imageURL;
    value.publication = (new Date()).getTime();
    this.statesService.addNewDictionary(value);
    this.isImage = false;
    this.imageURL = '';
  }
  search(query:string){
    this.searchClient = (query) ? this.dics.filter(wcity => wcity.name.toLowerCase().includes(query.toLowerCase())):this.dics;
    }
    todosRecets(){
      //this.searchClient = this.states
      this.statesService.getAllRecetDictionary().subscribe(dics =>this.dics = dics);
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
        this.statesService.deleteRecetDictionary(id);
      }
    }

}
