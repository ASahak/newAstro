import { Component, OnInit } from '@angular/core';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {WorldCity} from "../../../../../models/WorldCity";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  wcitys:WorldCity[];
  idRecet:string;
  public isLogin:boolean;
  public isImage:boolean;
  public isValue:string;

  wcity: WorldCity = {
    id:"",
    name:"",
    in_the:"",
    population:"",
    area:"",
    url:"",
    density:"",
    in_continent:"",
    description:"",
    publication:""
  }
  constructor(
    public recetService:ContinentsStatesService,
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
    this.recetService.getOneRecetWorldCity(this.idRecet).subscribe(wcity => this.wcity = wcity);
  }
  upload(event) {
    const file = event.target.files[0]
    const path = `WCityPhotos/${new Date().getTime()}_${file.name}`;
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

onModificarRecetWorldCity({value} : {value:WorldCity}){
      value.id = this.idRecet;
      //(value.url == undefined) ? value.url = this.state.url:value.url = this.imageURL;
      value.url = this.imageURL;
      if(value.url == undefined ){
        value.url = this.wcity.url
      }
      this.recetService.updateRecetWorldCity(value)
      this.router.navigate(['./geographic/world/citys'])
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
