import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { CadastrarProdutoRequest } from '../../models/CadastrarProdutoRequest';
import { Produto } from '../../models/Produto';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent implements OnInit {
  produto: Produto;
  nomeInput: string;
  validadeInput: string;
  valorInput: number;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {}

  getCadastrarProdutoRequest(): CadastrarProdutoRequest {
    return new CadastrarProdutoRequest({
      nome: this.nomeInput,
      validade: this.validadeInput,
      valor: this.valorInput,
    });
  }

  gravarProduto(): void {
    this.produtosService
      .cadastrarProduto(this.getCadastrarProdutoRequest())
      .subscribe(
        (retorno) => {
          this.produto = retorno;
          this.notification.success(
            `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`
          );
          this.router.navigate(['/produtos']);
        },
        () => {
          this.notification.error('Erro ao cadastrar o produto.');
        }
      );
  }

  limparCampos(): void {
    this.produto.nome = '';
    // this.produto.validade = '';
    this.produto.valor = 0;
  }
}
