import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRecordComponent } from './content-record/content-record.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageNewContentComponent } from './pages/page-new-content/page-new-content.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';


const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'home', component: ContentRecordComponent },
  // { path: 'new-content', canActivate:[AuthGuard], component: PageNewContentComponent },
  { path: 'new-content',  component: PageNewContentComponent },
  { path: 'sign-in',  component: PageSignInComponent },
  { path: 'sign-up',  component: PageSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
