import { Injectable } from '@angular/core';
import { Moeda } from '../models';
@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    {"sigla": "AUD", "descricao": "Dolar australiano"},
    {"sigla": "BGN", "descricao": "Lev bulgaro"},
    {"sigla": "BRL", "descricao": "Real Brasileiro"},
    {"sigla": "CAD", "descricao": "Dolar canadense"},
    {"sigla": "CHF", "descricao": "Franco Suíço"},
    {"sigla": "CNY", "descricao": "Yuan Chinês"},
    {"sigla": "CZK", "descricao": "Coroa República Tcheca"},
    {"sigla": "DKK", "descricao": "Coroa Dinamarquesa"},
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "GBP", "descricao": "Libra Esterlina"},
    {"sigla": "USD", "descricao": "Dólar dos Estados Unidos"}
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }
  

    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }
    return this.moedas;
  }
}
