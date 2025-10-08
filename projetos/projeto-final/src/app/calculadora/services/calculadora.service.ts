import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*'

  constructor() { }



  calcular(num1: number, num2: number, operacao: string) {
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        return resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        return resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        return resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        return resultado = num1 / num2;
      break;
      default:
        return resultado = 0;
    }
  }
}
