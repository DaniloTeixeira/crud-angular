import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.module';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe((retorno) => {
      this.listaProdutos = retorno;
    });
  }

  deletar(produto: IProduto): void {
    this.produtosService.deletarProduto(produto.id).subscribe(() => {
      this.produtosService.exibirMsgDeErro(
        'SISTEMA',
        `${produto.nome} foi excluído com sucesso!`,
        'toast-error'
      );
    });
  }

  alertaDeExclusao(produto: IProduto) {
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
