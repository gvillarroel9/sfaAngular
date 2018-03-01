import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public username = 'Geraldo';
  public password: string;
  public emailFormControl = new FormControl('',
    [
      Validators.required,
      Validators.email,
    ]);
  public passwordFormControl = new FormControl('',
    [
      Validators.required,
    ]);

  constructor(private router: Router, private usuarioService: UsuarioService ) {
  }

  ngOnInit() {
    if (this.username === 'admin' && this.password === 'x') {
      this.usuarioService.setUsuarioLogueado();
      this.usuarioService.setNombreUsuario(this.username);
      this.router.navigate(['principal']);
    }
  }

  loginUser(valores) {
    this.username = valores.target.elements[0].value;
    this.password = valores.target.elements[1].value;
    if (this.username === 'admin' && this.password === 'x') {
      this.usuarioService.setUsuarioLogueado();
      this.usuarioService.setNombreUsuario(this.username);
      this.router.navigate(['principal']);
    }
  }


}
