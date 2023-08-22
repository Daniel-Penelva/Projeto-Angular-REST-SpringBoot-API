import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConstants } from '../app-constants';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  // Faz um get gerando a lista de usuarios 
  getStudentList(): Observable<any>{
    return this.http.get<User[]>(AppConstants.baseUrl);
  }

  // Fazer o método HTTP DELETE, na API o método deletar recebe um id do usuário e ele retorna uma resposta jSON de tipo texto.
  deletarUsuario(id: Number): Observable<any>{
    return this.http.delete(AppConstants.baseUrl + id, {responseType: 'text'});
  }
}
