import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { MycomComponent } from './testEnvironmemt/mycom/mycom.component';
import { MainComponent } from './cmp/main/main.component';
import { LoginComponent } from './cmp/login/login.component';
import { SidebarComponent } from './newcmp/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MycomComponent,
    MainComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
