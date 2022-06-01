import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRecordComponent } from './content-record/content-record.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageMyContentsComponent } from './pages/page-my-contents/page-my-contents.component';
import { PageNewContentComponent } from './pages/page-new-content/page-new-content.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageUpdateContentComponent } from './pages/page-update-content/page-update-content.component';


const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'content', component: ContentRecordComponent },
  // { path: 'new-content', canActivate:[AuthGuard], component: PageNewContentComponent },
  { path: 'new-content',  component: PageNewContentComponent },
  { path: 'my-contents',  component: PageMyContentsComponent },
  { path: 'update-content/:id-content',  component: PageUpdateContentComponent },
  { path: 'sign-in',  component: PageSignInComponent },
  { path: 'sign-up',  component: PageSignUpComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
