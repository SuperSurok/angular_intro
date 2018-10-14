import {Component} from "@angular/core";

import {Todo} from "../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo_item',
    templateUrl: "todo_item.component.html",
    styleUrls: ["todo_item.component.css"]
})

export class TodoItemComponent {
    todo: Todo = new Todo('Title')
}