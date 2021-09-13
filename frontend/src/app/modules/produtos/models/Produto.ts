import { safeParseISO } from 'src/app/utils/helpers';

export interface IProduto {
  // a interrogação '?' na variável, informa que o atributo não é obrigatório
  id: number;
  nome: string;
  validade: string;
  valor: number;
}

export class Produto {
  id: number;
  nome: string;
  validade: Date;
  valor: number;

  constructor(data: IProduto) {
    this.id = data.id;
    this.nome = data.nome;
    this.validade = safeParseISO(data.validade);
    this.valor = data.valor;
  }

  aplicarDesconto(desconto: number): void {
    if (desconto > this.valor) {
      this.valor = 0;
      return;
    }
    this.valor -= desconto;
  }
}
