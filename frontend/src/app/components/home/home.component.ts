import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  msgBoasVindas = 'seja bem vindo!';

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
      fotoCard: 'assets/img/logo-vue.png',
      validade: '2021-11-31',
    },
    {
      nomeProduto: 'Curso de React',
      idProduto: 3,
      preco: 89.90511111,
      promocao: true,
      fotoCard: 'assets/img/react-logo.png',
      validade: '2021-10-31',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
