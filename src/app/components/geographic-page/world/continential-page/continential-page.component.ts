import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-continential-page',
  templateUrl: './continential-page.component.html',
  styleUrls: ['./continential-page.component.css']
})
export class ContinentialPageComponent implements OnInit {
@ViewChild('mapContinent') mapContinent:ElementRef;
  constructor() { 
    
  }
  slideDown(event:Event){
    if((<HTMLElement>event.target).className == 'lnr lnr-plus-circle'){
      Array.prototype.map.call(this.mapContinent.nativeElement.children, (elm)=>{
        (<HTMLElement>elm.children[0].children[0]).className = 'lnr lnr-plus-circle';
        (<HTMLElement>elm.children[1]).style.height = 0 + 'px';
      })
      var heightMenuSlide = (<HTMLElement>event.target).parentElement.nextElementSibling.childElementCount
      * Number((<HTMLElement>event.target).parentElement.nextElementSibling.children[0].clientHeight);
      ((<HTMLElement>event.target).parentElement.nextElementSibling as HTMLElement).style.height = heightMenuSlide +'px';
      (<HTMLElement>event.target).className = 'lnr lnr-circle-minus'
    }
    else if((<HTMLElement>event.target).className == 'lnr lnr-circle-minus'){
      ((<HTMLElement>event.target).parentElement.nextElementSibling as HTMLElement).style.height = 0 +'px';
      (<HTMLElement>event.target).className = 'lnr lnr-plus-circle';
    }
  }
  ngOnInit() { 
   
    setTimeout(()=>{

      var contUl = [];
      Array.prototype.map.call(this.mapContinent.nativeElement.children, (elm)=>{
        contUl.push(elm);
        (<HTMLElement>elm.children[0]).onclick = (e:Event)=>{
          console.log(e)
          if((<HTMLElement>e.target).className == 'continential-active'){
            Array.prototype.map.call(contUl, element => {
              element.children[0].children[0].className = 'lnr lnr-plus-circle';
              element.children[1].style.height = 0 + 'px';
            });
          }
        }
      })
      
    }, 1000)
  }

}
