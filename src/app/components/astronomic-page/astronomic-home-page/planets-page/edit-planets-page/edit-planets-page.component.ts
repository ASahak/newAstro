
import { Component, OnInit } from '@angular/core';
import {AstronomicMixService} from "../../../../../services/astronomic-mix.service";
import {Planets} from "../../../../../models/Planets";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../../../services/auth.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-edit-planets-page',
  templateUrl: './edit-planets-page.component.html',
  styleUrls: ['./edit-planets-page.component.css']
})
export class EditPlanetsPageComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<any>;

  imageURL: string;
  idRecet:string;
  public isLogin:boolean;
  public isImage:boolean;
  public isValue:string;

  planets:Planets[];
  planet: Planets = {
    id:'',
    name:'',
    diameter:'',
    weight:'',
    farEarth:'',
    rotOs:'',
    temperature:null,
    stoogeCount:null,
    discoverYear:null,
    inSort:'',
    periheli:'',
    apoheli:'',
    bigAnomalia:'',
    speed:'',
    image:'',
    description:'',
    publication:''
  }
  constructor(
    public resetService:AstronomicMixService,
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router,
      private afStorage: AngularFireStorage

  ) { }

  ngOnInit() {
    this.todosRecets();
    this.onComprobarUserLogin()
    this.getDetailsRecet()
  }
  getDetailsRecet(){
    this.idRecet = this.route.snapshot.params['id'];
    this.resetService.getOneRecetPlanets(this.idRecet).subscribe(planet => this.planet = planet);
  }
  todosRecets(){
    this.resetService.getAllRecetsPlanets().subscribe(planets =>this.planets = planets);
  }
  upload(event) {
    const file = event.target.files[0]
    const path = `PlanetsPhotos/${new Date().getTime()}_${file.name}`;
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

onModificarRecetPlanets({value} : {value:Planets}, plans){

      value.id = this.idRecet;
      value.image = this.imageURL;
      if(value.image == undefined ){
        value.image = this.planet.image
      }
      this.resetService.updateRecetPlanets(value)
      this.router.navigate(['./astronomic/planets/'+plans[0].name+'/'+plans[0].id])
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
