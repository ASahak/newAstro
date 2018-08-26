import { Component, OnInit } from '@angular/core';
//import { clearInterval } from 'timers';
import {AuthService} from "../../../services/auth.service";
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-astronomic-home-page',
  templateUrl: './astronomic-home-page.component.html',
  styleUrls: ['./astronomic-home-page.component.css'],
  animations: [
    trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: '0', transform:'translateX(-50px)' }),
            animate('.25s ease-out', style({ })),
        ]),
        transition(':leave', [
            style({ opacity: '.6' }),
            animate('.25s ease-out', style({  })),
        ]),
    ])]
})
export class AstronomicHomePageComponent implements OnInit {
  heightWindow;
  public isLogin:boolean;
  public animPlan:Boolean = false;
  public selectedIndex:number;
  public allObj:object; 
  public imagePath:string = null;
  public farSunPath:string = null;
  public farEarthPath:string = null;
  public rotSunPath:string = null;
  public rotOsPath:string = null;
  public countStogePath:string = null;
  public planetName: string;
  public touchEvent;
  public style:any;
  public d = new Date();
  public minn = this.d.getMinutes();
  public hour = this.d.getHours();
  public year;
  public monthStr;
  public dayNum;
  public yearHTML:HTMLButtonElement;
  public monthHTML  = <HTMLButtonElement>(document.querySelector("#month"));
  public monthArr = ["Հունվար ", "Փետրվար ", "Մարտ ", "Ապրիլ ", "Մայիս ", "Հունիս ", "Հուլիս ", "Օգոստոս ", "Սեպտեմբեր ", "Հոկտեմբեր ", "Նոյեմբեր ", "Դեկտեմբեր "];
  public playDis;
  public stopDis;
  public rangeDis;
  public opa2d;  
  public transformCommon:any;
  public selectedRam: Number;
  public selectedZoom: Number = 1;
  public valInput: Number = 0;
  constructor(  public authService:AuthService ) {
   this.heightWindow  = window.innerHeight;
   window.onresize = ()=>{
    this.heightWindow  = window.innerHeight;
   }
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(this.style);
    this.playDis = 'OK'
    this.stopDis = 'OK'
    this.opa2d = 'OK'
    this.touchEvent = ()=>{
      var src = document.getElementById("neptun"),
      tr = document.getElementById("trans");
      var clientX,
          clientY,
          typ = false,
          leftPos,
          topPos = 0,
          srcWidth = 0;
      tr.onmousedown =  function(e) {
          leftPos = tr.getBoundingClientRect().left;
          clientX = e.clientX;
          clientY = e.clientY - topPos;
          typ =  true;
          srcWidth = (window.innerWidth > 1200) ? src.getBoundingClientRect().width/2: src.getBoundingClientRect().width/2 + src.getBoundingClientRect().width/4;
          e.preventDefault()
      };
      window.onmouseup =  function(e) {
          typ =  false;
      };
      tr.onmousemove =  function(e) {
          if(typ && (e.clientX - clientX + leftPos) > -(srcWidth) && (e.clientX - clientX + leftPos) < (srcWidth - 200) && (e.clientY - clientY + topPos) < 250 && (e.clientY - clientY + topPos) > -250){
          
            if((e.clientX < clientX || e.clientY < clientY) || (e.clientX > clientX || e.clientY > clientY)){
              topPos = e.clientY - clientY;
              tr.style.transform = 'translate('+(e.clientX - clientX + leftPos)+'px, '+(e.clientY - clientY + topPos)+'px)'
            }
          }
      }
    }
    this.imagePath = '/favicon.ico'
    this.allObj = {
      sun:{
        img:'/assets/img/sun.png',
        farFromSun:'0',
        farFromEarth:'150 մլն կմ',
        rotateSun:'1',
        rotateOs:'25,05 օր',
        countStoge:'0'
      },
      mercury:{
        img:'/assets/img/merc.png',
        farFromSun:'58 մլն կմ',
        farFromEarth:'91 մլն կմ',
        rotateSun:'59 երկրային օր',
        rotateOs:'88 երկրային օր',
        countStoge:'0'
      },
      venus:{
        img:'/assets/img/venus.png',
        farFromSun:'108 մլն կմ',
        farFromEarth:'42 մլն կմ',
        rotateSun:'243 երկրային օր',
        rotateOs:'225 երկրային օր',
        countStoge:'0'
      },
      earth:{
        img:'/assets/img/earth.png',
        farFromSun:'150 մլն կմ',
        farFromEarth:'0',
        rotateSun:'365  օր',
        rotateOs:'23 ժ 57ր 4վրկ',
        countStoge:'1'
      },
      mars:{
        img:'/assets/img/mars.png',
        farFromSun:'228 մլն կմ',
        farFromEarth:'56 մլն կմ',
        rotateSun:'687  օր (1.88 տարի)',
        rotateOs:'24 ժ 37ր 22վրկ',
        countStoge:'2'
      },
      jupiter:{
        img:'/assets/img/jupiter.png',
        farFromSun:'778 մլն կմ',
        farFromEarth:'590 մլն կմ',
        rotateSun:'11.88 տարի)',
        rotateOs:'9 ժ 50ր',
        countStoge:'63-67'
      },
      saturn:{
        img:'/assets/img/saturn.png',
        farFromSun:'1,427 մլն կմ',
        farFromEarth:'1,280 մլն կմ',
        rotateSun:'29.5 տարի)',
        rotateOs:'10 ժ 40ր',
        countStoge:'60'
      },
      uran:{
        img:'/assets/img/uran.png',
        farFromSun:'2,870 մլն կմ',
        farFromEarth:'2,720 մլն կմ',
        rotateSun:'84 տարի)',
        rotateOs:'17 ժ 14ր',
        countStoge:'27'
      },
      neptune:{
        img:'/assets/img/neptune.png',
        farFromSun:'4,5 մլն կմ',
        farFromEarth:'4,35 մլն կմ',
        rotateSun:'165 տարի)',
        rotateOs:'17 ժ 6ր',
        countStoge:'13'
      },
    }
  }
  

   
  ngOnInit() {
    this.onComprobarUserLogin();
    this.touchEvent()
    this.AllLi(0);
    this.transformCommon = <HTMLButtonElement>(document.querySelector(".common_system"))
    this.year = this.d.getFullYear().toString();
    this.monthStr = this.monthArr[this.d.getMonth()];
    this.dayNum = this.d.getUTCDate();
    this.yearHTML = <HTMLButtonElement>(document.querySelector("#year"));
    this.monthHTML = <HTMLButtonElement>(document.querySelector("#month"));
    this.yearHTML.innerHTML = this.year;
    this.dayNum = (this.dayNum < 10)? "0"+this.dayNum:this.dayNum;
    this.monthHTML.innerHTML = this.monthStr + this.dayNum;
    
  }
  public interval;
  public interval2;
  public interval3;
  public wrkBigFunc;
  public AllLi = (event):void =>{
    
  var clockHTML = <HTMLButtonElement>(document.querySelector("#clock"))
    let s:any, m, h;
    function interZero():any{
      var d = new Date();
      function leftPad(str: string, len: number, ch='0'): string {
        len = len - str.length + 1;
        return len > 0 ?
        new Array(len).join(ch) + str : str;
      }
      s = leftPad(d.getSeconds().toString(), 2);
      m = leftPad(d.getMinutes().toString(), 2);
      h = leftPad(d.getHours().toString(), 2);
      s = (s> 60) ? s/60: s;
      clockHTML.innerHTML = h +' : '+ m +' : '+ s;
      
    }
    function interPlus(e, sec, min, hour):any{
      function leftPad(str: string, len: number, ch='0'): string {
        len = len - str.length + 1;
        return len > 0 ?
        new Array(len).join(ch) + str : str;
      }
      m = leftPad(Number(min).toString(), 2)
      s= sec;
      h = leftPad(Number(hour).toString(), 2)
      s = (s> 60) ? leftPad(Number(Math.abs(Math.ceil(s/60)-60)).toString(), 2): leftPad(Number(s).toString(), 2);
      clockHTML.innerHTML =h + " : " +m + " : " + s;
    }
    function interMinus(e, sec, min, hour):any{
      function leftPad(str: string, len: number, ch='0'): string {
        len = len - str.length + 1;
        return len > 0 ?
        new Array(len).join(ch) + str : str;
      }
      m = leftPad(Number(min).toString(), 2)
      s= Math.abs(sec);
      
      h = leftPad(Number(hour).toString(), 2)
       s = (s> 60) ? leftPad(Number(Math.abs(Math.ceil(s/60))).toString(), 2): leftPad(Number(s).toString(), 2);
      clockHTML.innerHTML =h + " : " +m + " : " + s;
    }
    
    var getMonth = (day, maxDay, indMonth, ):any=>{
      if(indMonth == "Դեկտեմբեր " && day > 31){
        this.year++
        this.yearHTML.innerHTML = this.year;
      }
      if(day > maxDay){
        this.dayNum = "0"+1;
        if(this.monthArr.indexOf(indMonth) < 11){
          this.monthStr = this.monthArr[this.monthArr.indexOf(indMonth)+1]
        }
        else{
          this.monthStr = this.monthArr[0]
        }
        if(this.monthArr.indexOf(indMonth) == 11)
        {
          this.monthHTML.innerHTML = this.monthArr[0] + this.dayNum;
        }
        else{
          this.monthHTML.innerHTML = this.monthStr + this.dayNum; 
        }
      }
    }
    var getMonthMinus = (day, maxDay, indMonth, ):any=>{
      if(day < 2){
        this.dayNum = maxDay+1;
        if(this.monthArr.indexOf(indMonth) < 11){
          this.monthStr = indMonth
        }
      
      }
    }
  
    
    if(parseInt(event) > 0){
      
      clearInterval(this.interval2)
      clearInterval(this.interval)
      clearInterval(this.interval3)
      let i = parseInt(event);
      this.interval2= setInterval(function (){
        if(i >= 60){
          i = 0;
          if(this.minn >= 60){
            this.hour+=Math.ceil(this.minn/60)
            this.minn = 0;
            if(this.hour >= 24){
              this.dayNum++;
              this.hour = 0;
              this.dayNum = (this.dayNum < 10)? "0"+this.dayNum:this.dayNum;
              this.monthHTML.innerHTML = this.monthStr + this.dayNum;
              switch(this.monthStr){
                case "Հունվար ":
                  getMonth(this.dayNum, 31, 'Հունվար ')
                break;
                case "Փետրվար ":
                  getMonth(this.dayNum, 28, 'Փետրվար ')
                break;
                case "Մարտ ":
                  getMonth(this.dayNum, 31, 'Մարտ ')
                break;
                case "Ապրիլ ":
                  getMonth(this.dayNum, 30, 'Ապրիլ ')
                break;
                case "Մայիս ":
                  getMonth(this.dayNum, 31, 'Մայիս ')
                break;
                case "Հունիս ":
                  getMonth(this.dayNum, 30, 'Հունիս ')
                break;
                case "Հուլիս ":
                  getMonth(this.dayNum, 31, 'Հուլիս ')
                break;
                case "Օգոստոս ":
                  getMonth(this.dayNum, 31, 'Օգոստոս ')
                break;
                case "Սեպտեմբեր ":
                  getMonth(this.dayNum, 31, 'Սեպտեմբեր ')
                break;
                case "Հոկտեմբեր ":
                  getMonth(this.dayNum, 31, 'Հոկտեմբեր ')
                break;
                case "Նոյեմբեր ":
                  getMonth(this.dayNum, 30, 'Նոյեմբեր ')
                break;
                case "Դեկտեմբեր ":
                  getMonth(this.dayNum, 31, 'Դեկտեմբեր ')
                break;
                
              }
            }
          }
          else{
            this.minn+=Math.ceil(parseInt(event)/60)
            
          }
        }
        else{
          i = i+parseInt(event)
        }
        interPlus(parseInt(event), i, this.minn, this.hour)
      
      }.bind(this), 1000/event)
    }
    if(parseInt(event) == 0){
      this.stopDis = "OK"
      this.playDis = "OK"
      clearInterval(this.interval2)
      clearInterval(this.interval3) 
      
      this.interval = setInterval(function(){
        interZero();
        this.year = this.d.getFullYear().toString();
        this.monthStr = this.monthArr[this.d.getMonth()];
        this.dayNum = this.d.getUTCDate();
        this.yearHTML.innerHTML = this.year;
        this.dayNum = (this.dayNum < 10)? "0"+Number(this.dayNum):this.dayNum;
        this.monthHTML.innerHTML = this.monthStr + this.dayNum;
      }.bind(this), 1000)
    }
    if(parseInt(event) < 0){
      clearInterval(this.interval)
      clearInterval(this.interval2)
      clearInterval(this.interval3)
      var lim = 0;
      let i = Math.abs(parseInt(event));
      this.interval3 = setInterval(function(){
        
        
        if(i < 10){
          if(Math.abs(i) > 60){
            this.minn -= Math.ceil(Math.abs(i)/60);
          }
          else{
            this.minn--
          }
          i = 60;
           if(this.minn < 0){
              this.hour--
               this.minn = 60;
             if(this.hour <= 0){
                this.dayNum--;
                 this.hour = 24;
                 this.dayNum = (this.dayNum < 10)? "0"+this.dayNum:this.dayNum;
                 this.monthHTML.innerHTML = this.monthStr + this.dayNum;
                 if(this.dayNum < 2){
                   if(this.monthArr.indexOf(this.monthStr)> 0){
                     this.monthStr = this.monthArr[this.monthArr.indexOf(this.monthStr)-1]
                    }
                    else if(this.monthArr.indexOf(this.monthStr) == 0){
                      this.year--
                      this.yearHTML.innerHTML = this.year;
                      this.monthStr = this.monthArr[this.monthArr.indexOf("Դեկտեմբեր ")]
                      
                   }
                    switch(this.monthStr){
                      case "Հունվար ":
                        getMonthMinus(this.dayNum, 31, 'Հունվար ')
                      break;
                      case "Փետրվար ":
                        getMonthMinus(this.dayNum, 28, 'Փետրվար ')
                      break;
                      case "Մարտ ":
                        getMonthMinus(this.dayNum, 31, 'Մարտ ')
                      break;
                      case "Ապրիլ ":
                        getMonthMinus(this.dayNum, 30, 'Ապրիլ ')
                      break;
                      case "Մայիս ":
                        getMonthMinus(this.dayNum, 31, 'Մայիս ')
                      break;
                      case "Հունիս ":
                        getMonthMinus(this.dayNum, 30, 'Հունիս ')
                      break;
                      case "Հուլիս ":
                        getMonthMinus(this.dayNum, 31, 'Հուլիս ')
                      break;
                      case "Օգոստոս ":
                        getMonthMinus(this.dayNum, 31, 'Օգոստոս ')
                      break;
                      case "Սեպտեմբեր ":
                        getMonthMinus(this.dayNum, 31, 'Սեպտեմբեր ')
                      break;
                      case "Հոկտեմբեր ":
                        getMonthMinus(this.dayNum, 31, 'Հոկտեմբեր ')
                      break;
                      case "Նոյեմբեր ":
                        getMonthMinus(this.dayNum, 30, 'Նոյեմբեր ')
                      break;
                      case "Դեկտեմբեր ":
                        getMonthMinus(this.dayNum, 31, 'Դեկտեմբեր ')
                      break;
                      
                    }
                  }
                }
             }
          // else{
          //   this.minn+=Math.ceil(parseInt(event)/60)
            // }
           
        }
        else{
            i -=Math.abs(parseInt(event))
        }
        
        interMinus(parseInt(event), i, this.minn, this.hour)
      }.bind(this), 1000/Math.abs(parseInt(event)))
    }
    let li = document.querySelectorAll(".common_system > div") as NodeListOf<HTMLInputElement>,
    arrSpeed = [10000, 7603200, 19440000, 31536000, 59356800, 378432000, 946080000, 2649024000, 5203440000];
    this.style.innerHTML = '';
    for(let i =1; i< li.length; i++){
       $(li[i]).children()[0].style.animationDuration= Math.abs(arrSpeed[i]/(event*event*event+1))+"s";
      // $($(li[i]).children()[0]).children()[0].style.animationDuration= Math.abs(arrSpeed[i]/(event*event*event+1))+"s";
      li[i].style.animationDuration= Math.abs(arrSpeed[i]/(event*event*event+1))+"s";
      
    }
    
    
    var arrMinus =[
      // {name:'sun', rot:-360, rotReal:360},
      {name:'merc', rot:-270, rotReal:90},
      {name:'venus', rot:-460, rotReal:460},
      {name:'earth', rot:-435, rotReal:435},
      {name:'mars', rot:-430, rotReal:430},
      {name:'jupiter', rot:-635, rotReal:635},
      {name:'saturn', rot:-440, rotReal:440},
      {name:'uran', rot:-625, rotReal:625},
      {name:'neptun', rot:-450, rotReal:450}
    ];
    for(let i =0; i< li.length-1; i++){
      var keyFrames;
      var keyFramesInvert;
      if(event < 0){
       
     
        keyFrames = '\
        @keyframes ' + arrMinus[i].name + ' {\
          from{\
            transform: rotateZ('+(360-arrMinus[i].rotReal)+'deg);\
          }\
          to {\
            transform: rotateZ(REPOdeg);\
          }\
        }';
       this.style.innerHTML += keyFrames.replace(/REPO/g, arrMinus[i].rot);
       
      }
      else{
        
        keyFrames = '\
        @keyframes ' + arrMinus[i].name + ' {\
          from{\
            transform: rotateZ('+(arrMinus[i].rotReal-360)+'deg);\
          }\
          to {\
            transform: rotateZ(REPOdeg);\
          }\
        }';
        this.style.innerHTML += keyFrames.replace(/REPO/g, arrMinus[i].rotReal);
        
      }
    }
    if(event < 0 ){
      keyFramesInvert = '\
      @keyframes invert {\
        from{\
          transform: rotateX(-90deg) rotateY(270deg) rotateZ(0deg);\
        }\
        to {\
          transform: rotateX(-90deg) rotateY(-90deg) rotateZ(0deg);\
        }\
      }';
       this.style.innerHTML += keyFramesInvert;
    }
    else{
      keyFramesInvert = '\
      @keyframes invert {\
        from{\
          transform: rotateX(-90deg) rotateY(-270deg) rotateZ(0deg);\
        }\
        to {\
          transform: rotateX(-90deg) rotateY(90deg) rotateZ(0deg);\
        }\
      }';
       this.style.innerHTML += keyFramesInvert;
    }
    
  }
  format3D = ()=>{
   $(this.transformCommon).addClass('transformCommon');
  }
  format2D = ()=>{
    $(this.transformCommon).removeClass('transformCommon')
   }
        
  pauseSolar(a):void{
    this.playDis = false
    this.rangeDis = "OK"
    clearInterval(this.interval2)
    clearInterval(this.interval)
    clearInterval(this.interval3)
    let li = document.querySelectorAll(".common_system > div") as NodeListOf<HTMLInputElement>;
    for(let i =0; i< li.length; i++){
      li[i].style.animationPlayState= 'paused';
      $(li[i].children[0]).css({
        animationPlayState:'paused'
      })
    }
  }
  playSolar(a):void{
    this.rangeDis = false
    this.AllLi(this.wrkBigFunc);
    let li = document.querySelectorAll(".common_system > div") as NodeListOf<HTMLInputElement>;
    for(let i =0; i< li.length; i++){
      li[i].style.animationPlayState= 'running';
      $(li[i].children[0]).css({
        animationPlayState:'running'
      })
    }
    
  }
  speedPlanets(event):void{
    this.stopDis = false;
    this.wrkBigFunc = event.target.value 
    this.AllLi(event.target.value);
  }
  setTime(value){
    this.selectedRam = Number(value);
    this.selectedZoom = Number('1.') + Number(this.selectedRam) / 100;
  };
  clickData(elem, idNumm:number):void{
    this.selectedIndex = idNumm;
    this.animPlan  = true;
    var elemattr = elem.target.attributes['data-name'].value;
    this.imagePath = this.allObj[elemattr].img;
    this.farSunPath = this.allObj[elemattr].farFromSun;
    this.farEarthPath = this.allObj[elemattr].farFromEarth;
    this.rotSunPath = this.allObj[elemattr].rotateSun;
    this.rotOsPath = this.allObj[elemattr].rotateOs;
    this.countStogePath = this.allObj[elemattr].countStoge;
    this.planetName = elem.target.innerText;
    let li = document.querySelectorAll(".common_system > div") as NodeListOf<HTMLInputElement>;
    if(idNumm > 0){
      for(let i =1; i< li.length; i++){
        li[i].style.border = '1px solid rgba(255,255,255,.4)'
      }
      li[idNumm].style.border= '1px solid #fff'; 
    }
    else{
      for(let i =1; i< li.length; i++){
        li[i].style.border = '1px solid rgba(255,255,255,.4)'
      }
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
