import { Observable } from 'rxjs';
import { UsuarioServiceService } from './../../../service/usuario-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students : Observable<User[]>;
  
  constructor(private usuarioService: UsuarioServiceService, students:Observable<User[]>) {
    this.students= students
  }

  // Primeiro processo a ser executado ao abrir a página do usuario.component.html
  ngOnInit(): void {
    this.usuarioService.getStudentList().subscribe(data =>{
      this.students = data;
    });
  }

}
