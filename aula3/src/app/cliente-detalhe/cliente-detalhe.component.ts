import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './cliente-detalhe.component.html',
  styleUrl: './cliente-detalhe.component.css'
})
export class ClienteDetalheComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }
}
