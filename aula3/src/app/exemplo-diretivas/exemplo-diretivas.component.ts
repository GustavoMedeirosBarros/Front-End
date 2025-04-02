import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exemplo-diretivas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretivas.component.html',
  styleUrl: './exemplo-diretivas.component.css'
})
export class ExemploDiretivasComponent {
  constructor(private route: Router) { }

  exibirTabela: boolean = true;
  nome: string = '';
  pessoas: Pessoa[] = [
    { id: 1, nome: 'Mark', cidade: 'Sorocaba', celular: '12323213' },
    { id: 2, nome: 'Jacob', cidade: 'Sorocaba', celular: '3231222' },
    { id: 3, nome: 'Larry', cidade: 'Votorantim', celular: '232255' },
  ];

  exibirDetalhe(id: number) {
    this.route.navigate(['detalhe', id]);
  }
}
