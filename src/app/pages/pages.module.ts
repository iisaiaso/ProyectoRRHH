import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PuestoComponent } from './administrativo/puesto/puesto.component';
import { HorarioComponent } from './administrativo/horario/horario.component';
import { AddEmpleadosComponent } from './empleados/add-empleados/add-empleados.component';
import { ShowEmpleadosComponent } from './empleados/show-empleados/show-empleados.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ShowUsuariosComponent } from './usuarios/show-usuarios/show-usuarios.component';
import { AddUsuariosComponent } from './usuarios/add-usuarios/add-usuarios.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    EmpleadosComponent,
    PuestoComponent,
    HorarioComponent,
    AddEmpleadosComponent,
    ShowEmpleadosComponent,
    UsuariosComponent,
    ShowUsuariosComponent,
    AddUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
