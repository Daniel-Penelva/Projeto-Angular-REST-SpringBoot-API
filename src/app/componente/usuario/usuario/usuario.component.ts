import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

import { UsuarioServiceService } from './../../../service/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  students: User[] = [];
  nome: String = "";

  constructor(private usuarioService: UsuarioServiceService) {}

  // Primeiro processo a ser executado ao abrir a página do usuario.component.html
  ngOnInit(): void {
    // Carrega a lista (tabela) de usuários
    this.usuarioService.getStudentList().subscribe((data) => {
      this.students = data;
    });
  }

  // Método para o click para deletar o usuário (usuario.component.html). Ao clicar vai ser jogado para o usuario service.
  deleteUsuario(id: Number) {
    this.usuarioService.deletarUsuario(id).subscribe((data) => {
      console.log('Retorno do método delete: ' + data);

      this.usuarioService.getStudentList().subscribe((data) => {
        this.students = data;
      });
    });
  }

  // Método para o click para consultar o usuário por nome (usuario.component.html). Ao clicar vai ser jogado para o usuario service.
  consultarUsuario(){
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.students = data; // retorno do JSON
    });
  }
}
