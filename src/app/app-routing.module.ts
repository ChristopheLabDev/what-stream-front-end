import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentRecordComponent } from './content-record/content-record.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';


const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'home', component: ContentRecordComponent },
  { path: 'cards', component: PageCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
