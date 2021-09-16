import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { TestComponent } from './text/test.component';

@NgModule({
  declarations: [ContadorComponent, TestComponent],

  exports: [ContadorComponent, TestComponent],

  imports: [CommonModule],
})
export class ContadorModule {}
