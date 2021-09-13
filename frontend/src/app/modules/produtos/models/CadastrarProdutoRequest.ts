import { safeParseISO } from 'src/app/utils/helpers';

export interface ICadastrarProdutoRequest {
  // a interrogação '?' na variável, informa que o atributo não é obrigatório
  nome: string;
  validade: string;
  valor: number;
}

export class CadastrarProdutoRequest {
  nome: string;
  validade: Date;
  valor: number;

  constructor(data: ICadastrarProdutoRequest) {
    this.nome = data.nome;
    this.validade = safeParseISO(data.validade);
    this.valor = data.valor;
  }
}
