import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PuestoComponent } from './administrativo/puesto/puesto.component';
import { HorarioComponent } from './administrativo/horario/horario.component';
import { AddEmpleadosComponent } from './empleados/add-empleados/add-empleados.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddUsuariosComponent } from './usuarios/add-usuarios/add-usuarios.component';
import { LoginAccesoGuard } from '../guard/login-acceso.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'empleado', component: EmpleadosComponent },
      { path: 'agregar-empleado', component: AddEmpleadosComponent },
      { path: 'usuario', component: UsuariosComponent },
      { path: 'agregar-usuario', component: AddUsuariosComponent },
      { path: 'puesto', component: PuestoComponent },
      { path: 'horario', component: HorarioComponent }
    ],
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
