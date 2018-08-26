
import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../../services/recet.service";
import {Rivers} from "../../../../models/rivers";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-arm-river',
  templateUrl: './edit-arm-river.component.html',
  styleUrls: ['./edit-arm-river.component.css']
})
export class EditArmRiverComponent implements OnInit {
 rivers:Rivers[];
 idRecet:string;
  public isLogin:boolean;
    
  river:Rivers ={
        id:"",
        name:"",
        in_falls:"",
        long:"",
        longArm:"",
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
        this.recetService.getOneRecetRiver(this.idRecet).subscribe(river => this.river = river);
    }
    onModificarRecetRivers({value} : {value:Rivers}){
        value.id = this.idRecet;
        this.recetService.updateRecetRiver(value)
        this.router.navigate(['./geographic/armenia/rivers/'])
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
