import { Component, OnInit } from '@angular/core';
import {ContinetsResetService} from "../../../../../../services/continets-reset.service";
import {Continents} from "../../../../../../models/continents";
import {AuthService} from "../../../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-edit-continents',
  templateUrl: './edit-continents.component.html',
  styleUrls: ['./edit-continents.component.css']
})
export class EditContinentsComponent implements OnInit {
continents:Continents[];
 idRecet:string;
  public isLogin:boolean;
 continentsName = [
     {name:'Եվրասիա'},
     {name:'Աֆրիկա'},
     {name:'Հս.Ամերիկա'},
     {name:'Հվ.Ամերիկա'},
     {name:'Անտարկտիդա'},
     {name:'Ավստրալիա'}
]
  continent:Continents ={
        id:"",
        name:"",
        area:"",
        high_pic:"",
        under_pic:"",
        population:"",
        publication:""
    }
  
  constructor(
    public recetService:ContinetsResetService, 
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
        this.recetService.getOneRecetContinents(this.idRecet).subscribe(continent => this.continent = continent);
    }
    onModificarRecetContinents({value} : {value:Continents}){
        value.id = this.idRecet;
        this.recetService.updateRecetContinet(value)
        this.router.navigate(['./geographic/world/continential/'])
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
