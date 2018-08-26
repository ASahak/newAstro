import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import {AuthService} from "../services/auth.service"
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public router:Router,
        public authService:AuthService
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
        .take(1)
        .map(authState => !! authState)
        .do(authenticated =>{
            if(!authenticated){
                this.router.navigate(['/admin'])
            }
        });
  }
}
