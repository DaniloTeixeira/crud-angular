import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./modules/produtos/produtos.module').then(
        (m) => m.ProdutosModule
      ),
  },
  { path: 'vendas', loadChildren: () => import('./modules/vendas/vendas.module').then(m => m.VendasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
