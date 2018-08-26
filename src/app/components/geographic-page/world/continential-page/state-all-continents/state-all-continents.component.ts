import { Component, OnInit, Pipe, PipeTransform, ViewChild, ElementRef  } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import { animate, style, transition, trigger } from '@angular/animations';
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../../services/auth.service";
import {States} from "../../../../../models/States";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-state-all-continents',
  templateUrl: './state-all-continents.component.html',
  styleUrls: ['./state-all-continents.component.css'],
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
        ])]
})

@Pipe({name: 'keys'})
export class StateAllContinentsComponent implements OnInit, PipeTransform  {
    @ViewChild('query') queryFocus:ElementRef;
    @ViewChild('label') labelFocus:ElementRef;
    styleForm;
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
          keys.push({key: key, value: value[key]});
        }
        return keys;
      }
      
  private PubCode:Object ={
    "south-america": ['AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE'],
    "north-america": ['AG', 'AI', 'AW', 'BB', 'BL', 'BM', 'BQ', 'BS', 'BZ', 'CA', 'CR', 'CU', 'CW', 'DM', 'DO', 'GD', 'GL', 'GP', 'GT', 'HN', 'HT', 'JM', 'KN', 'KY', 'LC', 'MF', 'MQ', 'MS', 'MX', 'NI', 'PA', 'PM', 'PR', 'SV', 'SX', 'TC', 'TT', 'US', 'VC', 'VG', 'VI'],
    "australia": ['AS', 'AU', 'CK', 'FJ', 'FM', 'GU', 'KI', 'MH', 'MP', 'NC', 'NF', 'NR', 'NU', 'NZ', 'PF', 'PG', 'PN', 'PW', 'SB', 'TK', 'TL', 'TO', 'TV', 'UM', 'VU', 'WF', 'WS'],
    "europa":['AD', 'AL', 'AT', 'AX', 'BA', 'BE', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FO', 'FR', 'GB', 'GG', 'GI', 'GR', 'HR', 'HU', 'IE', 'IM', 'IS', 'IT', 'JE', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'UA', 'VA', 'XK'],
    "asia":['AE', 'AF', 'AM', 'AZ', 'BD', 'BH', 'BN', 'BT', 'CC', 'CN', 'CX', 'GE', 'HK', 'ID', 'IL', 'IN', 'IO', 'IQ', 'IR', 'JO', 'JP', 'KG', 'KH', 'KP', 'KR', 'KW', 'KZ', 'LA', 'LB', 'LK', 'MM', 'MN', 'MO', 'MV', 'MY', 'NP', 'OM', 'PH', 'PK', 'PS', 'QA', 'SA', 'SG', 'SY', 'TH', 'TJ', 'TM', 'TR', 'TW', 'UZ', 'VN', 'YE'],
    "africa": ['AO',  'BF',  'BI',  'BJ',  'BW',  'CD',  'CF',  'CG',  'CI',  'CM',  'CV',  'DJ',  'DZ',  'EG',  'EH',  'ER',  'ET',  'GA',  'GH',  'GM',  'GN',  'GQ',  'GW',  'KE',  'KM',  'LR',  'LS',  'LY',  'MA',  'MG',  'ML',  'MR',  'MU',  'MW',  'MZ',  'NA',  'NE',  'NG',  'RE',  'RW',  'SC',  'SD',  'SH',  'SL',  'SN',  'SO',  'SS',  'ST',  'SZ',  'TD',  'TG',  'TN',  'TZ',  'UG',  'YT',  'ZA',  'ZM',  'ZW' ]
    };
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
   uploadProgress: Observable<number>;
   downloadURL: Observable<string>;
   uploadState: Observable<any>;
   uploadProgressFlag: Observable<number>;
   downloadURLFlag: Observable<string>;
   uploadStateFlag: Observable<any>;
   public isImage:Boolean = false;
   imageURL: string;
   imageFlagURL: string;
   public idRecet:string;
   public isLogin:boolean;
   public isValue:string;
   searchClient: States[];
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
  AddForm(){
    this.styleForm = Object.assign({
        top:60+'px',
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
  upload(event) {
    const file = event.target.files[0]
    const path = `StatePhotos/${new Date().getTime()}_${file.name}`;
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
uploadFlag(event){
  const file = event.target.files[0]
  const path = `StatePhotosFlag/${new Date().getTime()}_${file.name}`;
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.afStorage.upload(path, file)
  this.uploadProgressFlag = this.task.percentageChanges();
  this.downloadURLFlag = this.task.downloadURL();
  console.log(this.downloadURLFlag.toPromise().then(
      res => {
        console.log(res);
        this.imageFlagURL = res
      }
    ))
    this.isImage = true;
}
ngOnInit() {
   
    this.todosRecets();
    this.onInitContinentBool();
    this.onComprobarUserLogin()
}
  search(query:string){

    this.searchClient = (query) ? this.states.filter(state => state.name.toLowerCase().includes(query.toLowerCase())):this.states;
  }
    onChangeAddStates({value}:{value:States}){
        value.url = this.imageURL;
        value.flag = this.imageFlagURL;
        console.log(value)
        value.publication = (new Date()).getTime();
        this.statesService.addNewStates(value);
        this.isImage = false;
        this.imageURL = '';
        this.imageFlagURL = '';
    }

   onInitContinentBool(){
        const splitUrl = this.url.path().split("/");
         splitUrl.forEach(function (value, key) {
             if(value == "asia"){
                 this.isValue = 'asia'
             }
             if(value == "europa"){
                 this.isValue = 'europa'
             }
             if(value == "africa"){
                 this.isValue = 'africa'
             }
             if(value == "australia"){
                 this.isValue = 'australia'
             }
             if(value == "antarktida"){
                 this.isValue = 'antarktida'
             }
             if(value == "north-america"){
                 this.isValue = 'north-america'
             }
             if(value == "south-america"){
                 this.isValue = 'south-america'
             }
         }.bind(this))
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
    onClickDelete(id){
      if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
          this.statesService.deleteRecetStates(id);
      }
    }
}
