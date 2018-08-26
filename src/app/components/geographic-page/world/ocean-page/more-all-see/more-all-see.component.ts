
import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {OceanSee} from "../../../../../models/oceanSee";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-more-all-see',
  templateUrl: './more-all-see.component.html',
  styleUrls: ['./more-all-see.component.css']
})
export class MoreAllSeeComponent implements OnInit {

public OceanArm:string;
   idRecet:string;
    public isLogin:boolean;
    sees:OceanSee[];
    see: OceanSee = {
        id:"",
        name:"",
        area:"",
        in_area:"",
        deep:"",
        description:"",
        veryDeep:"",
        url:"",
        solty:"",
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
        this.onInitContinentBool();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetOceanSee(this.idRecet).subscribe(see => this.see = see);
      }
      onInitContinentBool(){
          var uri = this.router.url;
          var res = decodeURIComponent(uri);
           const splitUrl = res.split("/");
            splitUrl.forEach(function (value, key) {
                if(value == "Խաղաղ"){
                  this.OceanArm = value;
                }
                if(value == "Հնդկական"){
                  this.OceanArm = value;
                }
                if(value == "Հս-Սառուցյալ"){
                  this.OceanArm = value;
                }
                if(value == "Ատլանտյան"){
                  this.OceanArm = value;
                }
            }.bind(this))
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
