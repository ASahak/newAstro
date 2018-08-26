import { Component, OnInit } from '@angular/core';
import {GeoMixResetService} from "../../../../../services/geo-mix-reset.service";
import {Dictionary} from "../../../../../models/Dictionary";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-dictionary',
  templateUrl: './edit-dictionary.component.html',
  styleUrls: ['./edit-dictionary.component.css']
})
export class EditDictionaryComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  dics:Dictionary[];
  idRecet:string;
  public isLogin:Boolean = false;
  public isImage:Boolean = false;
  public isValue:string;

  dic: Dictionary = {
    id:"",
    name:"",
    url:"",
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
    this.recetService.getOneRecetDictionary(this.idRecet).subscribe(dic => this.dic = dic);
  }
  upload(event) {
    const file = event.target.files[0]
    const path = `DictionaryPhotos/${new Date().getTime()}_${file.name}`;
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

onModificarRecetDictionary({value} : {value:Dictionary}){
      value.id = this.idRecet;
      //(value.url == undefined) ? value.url = this.state.url:value.url = this.imageURL;
      value.url = this.imageURL;
      if(value.url == undefined ){
        value.url = this.dic.url
      }
      this.recetService.updateRecetDictionary(value)
      this.router.navigate(['./geographic/world/dictionary'])
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
