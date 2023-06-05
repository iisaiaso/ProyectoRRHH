import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-show-empleados',
  templateUrl: './show-empleados.component.html',
  styleUrls: ['./show-empleados.component.css']
})
export class ShowEmpleadosComponent implements OnInit {
  listEmpleado!: any[]
  listEmpleado$!: Observable<any[]>;
  documento = ""
  detalle!: string
  puesto!: any[]
  constructor(private fb: FormBuilder, private apiServiceE: EmpleadoService, private apiServiceP: PuestoService, private router: Router) { }
  get tipoDocumento() {
    return this.fromUpdateEmpleado.get('tipoDocumento') as FormControl;
  }
  get numeroDocumento() {
    return this.fromUpdateEmpleado.get('numeroDocumento') as FormControl;
  }
  get nombreEmpleado() {
    return this.fromUpdateEmpleado.get('nombreEmpleado') as FormControl;
  }
  get apellidosEmpleado() {
    return this.fromUpdateEmpleado.get('apellidosEmpleado') as FormControl;
  }
  get apellidosEmpleadoMaterno() {
    return this.fromUpdateEmpleado.get('apellidosEmpleado') as FormControl;
  }
  get tipoGenero() {
    return this.fromUpdateEmpleado.get('tipoGenero') as FormControl;
  }
  get fechaEmpleado() {
    return this.fromUpdateEmpleado.get('fechaEmpleado') as FormControl;
  }
  get correoEmpleado() {
    return this.fromUpdateEmpleado.get('correoEmpleado') as FormControl;
  }
  get telefonoEmpleado() {
    return this.fromUpdateEmpleado.get('telefonoEmpleado') as FormControl;
  }
  get direccionEmpleado() {
    return this.fromUpdateEmpleado.get('direccionEmpleado') as FormControl;
  }
  get tipoCargo() {
    return this.fromUpdateEmpleado.get('tipoCargo') as FormControl;
  }
  fromUpdateEmpleado = this.fb.group({
    tipoDocumento: [''],
    numeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    nombreEmpleado: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    apellidosEmpleado: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    apellidosEmpleadoMaterno: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    tipoGenero: ['', Validators.required],
    fechaEmpleado: ['', Validators.required],
    correoEmpleado: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$")]],
    telefonoEmpleado: ['', [Validators.required, Validators.pattern('^[0-9]{7,9}$')]],
    direccionEmpleado: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \.,?!-]*$')]],
    tipoCargo: ['', Validators.required]
  })

  ngOnInit(): void {

    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data
    })
  }

  eliminarEmpleado(id: number) {
    this.apiServiceE.deleteEmpleado(id).subscribe((res) => {
      console.log(res);

    })
    this.listEmpleado$ = this.apiServiceE.getListEmpleado()
    this.reload()
    alert("ok")
  }

  editarEmpleado(id: number) {
    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data
      for (let edit of this.listEmpleado) {
        if (edit.id == id) {
          let fecha = new Date(edit.fechNacimiento);
          let fechNacimineto = fecha.toISOString().split('T')[0];
          let numero = edit.documento;
          let numeroTexto = numero.toString();
          if (numeroTexto.length == 8) {
            this.documento = "DNI"
          } else {
            this.documento = "CE"
          }
          this.fromUpdateEmpleado = this.fb.group({
            tipoDocumento: [this.documento],
            numeroDocumento: [edit.documento, [Validators.required, Validators.pattern('^[0-9]{8}$')]],
            nombreEmpleado: [edit.nombre, [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
            apellidosEmpleado: [edit.apePaterno, [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
            apellidosEmpleadoMaterno: [edit.apeMaterno, [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
            tipoGenero: [edit.genero, Validators.required],
            fechaEmpleado: [fechNacimineto, Validators.required],
            correoEmpleado: [edit.correo, [Validators.required, Validators.pattern("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$")]],
            telefonoEmpleado: [edit.telefono, [Validators.required, Validators.pattern('^[0-9]{7,9}$')]],
            direccionEmpleado: [edit.direccion, [Validators.required, Validators.pattern('^[a-zA-Z0-9 \.,?!-]*$')]],
            tipoCargo: [edit.estCivil, Validators.required]
          })

        }
      }
    })

  }
  registrarEmpleado() {

  }
  detalleEmpleado(id: number) {
    this.apiServiceE.getListEmpleado().subscribe(data => {
      this.listEmpleado = data
      for (let detalle of this.listEmpleado) {
        if (detalle.id == id) {
          this.detalle = detalle.id
          console.log(this.detalle);

        }
      }
    })

    this.apiServiceP.getList().subscribe(data => {
      this.puesto = data
    })
  }

  reload() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }
}
