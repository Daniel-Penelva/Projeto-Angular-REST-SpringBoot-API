import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  // Método de login que recebe como parâmetro um objeto de usuário
  login(usuario:any){

    // Vai retornar (parâmetro 1) montando a url login e (parâmetro 2) mandando os dados login e senha do usuário.
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data =>{

      //Faz um parse transformando em json e captura o token sem o contexto 'Authorization' e 'Bearrer'
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      // Esconde (ou armazena) atrás do front-end
      localStorage.setItem("token", token);

    }, error =>{
      console.error("Erro ao fazer login!");
      alert("Acesso Negado!");
    });
  }
}
