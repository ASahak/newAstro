import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {FarZone} from "../../../../../models/FarZone";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-edit-far-zone-page',
  templateUrl: './edit-far-zone-page.component.html',
  styleUrls: ['./edit-far-zone-page.component.css']
})
export class EditFarZonePageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  imageURL: string = '';
  public isLogin:boolean;
  public idRecet:string;
  public isValue:string;
  public isImage:boolean;
  farZones:FarZone[];
  farZone: FarZone = {
    id:'',
    name:'',
    description:'',
    img:'',
    publication:''
  }
  constructor(
       public resetService:AstronomicMixService,
      public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage
  ) {
    
    }
    upload(event) {
      const file = event.target.files[0]
      const path = `FarZonePhotos/${new Date().getTime()}_${file.name}`;
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.afStorage.upload(path, file)
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.task.downloadURL();
      console.log(this.downloadURL.toPromise().then(
          res => {
            console.log(res);
            this.imageURL = res
          }
        ))
        this.isImage = true;
     }

     
    ngOnInit() {
      this.todosRecets();
      this.onComprobarUserLogin();
    }
    onModificarRecetFarZone({value} : {value:FarZone}){
      value.id = this.idRecet;
      value.img = this.imageURL;
      if(value.img == '' ){
        value.img = this.farZone.img
      }
      this.resetService.updateRecetFarZone(value)
      this.router.navigate(['./astronomic/far-zone'])
  }
  
   todosRecets(){
    this.idRecet = this.route.snapshot.params['id'];
      this.resetService.getOneRecetFarZone(this.idRecet).subscribe(farZone =>this.farZone = farZone);
    }
    onClickDelete(id, allData){
      if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
        this.resetService.deleteRecetFarZone(id);
      }
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