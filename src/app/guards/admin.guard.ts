import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.isAdmin();
   
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.isAdmin();
  }
}
