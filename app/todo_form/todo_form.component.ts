import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo_form',
    templateUrl: 'todo_form.component.html',
    styleUrls: ['todo_form.component.css']

})

export class TodoFormComponent {
    newTodoTitle: string = '';

    create() {

    }

}