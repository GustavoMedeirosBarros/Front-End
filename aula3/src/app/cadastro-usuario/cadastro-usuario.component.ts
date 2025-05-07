import { Component, ViewChild, viewChild } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    id_usuario: 0,
    nome: '',
    email: '',
    senha: '',
    ativo: false
  }

  @ViewChild('form') form!: NgForm;

  salvar() {
    if (this.form.valid) {
      console.log("Usuario salvo:", this.usuario);
      alert("Usuario salvo com sucesso!");
    }
  }
}
