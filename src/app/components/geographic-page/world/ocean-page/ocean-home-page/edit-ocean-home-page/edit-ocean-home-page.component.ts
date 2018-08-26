import { Component, OnInit } from '@angular/core';
import {OceanResetService} from "../../../../../../services/ocean-reset.service";
import {Oceans} from "../../../../../../models/ocean";
import {AuthService} from "../../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-ocean-home-page',
  templateUrl: './edit-ocean-home-page.component.html',
  styleUrls: ['./edit-ocean-home-page.component.css']
})
export class EditOceanHomePageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  public isImage:boolean;
  public isValue:string;

  oceans:Oceans[];
   idRecet:string;
    public isLogin:boolean;
    ocean: Oceans = {
        id:"",
        name:"",
        area:"",
        deep:"",
        url:"",
        description:"",
        veryDeep:"",
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
       this.onComprobarUserLogin();
      this.getDetailsRecet();
    }
      getDetailsRecet(){
          this.idRecet = this.route.snapshot.params['id'];
          this.recetService.getOneRecetOceans(this.idRecet).subscribe(ocean => this.ocean = ocean);
      }
      onModificarRecetOceans({value} : {value:Oceans}){
          value.id = this.idRecet;
          value.url = this.imageURL;
          if(value.url == undefined ){
            value.url = this.ocean.url
          }
          this.recetService.updateRecetOceans(value)
          this.router.navigate(['./geographic/world/ocean/'])
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
