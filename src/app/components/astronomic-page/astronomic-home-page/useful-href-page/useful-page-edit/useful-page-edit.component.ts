import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {UsefulHref} from "../../../../../models/UsefulHref";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-useful-page-edit',
  templateUrl: './useful-page-edit.component.html',
  styleUrls: ['./useful-page-edit.component.css']
})
export class UsefulPageEditComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadDictionary: Observable<any>;
  imageURL: string = '';
  public isLogin:boolean;
  public isImage:boolean;
  public idRecet:string;
 usefulHrefs:UsefulHref[];
 usefulHref: UsefulHref = {
    id:'',
    name:'',
    url:'',
    desc:'',
    publication:''
  }
  constructor(
     
    public resetService:AstronomicMixService,
    public authService:AuthService,
    public route: ActivatedRoute,
    public router:Router,
    private afStorage: AngularFireStorage
  ) { }
  upload(event) {
    const file = event.target.files[0]
    const path = `UsefulHrefPhotos/${new Date().getTime()}_${file.name}`;
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
    this.getDetailsRecet();
    this.onComprobarUserLogin();
  }
  getDetailsRecet(){
    this.idRecet = this.route.snapshot.params['id'];
    this.resetService.getOneRecetUsefulHref(this.idRecet).subscribe(usefulHref => this.usefulHref = usefulHref);
  }
  onModificarRecetUsefulHref({value} : {value:UsefulHref}){

    value.id = this.idRecet;
    value.url = this.imageURL;
    if(value.url == '' ){
      value.url = this.usefulHref.url
    }
    this.resetService.updateRecetUsefulHref(value)
    this.router.navigate(['./astronomic/useful-references'])
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
