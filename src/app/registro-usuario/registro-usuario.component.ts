import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor() { }

  public usuario: any = {
    nombre: undefined,
    apellido: undefined,
    idPlaystation: undefined,
    fechaNacimiento: undefined,
    password: undefined,
    repassword: undefined,
  }

  ngOnInit() {
  }

  registrarUsuario() {
    this.validar();
  }

  validar() {
    if (this.usuario.password != this.usuario.repassword) {
      alert("Contraseñas deben ser similares");
    }
    //console.info(this.usuario)
  }
}
