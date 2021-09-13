import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './components/produtos';
import { CadastrarProdutoComponent } from './components/cadastrar-produto';
import { AtualizarProdutoComponent } from './components/atualizar-produto';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './services/produtos';

@NgModule({
  declarations: [
    ProdutosComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
  ],
  providers: [ProdutosService],
  imports: [CommonModule, ProdutosRoutingModule, FormsModule],
})
export class ProdutosModule {}
