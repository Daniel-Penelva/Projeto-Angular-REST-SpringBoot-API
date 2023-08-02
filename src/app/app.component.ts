import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Angular-REST';

  usuario = {login: '', senha: ''};

  constructor(private loginService: LoginServiceService){}
  
  public login(){
    //console.log("Teste login - Login: " + this.usuario.login + " Senha: " + this.usuario.senha);

    // Ao clicar na tela vai cair aqui e daqui vai chamar o serviceLogin
    this.loginService.login(this.usuario);
  }
}
