import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public email: string;
public password: string;

  constructor(
    public authService:AuthService,
    public router:Router,
    private flashMensaje:FlashMessagesService
  ) { }

  ngOnInit() {
      
  }
    onSubmitLogin(){
        return this.authService.loginEmail(this.email, this.password)
            .then((res)=>{
                this.flashMensaje.show(`Մուտք:Ճ`,
                {cssClass:"alert-success", timeout:2000})
                setTimeout(()=>{
                    this.router.navigate(['/'])
                }, 1000)
            }).catch(err=>{
                this.flashMensaje.show(`Սխալ եք լրացրել լրացման դաշտերը՝`,
                {cssClass:"alert-danger", timeout:3000})
                console.log(err.message)
            })
    }
    
}
