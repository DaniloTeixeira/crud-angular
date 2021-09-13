import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { IProduto, Produto } from '../../models/Produto';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe((retorno) => {
      this.listaProdutos = retorno;
      console.log(retorno);
    });
  }

  deletar(produto: Produto): void {
    this.produtosService.deletarProduto(produto.id).subscribe(() => {
      this.produtosService.exibirMsgDeErro(
        'SISTEMA',
        `${produto.nome} foi excluído com sucesso!`,
        'toast-error'
      );
    });
  }

  alertaDeExclusao(produto: Produto) {
    Swal.fire({
      title: 'ATENÇÃO!',
      text: `Esta ação é irreversível, deseja realmente excluir o produto ${produto.nome}?`,
      showDenyButton: true,
      denyButtonText: 'Não',
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Não',
      icon: 'warning',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deletado!', 'Produto excluído da base de dados.', 'success');
        this.deletar(produto);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Produto continua na base de dados.)', 'error');
      }
    });
  }
}
