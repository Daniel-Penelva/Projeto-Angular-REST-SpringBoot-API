import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Projeto-Angular-REST';

  constructor(private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('token') == null){ // Se não tiver o token é redirecionado para a página login
      this.router.navigate(['login']);
    }
  }

  // Método para sair da sessão de logado e ir para página de login
  public sair(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  
  
}
