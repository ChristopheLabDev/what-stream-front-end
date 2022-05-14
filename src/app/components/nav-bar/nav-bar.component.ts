import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isAuthenticated = false; 

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if(token !== null && token !== '') {
      this.isAuthenticated = true;
    }

    this.authService.messager.subscribe((message: boolean) => {
      console.log("Un utilisateur s'est connecté ou déconnecté ! ");
      console.log(message);
      this.isAuthenticated = message;
    })

    this.authService.newsletter.subscribe((textNewsletter: string ) => {
      alert(textNewsletter);
    })
  }

  onClickLogout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/sign-in');
    /**
     *  - Supprimer le token dans le localStorage
        - Modifier la valeur de la propriété isAuthenticated à false
        - Rediriger l'utilisateur vers la page de connexion ("sign-in")
     */
  }

}
