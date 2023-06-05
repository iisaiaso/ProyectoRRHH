import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-empleados',
  templateUrl: './add-empleados.component.html',
  styleUrls: ['./add-empleados.component.css']
})
export class AddEmpleadosComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiServiceE: EmpleadoService, private router: Router, private toastr: ToastrService) { }

  get tipoDocumento() {
    return this.fromRegisterEmpleado.get('tipoDocumento') as FormControl;
  }
  get numeroDocumento() {
    return this.fromRegisterEmpleado.get('numeroDocumento') as FormControl;
  }
  get nombreEmpleado() {
    return this.fromRegisterEmpleado.get('nombreEmpleado') as FormControl;
  }
  get apellidosEmpleado() {
    return this.fromRegisterEmpleado.get('apellidosEmpleado') as FormControl;
  }
  get apellidosEmpleadoMaterno() {
    return this.fromRegisterEmpleado.get('apellidosEmpleado') as FormControl;
  }
  get tipoGenero() {
    return this.fromRegisterEmpleado.get('tipoGenero') as FormControl;
  }
  get fechaEmpleado() {
    return this.fromRegisterEmpleado.get('fechaEmpleado') as FormControl;
  }
  get correoEmpleado() {
    return this.fromRegisterEmpleado.get('correoEmpleado') as FormControl;
  }
  get telefonoEmpleado() {
    return this.fromRegisterEmpleado.get('telefonoEmpleado') as FormControl;
  }
  get direccionEmpleado() {
    return this.fromRegisterEmpleado.get('direccionEmpleado') as FormControl;
  }
  get tipoCargo() {
    return this.fromRegisterEmpleado.get('tipoCargo') as FormControl;
  }

  fromRegisterEmpleado = this.fb.group({
    tipoDocumento: [''],
    numeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    nombreEmpleado: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    apellidosEmpleado: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    apellidosEmpleadoMaterno: ['', [Validators.required, Validators.pattern('^[ a-zA-Z]{4,50}$')]],
    tipoGenero: ['MASCULINO', Validators.required],
    fechaEmpleado: ['', Validators.required],
    correoEmpleado: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$")]],
    telefonoEmpleado: ['', [Validators.required, Validators.pattern('^[0-9]{7,9}$')]],
    direccionEmpleado: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \.,?!-]*$')]],
    tipoCargo: ['SOLTERO (A)', Validators.required]
  })

  ngOnInit(): void {
  }

  registrarEmpleado() {
    const empleado = {
      documento: this.fromRegisterEmpleado.value.numeroDocumento,
      nombre: this.fromRegisterEmpleado.value.nombreEmpleado,
      apePaterno: this.fromRegisterEmpleado.value.apellidosEmpleado,
      apeMaterno: this.fromRegisterEmpleado.value.apellidosEmpleadoMaterno,
      genero: this.fromRegisterEmpleado.value.tipoGenero,
      fechNacimiento: this.fromRegisterEmpleado.value.fechaEmpleado,
      correo: this.fromRegisterEmpleado.value.correoEmpleado,
      telefono: this.fromRegisterEmpleado.value.telefonoEmpleado,
      direccion: this.fromRegisterEmpleado.value.direccionEmpleado,
      estCivil: this.fromRegisterEmpleado.value.tipoCargo,
    }
    console.log(empleado);
    if (this.fromRegisterEmpleado.valid) {
      this.apiServiceE.addEmpleado(empleado).subscribe((res) => {

      })
      this.toastr.success(`Usuario Registrado exitosamente`);
      this.router.navigate(['/dashboard/empleado/']);

    } else {
      this.toastr.error(`Error al registrar`);
    }
  }

}
