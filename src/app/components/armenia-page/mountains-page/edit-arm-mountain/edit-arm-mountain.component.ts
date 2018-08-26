
import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../../services/recet.service";
import {Mountains} from "../../../../models/mountains";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-arm-mountain',
  templateUrl: './edit-arm-mountain.component.html',
  styleUrls: ['./edit-arm-mountain.component.css']
})
export class EditArmMountainComponent implements OnInit {
 mountains:Mountains[];
 idRecet:string;
  public isLogin:boolean;
    
  mountain:Mountains ={
        id:"",
        name:"",
        pic:"",
        high:"",
        publication:""
    }
  constructor(
    public recetService:RecetService, 
    public authService:AuthService,
      public route: ActivatedRoute,
      public router:Router
  ) { 
    
  }
    

  ngOnInit() {
     this.onComprobarUserLogin();
    this.getDetailsRecet();
  }
    getDetailsRecet(){
        this.idRecet = this.route.snapshot.params['id'];
        this.recetService.getOneRecetMountain(this.idRecet).subscribe(mountain => this.mountain = mountain);
    }
    onModificarRecetMountains({value} : {value:Mountains}){
        value.id = this.idRecet;
        this.recetService.updateRecetMountain(value)
        this.router.navigate(['./geographic/armenia/mountains/'])
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
