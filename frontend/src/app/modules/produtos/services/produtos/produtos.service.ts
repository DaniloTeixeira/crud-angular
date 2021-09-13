import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { mapToClasses } from 'src/app/utils/custom-operators';
import { Produto } from '../../models/Produto';
import { CadastrarProdutoRequest } from '../../models/CadastrarProdutoRequest';

@Injectable()
export class ProdutosService {
  private URL = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<Produto[]> {
    return this.http.get(this.URL).pipe(
      mapToClasses(Produto),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  cadastrarProduto(produto: CadastrarProdutoRequest): Observable<any> {
    return this.http
      .post(this.URL, produto)
      .pipe(catchError((erro) => this.exibeErro(erro)));
  }

  buscarProdutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  atualizarProduto(produto: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/${produto.id}`, produto).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMsgDeErro(
      'ERRO!',
      'Não foi possível realizar a requisição!',
      'toast-error'
    );
    return EMPTY;
  }

  exibirMsgDeErro(titulo: string, msg: string, tipoMsg: string): void {
    this.toastr.show(
      msg,
      titulo,
      { closeButton: true, progressBar: true },
      tipoMsg
    );
  }
}
