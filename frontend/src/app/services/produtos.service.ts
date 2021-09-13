import { IProduto } from './../model/IProduto.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private URL = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  cadastrarProduto(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  buscarProdutoPorId(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  atualizarProduto(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
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
