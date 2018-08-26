import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {States} from "../../../../../models/States";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-more-continents-all',
  templateUrl: './more-continents-all.component.html',
  styleUrls: ['./more-continents-all.component.css']
})
export class MoreContinentsAllComponent implements OnInit {
  imageURL: string;
  public idRecet:string;
  public isLogin:boolean;
  public isValue:string;
  public isValueArm:string;
  public OneData:any;
  states:States[];
  state: States = {
      id:"",
      name:"",
      capital:"",
      population:"",
      area:"",
      url:"",
      in_area:"",
      flag:"",
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
      this.recetService.getOneRecetStates(this.idRecet).subscribe(state => this.state = state);
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
