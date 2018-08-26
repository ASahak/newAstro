
import { Component, OnInit } from '@angular/core';
import {ContinentsStatesService} from "../../../../../services/continents-states.service";
import {Islands} from "../../../../../models/island";
import {AuthService} from "../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-edit-all-icelands',
  templateUrl: './edit-all-icelands.component.html',
  styleUrls: ['./edit-all-icelands.component.css']
})
export class EditAllIcelandsComponent implements OnInit {
islands:Islands[];
 idRecet:string;
  public isLogin:boolean;
  island:Islands ={
    id:"",
    name:"",
    area:"",
    in_the:"",
    publication:""
  }

  constructor(
    public statesService:ContinentsStatesService,
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
        this.statesService.getOneRecetIslands(this.idRecet).subscribe(island => this.island = island);
    }
    onModificarRecetIslands({value} : {value:Islands}){
        value.id = this.idRecet;
        this.statesService.updateRecetIslands(value)
        this.router.navigate(['./geographic/world/island/'])
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
