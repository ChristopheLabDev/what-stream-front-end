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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageMyContentsComponent } from './pages/page-my-contents/page-my-contents.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageUpdateContentComponent } from './pages/page-update-content/page-update-content.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentRecordComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageCardsComponent,
    PageNewContentComponent,
    PageMyContentsComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageUpdateContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
