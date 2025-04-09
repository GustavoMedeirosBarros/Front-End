import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  email: string = '';
  usuarioLogado: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'] ?? '';
    this.validarAcesso(); // Chama a validação ao iniciar
  }

  validarAcesso() {
    const dadosLocalStorage = localStorage.getItem('usuarioLogado');

    // Se não houver usuário logado, redireciona para /login
    if (!dadosLocalStorage) {
      this.router.navigate(['/login']);
      return;
    }

    this.usuarioLogado = JSON.parse(dadosLocalStorage);

    // Verifica se o email é "admin@exemplo.com" (mesma validação do LoginComponent)
    if (this.usuarioLogado.email !== 'admin@exemplo.com') {
      this.router.navigate(['/login']);
    }

    // Verifica se o email da rota bate com o do localStorage (opcional)
    if (this.usuarioLogado.email !== this.email) {
      this.router.navigate(['/login']);
    }
  }

  sair() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']); // Melhor que window.location.reload()
  }
}