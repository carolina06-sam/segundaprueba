import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contador.module';
//import { ContadorComponent } from './contadores/contador/contador.component';
//import { TestComponent } from './contadores/text/test.component';

@NgModule({
  //traigo los componentes
  declarations: [
    AppComponent,
    //ContadorComponent,
    //TestComponent,
  ],
  //traigo los modulos
  imports: [BrowserModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
