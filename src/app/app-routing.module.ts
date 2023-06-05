import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginAccesoGuard } from './guard/login-acceso.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: PagesComponent, canActivate: [LoginAccesoGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
