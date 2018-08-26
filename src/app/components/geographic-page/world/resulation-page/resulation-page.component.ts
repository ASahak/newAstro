import { Component, OnInit, HostListener  } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-resulation-page',
  templateUrl: './resulation-page.component.html',
  styleUrls: ['./resulation-page.component.css']
})
export class ResulationPageComponent implements OnInit {
frtInd : number;
frtIndVert : number;
innerHeight: any;
uploadProgress: number;
innerHeightNavBar: any;
  constructor() {
    this.innerHeight = (window.innerHeight);
    this.innerHeightNavBar =  (<HTMLTextAreaElement>document.querySelector('.navbar'));
    this.innerHeightNavBar = this.innerHeightNavBar.clientHeight + 40;
    this.frtInd = 0;
    this.frtIndVert = 0;
    this.uploadProgress = 0;
 }
 private callNext(e:Event):void{
  let childs_length = document.getElementById('izoLine').children.length;
  let child_chevron = document.querySelector('.circle_analog').children;
  if(this.frtInd < childs_length-1){
    this.frtInd++;
     this.nextFunc(this.frtInd, child_chevron);
    this.uploadProgress+=10;
  }
  if (this.frtInd == childs_length-1){
    child_chevron[1].classList.remove('active_chevron')
    child_chevron[1].classList.add('disable_chevron')
    child_chevron[3].classList.remove('disable_chevron')
    child_chevron[3].classList.add('active_chevron')
  }
}
private callPrev(e:Event):void{
  let childs_length = document.getElementById('izoLine').children.length;
  let child_chevron = document.querySelector('.circle_analog').children;
  if(this.frtInd > 0 && this.frtIndVert == 0){
    child_chevron[3].classList.remove('active_chevron')
    child_chevron[3].classList.add('disable_chevron')
    this.uploadProgress-=10
    this.frtInd--;
    this.prevFunc(this.frtInd, child_chevron)
  }
  if (this.frtInd == 0){
    child_chevron[2].classList.remove('active_chevron')
    child_chevron[2].classList.add('disable_chevron')
  }
}
private callDown(e:Event):void{
  let childs_length = document.getElementById('izoLine').children.length;
  let child_chevron = document.querySelector('.circle_analog').children;
  var subCount =0;
  for(let i=0; i < document.getElementById('izoLine').children[this.frtInd].children.length; i++){
    if(document.getElementById('izoLine').children[this.frtInd].children[i].classList.contains('subChild')){
      child_chevron[2].classList.remove('active_chevron')
      child_chevron[2].classList.add('disable_chevron'); 
      child_chevron[0].classList.remove('disable_chevron')
      child_chevron[0].classList.add('active_chevron');  
      subCount++;
      if(subCount == document.getElementById('izoLine').children[this.frtInd].children.length-1){
        child_chevron[3].classList.remove('active_chevron')
        child_chevron[3].classList.add('disable_chevron'); 
      }
      if(this.frtIndVert < subCount){
        this.frtIndVert++;
        return this.downFunc(this.frtIndVert, {
          commSub: document.getElementById('izoLine').children[this.frtInd].children[0],
          chldSubs : document.getElementById('izoLine').children[this.frtInd].children[i],
          chldSubn : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert-1],
          chldChv:child_chevron
        })
      }
    }
  }
}
private callUp(e:Event):void{
  var childs_length = document.getElementById('izoLine').children.length;
  var child_chevron = document.querySelector('.circle_analog').children;
  for(let i=0; i < document.getElementById('izoLine').children[this.frtInd].children.length; i++){
    if(document.getElementById('izoLine').children[this.frtInd].children[i].classList.contains('subChild')){
      child_chevron[3].classList.remove('disable_chevron')
      child_chevron[3].classList.add('active_chevron'); 
      if(this.frtIndVert > 0){
        this.frtIndVert--;
        if(this.frtIndVert == 0){
          child_chevron[0].classList.remove('active_chevron')
          child_chevron[0].classList.add('disable_chevron');
          child_chevron[2].classList.remove('disable_chevron')
          child_chevron[2].classList.add('active_chevron');
        }
        return this.upFunc({
          chldSubs : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert],
          chldSubn : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert+1],
          chldChv:child_chevron
        })
      }
      
    }
  }
}

  @HostListener('document:keydown', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    var childs_length = document.getElementById('izoLine').children.length;
    var child_chevron = document.querySelector('.circle_analog').children;
    if(event.keyCode == 39){
      if(this.frtInd < childs_length-1){
        this.frtInd++;
         this.nextFunc(this.frtInd, child_chevron);
        this.uploadProgress+=10;
      }
      if (this.frtInd == childs_length-1){
        child_chevron[1].classList.remove('active_chevron')
        child_chevron[1].classList.add('disable_chevron')
        child_chevron[3].classList.remove('disable_chevron')
        child_chevron[3].classList.add('active_chevron')
      }
    }
    if(event.keyCode == 37){
      if(this.frtInd > 0 && this.frtIndVert == 0){
        child_chevron[3].classList.remove('active_chevron')
        child_chevron[3].classList.add('disable_chevron')
        this.uploadProgress-=10
        this.frtInd--;
        this.prevFunc(this.frtInd, child_chevron)
      }
      if (this.frtInd == 0){
        child_chevron[2].classList.remove('active_chevron')
        child_chevron[2].classList.add('disable_chevron')
      }
    }
    if(event.keyCode == 38){
      for(let i=0; i < document.getElementById('izoLine').children[this.frtInd].children.length; i++){
        if(document.getElementById('izoLine').children[this.frtInd].children[i].classList.contains('subChild')){
          child_chevron[3].classList.remove('disable_chevron')
          child_chevron[3].classList.add('active_chevron'); 
          if(this.frtIndVert > 0){
            this.frtIndVert--;
            if(this.frtIndVert == 0){
              child_chevron[0].classList.remove('active_chevron')
              child_chevron[0].classList.add('disable_chevron');
              child_chevron[2].classList.remove('disable_chevron')
              child_chevron[2].classList.add('active_chevron');
            }
            return this.upFunc({
              chldSubs : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert],
              chldSubn : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert+1],
              chldChv:child_chevron
            })
          }
          
        }
      }
    }
    if(event.keyCode == 40){
      var subCount =0;
      for(let i=0; i < document.getElementById('izoLine').children[this.frtInd].children.length; i++){
        if(document.getElementById('izoLine').children[this.frtInd].children[i].classList.contains('subChild')){
          child_chevron[2].classList.remove('active_chevron')
          child_chevron[2].classList.add('disable_chevron'); 
          child_chevron[0].classList.remove('disable_chevron')
          child_chevron[0].classList.add('active_chevron');  
          subCount++;
          if(subCount == document.getElementById('izoLine').children[this.frtInd].children.length-1){
            child_chevron[3].classList.remove('active_chevron')
            child_chevron[3].classList.add('disable_chevron'); 
          }
          if(this.frtIndVert < subCount){
            this.frtIndVert++;
            return this.downFunc(this.frtIndVert, {
              commSub: document.getElementById('izoLine').children[this.frtInd].children[0],
              chldSubs : document.getElementById('izoLine').children[this.frtInd].children[i],
              chldSubn : document.getElementById('izoLine').children[this.frtInd].children[this.frtIndVert-1],
              chldChv:child_chevron
            })
          }
        }
      }
    }
  }
  private nextFunc(n, chld){
    var childs = document.getElementById('izoLine').children;
    console.log(childs[n].children.length)
    for(let i=0; i < childs[n].children.length; i++){
        if(childs[n].children[i].classList.contains('subChild')){

        }
        else{
          chld[2].classList.remove('disable_chevron')
          chld[2].classList.add('active_chevron')

        }
    }
    childs[n].classList.remove('futureRotate3d')
    childs[n].classList.add('presentRotate3d')
    childs[n-1].classList.add('pastRotate3d')
    childs[n-1].classList.remove('presentRotate3d')
  }
  private prevFunc(n, chld){
    var childs = document.getElementById('izoLine').children;
    console.log(n)
    for(let i=0; i < childs[n].children.length; i++){
      if(childs[n].children[i].classList.contains('subChild')){

      }
      else{
        chld[1].classList.remove('disable_chevron')
        chld[1].classList.add('active_chevron')
      }
    }
    childs[n].classList.remove('pastRotate3d')
    childs[n].classList.add('presentRotate3d')
    childs[n+1].classList.remove('presentRotate3d')
    childs[n+1].classList.add('futureRotate3d')
  }
  private downFunc(n, chld){
    var childs = document.getElementById('izoLine').children;
    chld.chldChv[1].classList.remove('active_chevron')
    chld.chldChv[1].classList.add('disable_chevron')
    chld.chldSubn.classList.remove('presentSub')
    chld.chldSubn.classList.add('pastSub')
    chld.commSub.classList.add('pastSub')
    chld.chldSubs.classList.remove('futureSub')
    chld.chldSubs.classList.add('presentSub')
  }
  private upFunc(chld){
    var childs = document.getElementById('izoLine').children;
    chld.chldSubn.classList.remove('presentSub')
    chld.chldSubn.classList.add('futureSub')
    chld.chldSubs.classList.remove('pastSub')
    chld.chldSubs.classList.add('presentSub')
  }
   ngOnInit() {
     var el: HTMLElement = document.getElementById('izoLine')
     console.log(this.innerHeightNavBar)
     console.log(this.innerHeight)
     el.style.height = (this.innerHeight - this.innerHeightNavBar)+'px';
  }

}
