import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-show-usuarios',
  templateUrl: './show-usuarios.component.html',
  styleUrls: ['./show-usuarios.component.css']
})
export class ShowUsuariosComponent implements OnInit {

  listUsuarioId!: any[]
  list!: any[];
  listP!: any[];
  listEmpleado!: any[]
  constructor(private apiService: UsuarioService,
    private apiServiceP: PuestoService,
    private apiServiceE: EmpleadoService) { }

  ngOnInit(): void {

    this.apiService.getListUsuario().subscribe(data => {
      this.list = data
    })

    this.apiServiceP.getList().subscribe(data => {
      this.listP = data
    })

    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data

    })
  }

}
