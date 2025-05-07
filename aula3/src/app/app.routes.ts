import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'media-simples', component: MediaSimplesComponent },
    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component },
            { path: 'tela-filho2', component: TelaFilho2Component }
        ]
    },
    { path: 'diretivas', component: ExemploDiretivasComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: 'detalhe/:id', component: ClienteDetalheComponent },
    { path: 'cadastro', component: CadastroUsuarioComponent },
    { path: 'cadastro-pessoa', component: CadastroPessoaComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', component: PaginaNaoEncontradaComponent },
];
