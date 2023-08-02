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
    //console.info("User: " + usuario.login);
    //console.info(usuario); -> para saber que o usuário está vindo da tela em formato de typescript.
    //console.info(JSON.stringify(usuario)); -> convertendo as variaveis para JSON

    // Vai retornar (parâmetro 1) montando a url login e (parâmetro 2) mandando os dados login e senha do usuário.
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data =>{
      
      /* Corpo do meu retorno Http*/
      //console.info(JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]); -> mostra no console como captura o token

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      // Esconde (ou armazena) atrás do front-end
      localStorage.setItem("token", token);

      // console.info(localStorage.getItem("token")); -> mostra no console o token capturado

    }, error =>{
      console.error("Erro ao fazer login!");
    });
  }
}
