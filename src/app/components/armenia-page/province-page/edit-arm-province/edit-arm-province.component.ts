
import { Component, OnInit } from '@angular/core';
import {RecetService} from "../../../../services/recet.service";
import {Provinces} from "../../../../models/provinces";
import {AuthService} from "../../../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-arm-province',
  templateUrl: './edit-arm-province.component.html',
  styleUrls: ['./edit-arm-province.component.css']
})
export class EditArmProvinceComponent implements OnInit {
 provinces:Provinces[];
 idRecet:string;
  public isLogin:boolean;
    Provinces_obj = [
       {id: 1, name: "Գեղարքունիք", center:"Գավառ"},
       {id: 2, name: "Կոտայք", center:"Հրազդան"},
       {id: 3, name: "Լոռի", center:"Վանաձոր"},
       {id: 4, name: "Շիրակ", center:"Գյումրի"},
       {id: 5, name: "Արարատ", center:"Արտաշատ"},
       {id: 6, name: "Տավուշ", center:"Իջևան"},
       {id: 7, name: "Արագածոտն", center:"Թալին"},
       {id: 8, name: "Վայոց Ձոր", center:"Եղեգնաձոր"},
       {id: 9, name: "Սյունիք", center:"Կապան"},
       {id: 10, name: "Երևան", center:"Երևան"}
     ];
    
  province:Provinces = {
        id:"",
        name:"",
        center:"",
        area:"",
        population:"",
        description:"",
        density:"",
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
        this.recetService.getOneRecetProvince(this.idRecet).subscribe(province => this.province = province);
    }
    onModificarRecetProvince({value} : {value:Provinces}){
        value.id = this.idRecet;
        this.recetService.updateRecetProvince(value)
        this.router.navigate(['./geographic/armenia/province/'])
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
