# angular_crud

    Fazendo CRUD com Angular

    -> Para rodar servidor json server:
    comandar (npm start) dentro da pasta backend

# Informações importantes sobre o Angular

# Bindings

    Os bindings em angular são as formas de como a View interage com Model/(Compoment).

# Tipos de bindings

# -> Interpolation - {{ valor }}

    Associa informação do componente para o template (HTML).

# -> Property binding [propriedade]="valor"

    Associa informação do componente para o template (HTML).

# -> Event binding - (evento)="handler"

    Associa informação do template (HTML) para o componente.

# -> Two-way data binding - [(ngModel)]="propriedade"

    Associa informação entre ambos, ou seja, mantém ambos atualizados (componente e template (HTML).

# -> Diretivas

    As diretivas são marcadores em um elemento DOM (como um atributo) que informam ao Angular para anexar um comportamento especificado a um elemento existente. As diretivas existem desde o AngularJS; na nova versão são usadas com componentes, principalmente para criar tags personalizadas em uma aplicação Angular.

# -> Pipes

    São uma maneira elegante de realizarmos transformações em nosso front-end. Com ela nos podemos criar funções ou filtros (como é chamado no inglês), que podem ser utilizadas em qualquer parte do template do nosso projeto.
    Os pipes não servem para formatar strings, apenas variáveis.

# -> Imports para formatar pipes com data e moeda no padrão basileiro

    => Fazer as inclusões abaixo no app.module.ts

    import localePt from '@angular/common/locales/pt';
    import { registerLocaleData } from '@angular/common';
    import { LOCALE_ID } from '@angular/core';

    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],

# -> Obsersable

    O que é um Observable? Por definição é uma coleção que funciona de forma unidirecional, ou seja, ele emite notificações sempre que ocorre uma mudança em um de seus itens e a partir disso podemos executar uma ação.

# -> Interface

    Uma interface é um conjunto de métodos e propriedades que descrevem um objeto, porém não inicializa nem os implementa. Uma classe é uma estrutura ou plano, que a partir dela podemos criar objetos que compartilham uma mesma configuração, propriedades e métodos

# -> Subscribe

    Método responsável por acionar o evento do observable, enquanto o subscribe aciona observable para uma requisição, o observable fica responsável por buscar aguardar a resposta assíncrona da solicitação.

    Seu uso consiste em basicamente se inscrever (subscribe) à um Observable, informando o que deverá ser feito com o dado que irá receber. Essa inscrição poderá escutar 3 interações: sucesso, erro e completo (encerrado). Podemos informar no próprio subscribe, via parâmetro, as funções que devem ser executadas quando alguma dessas interações ocorrerem, sendo somente função de sucesso obrigatória.
