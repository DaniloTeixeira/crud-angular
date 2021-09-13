import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  msgBoasVindas = 'Seja Bem Vindo!';

  produtos: any = [
    {
      nomeProduto: 'Curso de Angular',
      idProduto: 1,
      preco: 99.90511111,
      promocao: true,
      fotoCard: 'assets/img/logo-header.png',
      validade: '2021-12-31',
    },
    {
      nomeProduto: 'Curso de Vue',
      idProduto: 2,
      preco: 69.90511111,
      promocao: false,
      fotoCard: 'assets/img/logo-header.png',
      validade: '2021-11-31',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
