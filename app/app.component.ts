import {Component} from "@angular/core";

// import {Todo} from "./shared/todo.service";
// import {todos} from "./shared/data.service";


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Angular to do';
}