import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Passage par le guard !!!');
    
    const token = localStorage.getItem('token');

    if(token !== null && token !== '') {
      const decodedToken: { userId: string, iat: number, exp: number} = jwtDecode(token);
       // Ici le typage de mon token est fait en local sans besoin d'un model spécifique
      // le choix à été fait car je ne vais pas me reservir de ce modèle à d'autre endroit
    console.log(decodedToken);
    const expirationDate = new Date(decodedToken.exp * 1000);
    /**
       * On transforme date contenue dans le token en objet Date : 
       * la date dans le token est exprimée en secondes écoulées
       * depuis le 1 janvier 1970, on la transforme en millisecondes
       * pour pouvoir utiliser le constructeur new Date() qui attend en 
       * argument un nombre de millisecondes.
       */
    const currentDate = new Date();

     //const currentDate = new Date("03/06/22");
     // juste pour le test, utiliser une date supérieure à la date de péremption du token

     if(expirationDate < currentDate) {
       //token périmé
       // 1- Supprimer mon token du localstorage
       //2 - rediriger mon utilisateur vers /sign-in
       // 3- retourner false
       localStorage.removeItem('token');
       this.router.navigateByUrl('/sign-in');
       return false;
     
      } else {
        // token valide (au niveau de sa date)
        return true; 
      }

     } else {
       this.router.navigateByUrl('sign-in');
       return false;

      }
    }
  }
