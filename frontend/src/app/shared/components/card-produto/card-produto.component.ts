import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  // @Input() fotoCard: string;
  // @Input() nomeProduto: string;
  // @Input() promocao: boolean;
  // @Input() validade: string;
  // @Input() idProduto: number;
  // @Input() preco: number;

  nomeProduto = 'Curso de Angular';
  idProduto = 1;
  preco = 99.90511111;
  promocao = false;
  fotoCard = 'assets/img/logo-header.png';
  validade = '2021-12-31';

  constructor() {}

  ngOnInit(): void {}
}
