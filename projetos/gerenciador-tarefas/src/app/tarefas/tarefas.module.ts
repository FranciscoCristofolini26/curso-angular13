import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TarefaService,TarefaConcluidaDirective } from './shared'
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';




@NgModule({
  declarations: [

  
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule
  ],
  exports: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
