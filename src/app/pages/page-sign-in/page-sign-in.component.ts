import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {
signInError = false; 
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * SI VOUS ÊTES PERDU VOICI UN PLAN D'ACTION : 
   * 
   //  - Création du composant page-sign-in : ng g c sign-in
   //  - MàJ Routing pour afficher notre page sign in (http://locahost:4200/sign-in)
   //  - MàJ de notre html de nav-bar pour pouvoir accéder à la page sign-in au clic
   //  - Ajout du code du formulaire HTML en static 
   //  - Transformation du formulaire statique en template driven  
   //  - Affichage du contenu des champs du formulaire dans notre console !
   //  - Création d'une nouvelle méthode dans notre service (pour POST vers /login)
   //  - Appel de cette méthode dans notre composant page-sign-in pour envoyer nos info de connexion vers l'API
   //  - S'inspirer de ce qu'on a fait sur le sign-up (pour la partie TS)
   // TODO - Affichage du token reçu si la connexion est une réussite
   //  YOUPI !!! 😄

*/
   onSubmitSignIn(form: NgForm){
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      // method a appeler en cas de succès 
      next: (resp: any) => {
        console.log(resp.token);

        this.router.navigateByUrl('/');
        // TODO stockage de mon token
        // Localstorage
        localStorage.setItem("token", resp.token);
        this.authService.messager.next(true);
      },
      // method a appeler en cas d'error
      error: (err: any) => {
        // affichage message d'erreur coté page
        this.signInError = true;
        console.log(err);
        this.authService.newsletter.next('Erreur de connexion ...');
      }
    })

    /**
     * Observable.subscribe({
     *  next: () => { *instructions* },
     *  error: () => { *instructions* }
     * })
     */

   }

}
