import {Component} from 'angular2/core';
import {TodoitemsComponent} from './todoitem.component';


@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 ToDoItem Sample</h1>
                <todo></todo>
    `,
    directives:[TodoitemsComponent]
})
export class AppComponent { }