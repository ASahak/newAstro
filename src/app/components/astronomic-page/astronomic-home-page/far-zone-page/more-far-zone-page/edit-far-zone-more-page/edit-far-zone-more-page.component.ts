import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../../services/astronomic-mix.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthService} from "../../../../../../services/auth.service";
import {FarZone} from "../../../../../../models/farZone";
import {FarZoneMore} from "../../../../../../models/farZoneMore";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-far-zone-more-page',
  templateUrl: './edit-far-zone-more-page.component.html',
  styleUrls: ['./edit-far-zone-more-page.component.css']
})
export class EditFarZoneMorePageComponent implements OnInit {
  public isLogin:boolean;
  public idRecet:string;
  public routeSub;
  public epm;
  constructor(
    public resetService:AstronomicMixService,
    public authService:AuthService,
    public route: ActivatedRoute,
    public router:Router,
    private afStorage: AngularFireStorage
  ) { }
  farZones:FarZone[];
  farZone: FarZone = {
    id:'',
    name:'',
    description:'',
    img:'',
    publication:''
  }
  farZoneMores:FarZoneMore[];
  farZoneMore: FarZoneMore = {
    id:'',
    name:'',
    type:'',
    periheli:'',
    apoheli:'',
    rotSun:'',
    discover:null,
    stooge:null,
    publication:null
  }

  ngOnInit() {
    this.todosRecets();
    this.onComprobarUserLogin();
  }


 todosRecets(){
  this.idRecet = this.route.snapshot.params['id'];
  window.location.href.split('/').forEach((elm, mls)=>{
    if(elm == 'more'){
      this.epm = window.location.href.split('/')[mls+1];
    }
  })
  this.resetService.getOneRecetFarZone(this.epm).subscribe(farZone =>this.farZone = farZone);
  this.resetService.getAllRecetsFarZone().subscribe(farZones =>this.farZones = farZones);
    this.resetService.getOneRecetFarZoneMore(this.idRecet).subscribe(farZoneMore =>this.farZoneMore = farZoneMore);
  }

  onModificarRecetFarZoneMore({value} : {value:FarZoneMore}){
    value.id = this.idRecet;
    this.resetService.updateRecetFarZoneMore(value)
    this.router.navigate(['./astronomic/far-zone/more/'+ this.epm])
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
