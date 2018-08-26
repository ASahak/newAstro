

import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {Interesing} from "../../../../../models/Interesing";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-interesing',
  templateUrl: './edit-interesing.component.html',
  styleUrls: ['./edit-interesing.component.css']
})
export class EditInteresingComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  idRecet:string;

  public isLogin:boolean;
  public isValue:string;
  
  ints:Interesing[];
  int: Interesing = {
    id:"",
    description:"",
    publication:"",
  }
  constructor(
    public recetService:GeoMixResetService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage

  ) { }

  ngOnInit() {
    this.onComprobarUserLogin()
    this.getDetailsRecet()
  }
  getDetailsRecet(){
    this.idRecet = this.route.snapshot.params['id'];
    this.recetService.getOneRecetInteresing(this.idRecet).subscribe(int => this.int = int);
  }

onModificarRecetInteresing({value} : {value:Interesing}){
      value.id = this.idRecet;
    
      this.recetService.updateRecetInteresing(value)
      this.router.navigate(['./geographic/world/interesing'])
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
