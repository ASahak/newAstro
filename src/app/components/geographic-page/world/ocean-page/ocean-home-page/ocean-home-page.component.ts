

import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../services/ocean-reset.service";
import {Oceans} from "../../../../../models/ocean";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs/Subject";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFirestore} from "angularfire2/firestore";
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-ocean-home-page',
  templateUrl: './ocean-home-page.component.html',
  styleUrls: ['./ocean-home-page.component.css']
})
export class OceanHomePageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;
  styleForm;
  public isImage:Boolean = false;
  imageURL: string;
  public idRecet:string;
  public isValue:string;

oceans:Oceans[];
public isLogin: boolean;
ocean: Oceans = {
    id:"",
    name:"",
    area:"",
    deep:"",
    description:"",
    veryDeep:"",
    url:"",
    temperature:"",
    publication:""
}
  constructor(
    public recetService:OceanResetService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage
  ) {

  }
  AddForm(){
    this.styleForm = Object.assign({
        top:120+'px',
        visibility:'visible',
        zIndex:'2223'
      })
      window.onclick = (e)=>{
          console.log((<HTMLElement>e.target).className.split(' ')[0])
        if((<HTMLElement>e.target).className.split(' ')[0] == 'formAdded'){
            this.styleForm = Object.assign({
                top:0+'px',
                visibility:'hidden',
                zIndex:'-1'
            })          
        }
      }
}
closeForm(){
  this.styleForm = Object.assign({
    top:0+'px',
    visibility:'hidden',
    zIndex:'-1'
  })
}
  upload(event) {
    const file = event.target.files[0]
    const path = `OceansPhotos/${new Date().getTime()}_${file.name}`;
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
    onChangeAddOcean({value}:{value:Oceans}){
      value.url = this.imageURL;
        value.publication = (new Date()).getTime();
        //this.authService.getAuth().subscribe(city =>{
            this.recetService.addNewOceans(value)
            this.isImage = false;
            this.imageURL = '';
        //})
    }
     todosRecets(){
        this.recetService.getAllRecetOceans().subscribe(oceans =>this.oceans = oceans);
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
    onClickDelete(id){
        if(confirm("Ցանկանում եք հեռացնել տվյալը անվերարարձ՞?")){
            this.recetService.deleteRecetOceans(id);
            //this.router.navigate(['/'])

        }
    }
}
