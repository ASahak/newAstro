import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../../services/recet.service";
import {Citys} from "../../../../models/citys";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-arm-city',
  templateUrl: './edit-arm-city.component.html',
  styleUrls: ['./edit-arm-city.component.css']
})
export class EditArmCityComponent implements OnInit {
  citys:Citys[];
  idRecet:string;
  public isLogin:boolean;
    provinces = [
       {id: 1, name: "Գեղարքունիք"},
       {id: 2, name: "Կոտայք"},
       {id: 3, name: "Լոռի"},
       {id: 4, name: "Շիրակ"},
       {id: 5, name: "Արարատ"},
       {id: 6, name: "Տավուշ"},
       {id: 7, name: "Արագածոտն"},
       {id: 8, name: "Վայոց Ձոր"},
       {id: 9, name: "Սյունիք"},
       {id: 10, name: "Երևան"}
     ];
    
  city:Citys ={
        id:"",
        name:"",
        in_the:"",
        area:"",
        population:"",
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
        this.recetService.getOneRecet(this.idRecet).subscribe(city => this.city = city);
    }
    onModificarRecet({value} : {value:Citys}){
        value.id = this.idRecet;
        this.recetService.updateRecet(value)
        this.router.navigate(['./geographic/armenia/city/'])
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
