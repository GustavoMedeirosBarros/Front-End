import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../services/localStorage.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(private servico: LocalStorageService, private route: Router) { }
  ngOnInit(): void {
    const usuarioLogado = this.servico.getLocalStorage('usuarioLogado');
    if (usuarioLogado) {
      this.email = usuarioLogado.email;
    }
  }

  logar() {
    if (this.email === "admin@exemplo.com" && this.senha === "123456") {
      const dados = {
        email: this.email,
        senha: this.senha
      };
      this.servico.setLocalStorage('usuarioLogado', dados);
      this.route.navigate(['perfil', this.email]);
    } else {
      alert('Email ou senha inválidos!');
    }
  }
}
