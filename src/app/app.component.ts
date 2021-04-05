import { Component } from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  todos: Array<any>;


  initializeApp() {

        //other code
        this.apiService.ListTodos().then((evt) => {
          this.todos = evt.items;
        });

/*
      this.platform.ready().then(() => {
        //other code
        this.apiService.ListTodos().then((evt) => {
          this.todos = evt.items;
        });
      });
*/
  }


  constructor(private apiService: APIService) {
    this.initializeApp();
  }


  createTodo() {
  /*
    this.apiService.CreateTodo({
        name: 'ionic',
        description: 'testing'
    });
    */
  }


}








