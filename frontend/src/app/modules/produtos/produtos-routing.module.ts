import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarProdutoComponent } from './components/atualizar-produto';
import { CadastrarProdutoComponent } from './components/cadastrar-produto';
import { ProdutosComponent } from './components/produtos';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'cadastrar', component: CadastrarProdutoComponent },
  { path: 'atualizar/:id', component: AtualizarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
