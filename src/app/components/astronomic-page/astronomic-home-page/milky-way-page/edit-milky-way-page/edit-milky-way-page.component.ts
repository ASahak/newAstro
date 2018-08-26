

import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {MilkyWay} from "../../../../../models/MilkyWay";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-milky-way-page',
  templateUrl: './edit-milky-way-page.component.html',
  styleUrls: ['./edit-milky-way-page.component.css']
})
export class EditMilkyWayPageComponent implements OnInit {
  public isValue:string;
  private idRecet:string;
   public isLogin: boolean;
   milkyWays:MilkyWay[];
   milkyWay: MilkyWay = {
       id:"",
       title:"",
       value:"",
       publication:""
   }
    constructor(
      public recetService:AstronomicMixService,
      public authService:AuthService,
        public route: ActivatedRoute,
        public router:Router
    ) {

    }


   ngOnInit() {
       this.onComprobarUserLogin();
       this.getDetailsRecet();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetMilkyWay(this.idRecet).subscribe(milkyWay => this.milkyWay = milkyWay);
      }
      onModificarRecetMilkyWay({value} : {value:MilkyWay}){
          value.id = this.idRecet;
          this.recetService.updateRecetMilkyWay(value)
          this.router.navigate(['./astronomic/milky-way'])
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

}
