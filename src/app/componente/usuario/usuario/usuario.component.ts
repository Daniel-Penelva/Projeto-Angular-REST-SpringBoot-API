import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

import { UsuarioServiceService } from './../../../service/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  
  students: User[] = [];

  constructor(private usuarioService: UsuarioServiceService) {
  
  }

  // Primeiro processo a ser executado ao abrir a página do usuario.component.html
  ngOnInit(): void {
   
    this.usuarioService.getStudentList().subscribe((data) => {
      this.students = data;
    }); 
  }
}
