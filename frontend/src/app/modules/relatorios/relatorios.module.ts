import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosComponent } from './relatorios.component';
import { RelatoriosService } from './services/relatorios';

@NgModule({
  declarations: [RelatoriosComponent],
  imports: [CommonModule, RelatoriosRoutingModule],
  providers: [RelatoriosService],
})
export class RelatoriosModule {}
