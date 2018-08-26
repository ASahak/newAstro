import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AppreciatedTools} from '../models/Appreciated';
import {ApprecitedResetService} from "../services/apprecited-reset.service";
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  @ViewChild('resStar') mapStarResult:ElementRef;
  @ViewChild('rightBar') rightBar:ElementRef;
  @ViewChild('leftBar') leftBar:ElementRef;
  @ViewChild('formAppreciated') formAppreciated:ElementRef;
  public isLogin:boolean;
  public numberUse:string;
  public emailUse:string;
  public photoUse:string;
  public passUse:string;
  clearStar;
  comment:string = '';
  starArr:any = [];
  emailTrue:'';
  UserTrue:Boolean = false;
  UserBoolean:Boolean = false;
  noUser:Boolean = true;
  rotateRight:Number = 90;
  rotateLeft:Number = 0;
  public starFunc:Function;
  public reasonFunc:Function;
  public same:string;
  public UserId:string;
  public ResultObject = {
    design:[],
    textQuality:[],
    suitable:[],
    commonAppreciated:[]

  }
  public EndlickResult:Object = {
    enddesign:null,
    endtextQuality:null,
    endsuitable:null,
    endcommonAppreciated:null
  }
  appreciteds:AppreciatedTools[];
  apprecited:AppreciatedTools = {
    // id:'',
    design:null,
    textQuality:null,
    suitable:null,
    commonAppreciated:null,
    emailSet:null,
    authProfile:{
      name:'',
      image:'',
      comment:''
    },
    publication:''
  }
  constructor(
      public resetService:ApprecitedResetService,
      public authService:AuthService,
      public router:Router,
      public flashMensaje:FlashMessagesService
  ){
    
  }
  onChangeAppreciated(){
    
    
      this.starFunc = () =>{    
        let i =0;
        this.clearStar =  setInterval(()=>{
          i++;
          if(i < 4){
              this.starArr.map((elm, mls)=>{
                elm.style.color = '#ff0018'
            })
            setTimeout(() => {
              this.starArr.map((elm, mls)=>{
                elm.classList.remove('activeStars')
                elm.style.color = '#212529'
              })
            },500);
          }
        }, 1000)
      };
      if(this.isLogin){
        this.UserTrue = false;
        this.apprecited.emailSet = this.UserId;
        this.apprecited.authProfile.comment = this.comment;
        this.apprecited.authProfile.name = this.numberUse;
        this.apprecited.authProfile.image = this.photoUse;
        if(!this.UserBoolean){
          this.starFunc();
        }
        if(this.comment == ''){
          document.getElementById('comment').style.border = '1px solid #ff0018';
        }
      }
      else{
        if(this.comment != ''){
          this.UserTrue = true;
        }
        this.apprecited.emailSet = this.emailTrue;
        this.apprecited.authProfile = {
          name:'',
          image:'',
          comment:''
        };
        if(this.emailTrue == undefined || this.emailTrue == ''){
          document.getElementById('emailTrue').style.border = '1px solid #ff0018'
        }
        if((this.emailTrue == undefined || this.emailTrue == '') && !this.UserBoolean){
          document.getElementById('emailTrue').style.border = '1px solid #ff0018';
          this.starFunc();
        }
        if(this.comment != ''){
          document.getElementById('emailTrue').style.border = '1px solid #ced4da';
        }
        if(!this.UserBoolean){
          this.starFunc();
        }
      }
      this.noUser = true
      Array.prototype.map.call(this.appreciteds, (elm, ind)=>{
        if(this.apprecited.emailSet == elm.emailSet){
          this.noUser = false
        }
      })
      if(this.noUser){
        if((this.UserBoolean && this.apprecited.emailSet != undefined && this.apprecited.emailSet != '' && this.comment == '' && !this.isLogin) || (this.comment != '' && this.isLogin && this.UserBoolean)){
          this.apprecited.publication = (new Date()).getTime();
          this.resetService.addNewAppreciated(this.apprecited)
          if(!this.isLogin){
            document.getElementById('emailTrue').style.border = '1px solid #ced4da';
            document.getElementById('comment').style.border = '1px solid #ced4da';
            this.flashMensaje.show(`Ձեր գնահատականը ուղարկվել է:՝`,
            {cssClass:"alert-success", timeout:5000})
            this.UserTrue = false;
          }
          else{
            document.getElementById('emailTrue').style.border = '1px solid #ced4da';
            document.getElementById('comment').style.border = '1px solid #ced4da';
            this.flashMensaje.show(`Շնորհակալություն ${this.apprecited.authProfile.name } Ձեր գնահատականը ուղարկվել է:՝`,
            {cssClass:"alert-success", timeout:5000})
            this.UserTrue = false;
          }
          
          setTimeout(()=>{
            this.comment = '';
            this.emailTrue = '';
            this.starArr.map((elm, mls) => {
              elm.classList.remove('activeStars')
              elm.style.color = '#212529'
            })
            this.UserBoolean = false;
            this.authService.logOut()
            
            Array.prototype.map.call(Object.keys(this.apprecited), (elm)=>{
              this.apprecited.design = 0
              this.apprecited.textQuality = 0
              this.apprecited.suitable = 0
              this.apprecited.commonAppreciated = 0
            })
          }, 2000)
        }
      }
      else{
        this.comment = '';
        this.emailTrue = '';
        document.getElementById('comment').style.border = '1px solid #ced4da';
        this.starArr.map((elm, mls) => {
          elm.classList.remove('activeStars')
          elm.style.color = '#212529'
        })
        this.flashMensaje.show('Դուք չեք կարող երկրորդ անգամ գնահատել:',
        {cssClass:"alert-danger", timeout:5000})
        this.authService.logOut()
      }
    

  }
  commonOpinion(){
    Array.prototype.map.call(this.appreciteds, (elm)=>{
      this.ResultObject.design.push(elm.design)
      this.ResultObject.textQuality.push(elm.textQuality)
      this.ResultObject.suitable.push(elm.suitable)
      this.ResultObject.commonAppreciated.push(elm.commonAppreciated)
    })
    var sum = 0,
        middNumber = 0; 
    Object.keys(this.ResultObject).forEach((elm)=>{
      for(let i = 0;i< this.ResultObject[elm].length; i++){
        sum+= this.ResultObject[elm][i]
      }
      middNumber = Math.round(sum/this.ResultObject[elm].length);
      this.EndlickResult['end'+elm] = middNumber;
      middNumber = 0;
      sum = 0;
    })
    var elemRef = this.mapStarResult.nativeElement;
    for(let i =0; i < 4; i++){
      for(let j = 0; j < this.EndlickResult[Object.keys(this.EndlickResult)[i]]; j++){
        console.log(elemRef.children[i].children[1].children[1].children[j].style.color = '#f96014')
      }
    }
    this.leftBar.nativeElement.style.zIndex = '-1';
    this.rightBar.nativeElement.style.zIndex = '22';
    this.rotateLeft = 90;
    this.rotateRight = 0;
  }
  backOpinion(){
    this.leftBar.nativeElement.style.zIndex = '22';
    this.rightBar.nativeElement.style.zIndex = '-1';
    this.rotateLeft = 0;
    this.rotateRight = 90;
  }
  yourOpinion(){
    this.formAppreciated.nativeElement.classList.add('formBody')
    var styles = `
      top: 35px;
      z-index: 2224;
      visibility:visible;
      opacity: 1;
    `
    this.formAppreciated.nativeElement.style = styles;
    window.onclick = (e:Event)=>{
      if((<HTMLElement>e.target).className == 'formApreciate formBody'){
        this.formAppreciated.nativeElement.classList.remove('formBody')
        var styles = `
          top: -50%;
          z-index: -1;
          opacity: 0;
          visibility:hidden;
        `
        this.formAppreciated.nativeElement.style = styles;
      }
    }
  }
  closeOpinion(){
    this.formAppreciated.nativeElement.classList.remove('formBody')
    var styles = `
      top: -50%;
      z-index: -1;
      opacity: 0;
      visibility:hidden;
    `
    this.formAppreciated.nativeElement.style = styles;
  }

  withinGoogle(){
    this.authService.loginGoogle()
    .then((res) =>{
        // this.router.navigate(["./privade"])
    }).catch(err =>{
      this.flashMensaje.show(`Ձեր մուտքը ձախողվեց, կրկին փորձեք:՝`,
        {cssClass:"alert-danger", timeout:5000})
        console.log(err.message)
    })
  }
  withinFacebook(){
      this.authService.loginFacebook()
      .then((res) =>{
          // this.router.navigate(["./privade"])
      }).catch(err =>{
        this.flashMensaje.show(`Ձեր մուտքը ձախողվեց, կրկին փորձեք:՝`,
          {cssClass:"alert-danger", timeout:5000})
          console.log(err.message)
      })
  }
  
  withinGithub(){
    this.authService.loginGithub()
    .then((res) =>{
        // this.router.navigate(["./privade"])
    }).catch(err =>{
      this.flashMensaje.show(`Ձեր մուտքը ձախողվեց, կրկին փորձեք:՝`,
          {cssClass:"alert-danger", timeout:5000})
        console.log(err.message)
    })
}
  
  borderNone(th){
    document.getElementById('emailTrue').style.border = '1px solid #ced4da';
  }
  borderNoneText(th){
    document.getElementById('comment').style.border = '1px solid #ced4da';
  }
  
    ngOnInit(){
      this.todosRecets();
      
    
      this.authService.getAuth().subscribe(auth=>{
        if(auth){
            if(auth.uid != '7HNNQLHYdSeHzZlKABfF7zjn6Ez1'){
              this.isLogin = true;
            }
            this.numberUse = auth.displayName;
            this.emailUse = auth.email;
            this.photoUse = auth.photoURL;
            this.UserId = auth.uid;
            document.getElementById('emailTrue').style.border = '1px solid #ced4da';
            this.UserTrue = false;
        }
        else{
            this.isLogin = false;
        }
    })
    
      var publicData = document.querySelectorAll('.leftBar .startsEach'),
      bool:Boolean = false;
      this.reasonFunc = (th)=>{
        var indElem;    
        Array.prototype.map.call(Object.values(th), (elm, mls)=>{
          Array.prototype.map.call(elm.children, (e, m)=>{
            this.starArr.push(e)
            e.onmouseover = ():void=>{
              indElem = Array.prototype.indexOf.call(e.parentNode.children, e)
              for(let i =0; i <= indElem; i++){
                e.parentNode.children[i].style.color = '#f96014'
              }
            }
            e.onmouseleave = ():void=>{
              indElem = Array.prototype.indexOf.call(e.parentNode.children, e)
              for(let i =0; i <= indElem; i++){
                if(!e.parentNode.children[i].className.match(/activeStars/g)){
                  e.parentNode.children[i].style.color = '#212529'
                }
              }
            }
            e.onclick = ():void=>{
              window.clearInterval(this.clearStar)
              bool = true;
              indElem = Array.prototype.indexOf.call(e.parentNode.children, e)
              switch(e.parentNode.getAttribute('data-model')){
                case 'design':
                  this.apprecited.design = indElem+1;
                  this.UserBoolean = true;
                  break;
                case 'textQuality':
                  this.apprecited.textQuality = indElem+1;
                  this.UserBoolean = true;
                break;
                case 'suitable':
                  this.apprecited.suitable = indElem+1;
                  this.UserBoolean = true;
                  break;
                case 'commonAppreciated':
                  this.apprecited.commonAppreciated = indElem+1;
                  this.UserBoolean = true;
                break;  
                default:
                  break;  
              }
              for(let i =0; i < 5; i++){
                e.parentNode.children[i].classList.remove('activeStars')
                e.parentNode.children[i].style.color = '#212529'
              }
              for(let i =0; i <= indElem; i++){
                e.parentNode.children[i].classList.add('activeStars')
                e.parentNode.children[i].style.color = '#f96014'
              }
            }
          })
        })
      }
      this.reasonFunc(publicData);
  }
  todosRecets(){
    this.resetService.getAllUsers().subscribe(appreciteds => this.appreciteds = appreciteds)
  }

}
