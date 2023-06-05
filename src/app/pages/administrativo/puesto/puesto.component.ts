import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.css']
})
export class PuestoComponent implements OnInit {

  list!: any[];
  listEmpleado!: any[]

  constructor(private apiService: PuestoService, private apiServiceE: EmpleadoService) { }

  ngOnInit(): void {
    this.apiService.getList().subscribe(data => {
      this.list = data
    })

    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data

    })
  }

}
