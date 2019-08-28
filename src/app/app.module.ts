import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/main-header/header.component';
import { FooterComponent } from './component/main-footer/footer.component';
import { MainBodyComponent } from './component/main-body/main-body.component';
import { DetailSidenavComponent } from './component/detail/detail-sidenav/detail-sidenav.component';
import { DetailItemComponent } from './component/detail/detail-item/detail-item.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {DetailGroupviewComponent} from './component/detail/detail-groupview/detail-groupview.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainBodyHeaderComponent } from './component/main-body/main-body-header/main-body-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    DetailSidenavComponent,
    DetailItemComponent,
    // DetailContentComponent,
    DetailGroupviewComponent,
    // DetailContentComponent,
    DetailGroupviewComponent,
    SignupComponent,
    SigninComponent,
    MainBodyHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
