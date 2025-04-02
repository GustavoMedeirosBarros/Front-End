import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefas } from '../models/Tarefas';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  statusTarefa: boolean = false;
  tarefas: Tarefas[] = [
    { id: 1, nome: 'Exercicio de Java', descricao: 'Programar um sistema de estoque Java', status: false },
    { id: 2, nome: 'Exercicio de Python', descricao: 'Armazenar dados em Pandas com Python', status: true },
    { id: 3, nome: 'Exercicio de estatistica', descricao: 'Gerar graficos com PowerBI', status: false },
    { id: 4, nome: 'Exercicio de SpringBoot', descricao: 'Desenvolver um sistema de cadastro com SpringBoot', status: true },
    { id: 5, nome: 'Exercicio de Angular', descricao: 'Desenvolver um website com Angular', status: false }
  ];
}
