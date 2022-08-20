import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/main/header/header.component';
import { NavBarComponent } from './pages/main/nav-bar/nav-bar.component';

import { FooterComponent } from './pages/main/footer/footer.component';
import { AddSimComponent } from './views/add-sim/add-sim.component';
import { ArchiveComponent } from './views/archive/archive.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, HeaderComponent, NavBarComponent, FooterComponent, AddSimComponent, ArchiveComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
