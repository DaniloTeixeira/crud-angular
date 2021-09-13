import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  msgBoasVindas = 'Seja Bem Vindo!';

  nomeProduto = 'Curso de Angular';
  idProduto = 1;
  preco = 99.90511111;
  promocao = false;
  fotoCard = 'assets/img/logo-header.png';
  validade = '2021-12-31';

  constructor() {
    console.log(`Nome do produto: ${this.nomeProduto}`);
  }

  ngOnInit(): void {}
}
