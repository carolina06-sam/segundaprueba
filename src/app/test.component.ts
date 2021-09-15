import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  title: string = 'hola aqui esta el texto';
}
