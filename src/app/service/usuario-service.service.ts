import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
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
}
