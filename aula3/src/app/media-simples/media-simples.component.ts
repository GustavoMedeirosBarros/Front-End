import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../services/localStorage.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-simples',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplesComponent implements OnInit {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  media: number = 0;
  situacao: string = '';
  ultimaMedia: any = null;

  constructor(private servico: LocalStorageService) { }
  ngOnInit(): void {
    this.ultimaMedia = this.servico.getLocalStorage('ultimaMedia');
  }

  calcularMedia() {
    this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
    if (this.media >= 6)
      this.situacao = 'Aprovado';
    else
      this.situacao = 'Reprovado';
    let dados = {
      nota1: this.nota1,
      nota2: this.nota2,
      nota3: this.nota3,
      nota4: this.nota4,
      media: this.media,
      situacao: this.situacao,
    }
    this.servico.setLocalStorage('ultimaMedia', dados);
  }
}
