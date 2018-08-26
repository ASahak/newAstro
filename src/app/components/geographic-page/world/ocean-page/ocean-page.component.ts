import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Oceans} from "../../../../models/ocean";
import {AuthService} from "../../../../services/auth.service";
import {OceanResetService} from "../../../../services/ocean-reset.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-ocean-page',
  templateUrl: './ocean-page.component.html',
  styleUrls: ['./ocean-page.component.css']
})
export class OceanPageComponent implements OnInit {
  @ViewChild('mapOcean') mapOcean:ElementRef;
  public idRecet:string;
  public isValue:string;

oceans:Oceans[];
public isLogin: boolean;
ocean: Oceans = {
    id:"",
    name:"",
    area:"",
    deep:"",
    veryDeep:"",
    description:"",
    url:"",
    temperature:"",
    publication:""
}
  constructor(
    public recetService:OceanResetService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router
  ) { }
  slideDown(event:Event){
    if((<HTMLElement>event.target).className == 'lnr lnr-plus-circle'){
      Array.prototype.map.call(this.mapOcean.nativeElement.children, (elm)=>{
        (<HTMLElement>elm.children[0]).classList.remove('ocean-activee');
        (<HTMLElement>elm.children[0].children[0]).className = 'lnr lnr-plus-circle';
        (<HTMLElement>elm.children[1]).style.height = 0 + 'px';
      })
      var heightMenuSlide = (<HTMLElement>event.target).parentElement.nextElementSibling.childElementCount
      * Number((<HTMLElement>event.target).parentElement.nextElementSibling.children[0].clientHeight);
      ((<HTMLElement>event.target).parentElement.nextElementSibling as HTMLElement).style.height = heightMenuSlide +'px';
      (<HTMLElement>event.target).className = 'lnr lnr-circle-minus';
      (<HTMLElement>event.target).parentElement.classList.add('ocean-activee');
    }
    else if((<HTMLElement>event.target).className == 'lnr lnr-circle-minus'){
      ((<HTMLElement>event.target).parentElement.nextElementSibling as HTMLElement).style.height = 0 +'px';
      (<HTMLElement>event.target).className = 'lnr lnr-plus-circle';
    }
  }
  ngOnInit() {
    setTimeout(()=>{

      var contUl = [];
      Array.prototype.map.call(this.mapOcean.nativeElement.children, (elm)=>{
        contUl.push(elm);
        (<HTMLElement>elm.children[0]).onclick = (e:Event)=>{
          if((<HTMLElement>e.target).classList[0] == 'ocean-active'){
            console.log(e);
            Array.prototype.map.call(contUl, element => {
              element.children[0].classList.remove('ocean-activee');
              element.children[0].children[0].className = 'lnr lnr-plus-circle';
              element.children[1].style.height = 0 + 'px';
            });
            (<HTMLElement>e.target).classList.add('ocean-activee');
          }
          
        }
      })
      
    }, 1000)
    this.todosRecets()
  }
  todosRecets(){
     this.recetService.getAllRecetOceans().subscribe(oceans =>this.oceans = oceans);
 }
  oceans_select = [
   {name:'Խաղաղ'},
   {name:'Ատլանտյան'},
   {name:'Հս-Սառուցյալ'},
   {name:'Հնդկական'},
   {name:'Հարավային'}
  ]

}
