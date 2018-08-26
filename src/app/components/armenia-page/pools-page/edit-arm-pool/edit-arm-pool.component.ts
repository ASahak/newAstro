

import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../../services/recet.service";
import {Pools} from "../../../../models/pools";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-arm-pool',
  templateUrl: './edit-arm-pool.component.html',
  styleUrls: ['./edit-arm-pool.component.css']
})
export class EditArmPoolComponent implements OnInit {
 pools:Pools[];
 idRecet:string;
  public isLogin:boolean;
    
  pool:Pools ={
        id:"",
        name:"",
        in_the:"",
        height:"",
        area:"",
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
        this.recetService.getOneRecetPool(this.idRecet).subscribe(pool => this.pool = pool);
    }
    onModificarRecetPools({value} : {value:Pools}){
        value.id = this.idRecet;
        this.recetService.updateRecetPool(value)
        this.router.navigate(['./geographic/armenia/pools/'])
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

