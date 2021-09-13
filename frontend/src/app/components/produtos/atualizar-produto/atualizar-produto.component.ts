import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from 'src/app/model/IProduto.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
})
export class AtualizarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: '',
    validade: '',
    valor: 0,
  };

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
      this.router.navigate(['/produtos/listar']);
    });
  }

  limparCampos(): void {
    this.produto.nome = '';
    this.produto.validade = '';
    this.produto.valor = 0;
  }
}
