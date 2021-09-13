import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos';
import { IProduto, Produto } from '../../models/Produto';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
})
export class AtualizarProdutoComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarProdutoPorId(id).subscribe((retorno) => {
      this.produto = retorno;
    });
  }

  gravarProduto(): void {
    this.produtosService.atualizarProduto(this.produto).subscribe((retorno) => {
      this.produto = retorno;
      this.produtosService.exibirMsgDeErro(
        'SISTEMA',
        `${this.produto.nome} foi atualizado com sucesso. ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }

  limparCampos(): void {
    this.produto.nome = '';
    // this.produto.validade = '';
    this.produto.valor = 0;
  }
}
