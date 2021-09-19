import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contador.module';
import { ExampleComponent } from './example/example.component';
/* import { ExampleComponent } from './example/example.component'; */
//import { ContadorComponent } from './contadores/contador/contador.component';
//import { TestComponent } from './contadores/text/test.component';

@NgModule({
  //traigo los componentes
  declarations: [
    AppComponent,
    ExampleComponent,

    //ContadorComponent,
    //TestComponent,
  ],
  //traigo los modulos
  imports: [BrowserModule, ContadorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
