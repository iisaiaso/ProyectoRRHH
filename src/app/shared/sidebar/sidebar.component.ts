import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  listId!: any[]
  list!: any[];
  listEmpleado!: number
  listEm!: string
  listUsuario!: number
  listPuesto!: number
  user!: string | null
  constructor(
    private apiService: SidebarService,
    private apiServiceE: EmpleadoService,
    private apiServiceU: UsuarioService,
    private apiServiceP: PuestoService
  ) { }

  ngOnInit(): void {
    // Establecer un valor en el Local Storage
    this.user = localStorage.getItem('id')
    console.log(this.user);


    this.apiService.getList().subscribe(data => {
      this.list = data
    })

    this.apiService.getListId().subscribe(data => {
      this.listId = data;
      console.log(this.listId);

    });

    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data.length
      for (let usuario of data) {
        console.log(String(usuario.id));
        if (String(usuario.id) == this.user) {
          this.listEm = usuario.nombre + " " + usuario.apePaterno
        }

      }

      console.log(this.listEm);

    })

    this.apiServiceU.getListUsuario().subscribe(data => {
      this.listUsuario = data.length
      // console.log(this.listEmpleado);
    })
    this.apiServiceP.getList().subscribe(data => {
      this.listPuesto = data.length
      // console.log(this.listEmpleado);

    })
  }

}
