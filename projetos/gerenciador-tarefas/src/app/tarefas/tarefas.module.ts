import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TarefaService } from '.';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';



@NgModule({
  declarations: [

  
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
