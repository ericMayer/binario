import { Component, OnInit } from '@angular/core';

import { Calculo } from '../shared/interfaces/calculo.interface';
import { UtilsService } from '../shared/services/utils.service';

@Component({
  selector: 'app-calculo-binario',
  templateUrl: './calculo-binario.component.html',
  styleUrls: ['./calculo-binario.component.scss']
})
export class CalculoBinarioComponent implements OnInit {

  public operadores: string[];
  public calculo: Calculo;
  public customPatterns: any;
  public resultado: string;

  constructor(
    private utilsService: UtilsService
  ) {
    this.operadores = ['+', '-', '*', '/', '%']
    this.calculo = {};
    this.customPatterns = { '0': { pattern: new RegExp('\[0-1\]') } };
  }

  ngOnInit(): void {
  }

  public back(): void {
    this.utilsService.back();
  }

  public formInvalid(): boolean {
    return !this.calculo.operador ||
      !this.calculo.numeroUm ||
      !this.calculo.numeroDois;

  }

  public calcular(): void {
    const numeroUm = parseInt(this.calculo.numeroUm, 2);
    const numeroDois = parseInt(this.calculo.numeroDois, 2);
    let resultado = 0;

    switch (this.calculo.operador) {
      case '+':
        resultado = numeroUm + numeroDois;
        break;
      case '-':
        resultado = numeroUm - numeroDois;
        break;
      case '*':
        resultado = numeroUm * numeroDois;
        break;
      case '/':
        resultado = numeroUm / numeroDois;
        break;
      case '%':
        resultado = numeroUm % numeroDois;
        break;
    }
    this.resultado = resultado.toString(2);
  }
}

