import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRecordComponent } from './content-record/content-record.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageNewContentComponent } from './pages/page-new-content/page-new-content.component';


const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'home', component: ContentRecordComponent },
  { path: 'new-content', canActivate:[AuthGuard], component: PageNewContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
