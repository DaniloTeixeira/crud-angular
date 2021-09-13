import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from 'src/app/model/IProduto.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: '',
    validade: '',
    valor: 0,
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  gravarProduto(): void {
    this.produtosService.cadastrarProduto(this.produto).subscribe((retorno) => {
      this.produto = retorno;
      this.produtosService.exibirMsgDeErro(
        'SISTEMA',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
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
