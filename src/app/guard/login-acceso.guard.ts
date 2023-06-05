import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAccesoGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Obtener el token almacenado
    const token = localStorage.getItem('token');

    // Verificar si el token existe y está vigente
    if (token) {
      // Aquí puedes agregar lógica adicional para verificar si el token es válido
      this.router.navigate(['/dashboard']);
      return true; // Permitir el acceso a la ruta protegida
    }

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
    return false; // Denegar el acceso a la ruta protegida
  }

}
