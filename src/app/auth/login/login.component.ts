import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: any[]
  constructor(private fb: FormBuilder, private apiServiceU: UsuarioService, private router: Router, private toastr: ToastrService) { }
  get correo() {
    return this.formLogin.get('correo') as FormControl;
  }
  formLogin = this.fb.group({
    correo: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$")]],
    password: ['', [Validators.required,]]
  })
  ngOnInit(): void {
    console.log(this.formLogin.value);


  }
  loginUser(): any {
    if (this.formLogin.value.correo != "" && this.formLogin.value.password != "") {
      this.apiServiceU.getLoginUsuario(this.formLogin.value).subscribe(data => {
        if (data.token != null) {
          this.toastr.success(`Bienvenido ${data.correo}`);
          localStorage.setItem('id', data.id)
          localStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard/']);
        } else {
          this.toastr.error(`Credenciales incorrectos o suario no registrado`);
        }
      })
    } else {
      this.toastr.warning(`Los campos estan vacios`);
    }
  }
}
