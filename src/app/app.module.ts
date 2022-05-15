import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentRecordComponent } from './content-record/content-record.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageNewContentComponent } from './pages/page-new-content/page-new-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentRecordComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageCardsComponent,
    PageNewContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
