import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/data.service";

import {AppComponent} from "./app.component";
import {TodoFormComponent} from "./todo_form/todo_form.component";
import {TodoListComponent} from "./todo_list/todo_list.component";
import {TodoItemComponent} from "./todo_item/todo_item.component";
import {TodoService} from "./shared/todo.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService) // Delete this string if we have real server
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})

export class AppModule {

}