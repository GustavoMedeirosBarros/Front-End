import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
    });
  }
  salvar() {
    console.log("Pessoa salva:", this.form.value);
    alert("Pessoa salva com sucesso!");
  }
}
