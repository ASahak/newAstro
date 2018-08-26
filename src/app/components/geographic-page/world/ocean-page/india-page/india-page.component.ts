

import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {Oceans} from "../../../../../models/ocean";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-india-page',
  templateUrl: './india-page.component.html',
  styleUrls: ['./india-page.component.css']
})
export class IndiaPageComponent implements OnInit {


  oceans:Oceans[];
   idRecet:string;
    public isLogin:boolean;
    ocean: Oceans = {
        id:"",
        name:"",
        area:"",
        deep:"",
        url:"",
        veryDeep:"",
        description:"",
        temperature:"",
        publication:""
    }

    constructor(
      public recetService:OceanResetService,
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
          this.recetService.getOneRecetOceans(this.idRecet).subscribe(ocean => this.ocean = ocean);
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
