import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  title: string = 'Contador fantaaaastico';
  numero: number = 5;
  base: number = 2;

  // funciones individuales para el contador
  /* sumar() {
    this.numero = this.numero + 1;
  }
  resta() {
    this.numero = this.numero - 1;
  } */

  //reducir a solo una funcion
  acumular(valor: number) {
    this.numero += valor;
  }
}
