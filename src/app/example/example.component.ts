import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  constructor() {}
  title = 'estado inicial2';
  title2 = '';

  taskList = ['estudiar angular', 'bases de datos', 'hacer mercado'];
  /*   elimino con el metodo splice  */
  deleteItem(index: number) {
    this.taskList.splice(index, 1);
  }

  addItem(title: string) {
    this.taskList.push(title);
  }

  ngOnInit(): void {
    console.log(this.taskList);
  }
}
