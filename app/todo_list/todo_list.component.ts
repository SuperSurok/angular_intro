import {Component, Input} from "@angular/core";

import {Todo} from "../shared/todo";


@Component({
    moduleId: module.id,
    selector: "todo_list",
    templateUrl: "todo_list.component.html",
    styleUrls: ["todo_list.component.css"]
})

export class TodoListComponent {
    @Input() todos: Todo[];

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        console.log('delete');
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}