import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Pools} from "../../../../../models/PoolsContinent";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-more-pools-continent',
  templateUrl: './more-pools-continent.component.html',
  styleUrls: ['./more-pools-continent.component.css']
})
export class MorePoolsContinentComponent implements OnInit {
  imageURL: string;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  public isValueArm:string;

  pools:Pools[];
  pool: Pools = {
      id:"",
      name:"",
      deep:"",
      url:"",
      area:"",
      in_area:"",
      solty:"",
      description:"",
      publication:""
  }

 constructor(
     public recetService:ContinentsStatesService,
     public authService:AuthService,
     public route: ActivatedRoute,
     public router:Router,
     private url:LocationStrategy,
     private afStorage: AngularFireStorage
 ) {
 }

 ngOnInit() {
     this.getDetailsRecet();
     this.onComprobarUserLogin();
     this.onInitContinentBool();
 }
  onInitContinentBool(){
       const splitUrl = this.url.path().split("/");
        splitUrl.forEach(function (value, key) {
            if(value == "asia"){
                this.isValueArm = 'Ասիա';
                this.isValue = 'asia'
            }
            if(value == "europa"){
                this.isValueArm = 'Եվրոպա';
                this.isValue = 'europa'
            }
            if(value == "africa"){
                this.isValueArm = 'Աֆրիկա';
                this.isValue = 'africa'
            }
            if(value == "australia"){
                this.isValueArm = 'Ավստրալիա';
                this.isValue = 'australia'
            }
            if(value == "antarktida"){
                this.isValueArm = 'Անտարկտիդա';
                this.isValue = 'antarktida'
            }
            if(value == "north-america"){
                this.isValueArm = 'Հս.Ամերիկա';
                this.isValue = 'north-america'
            }
            if(value == "south-america"){
                this.isValueArm = 'Հվ.Ամերիկա';
                this.isValue = 'south-america'
            }
        }.bind(this))
   }
   getDetailsRecet(){
      this.idRecet = this.route.snapshot.params['id'];
      this.recetService.getOneRecetPools(this.idRecet).subscribe(pool => this.pool = pool);
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
