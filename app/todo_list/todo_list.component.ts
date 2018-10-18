import {Component, OnInit} from "@angular/core";

import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";


@Component({
    moduleId: module.id,
    selector: "todo_list",
    templateUrl: "todo_list.component.html",
    styleUrls: ["todo_list.component.css"]
})

export class TodoListComponent implements OnInit{
    todos: Todo[];

    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit(){
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo);
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }
}