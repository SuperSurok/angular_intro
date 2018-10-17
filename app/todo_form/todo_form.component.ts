import {Component} from "@angular/core";
import {TodoService} from "../shared/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo_form',
    templateUrl: 'todo_form.component.html',
    styleUrls: ['todo_form.component.css']

})

export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: TodoService) {

    }

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}