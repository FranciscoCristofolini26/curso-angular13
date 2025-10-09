import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.model';



@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    try {
      const tarefas: Tarefa[] = this.listarTodos();
      let updated = false;
      tarefas.forEach((obj, index, objs) => {
        if (tarefa.id === obj.id) {
          console.log('Antes:', objs[index]);
          objs[index] = { ...tarefa }; // faz uma cópia para evitar problemas de referência
          updated = true;
          console.log('Depois:', objs[index]);
        }
      });
      if (!updated) {
        throw new Error(`Tarefa com id ${tarefa.id} não encontrada.`);
      }
      console.log('Array final:', tarefas);
      localStorage['tarefas'] = JSON.stringify(tarefas);
      console.log('Salvo no localStorage:', localStorage['tarefas']);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

  alterarStatus(id: number): void {
  
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
