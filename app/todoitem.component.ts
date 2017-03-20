import {Component} from 'angular2/core';
import {itemModel} from './model';

@Component({
    selector: 'todo',
    template: `<h2>ToDoitem List</h2>
                <ul>
                    <li *ngFor="#item of items">
                        Yapılacak iş : {{item.action}}  - Durum : {{item.done}}
                    </li>
                </ul>
    `,
    providers:[itemModel]

})

export class TodoitemsComponent{
    items;
    constructor(m:itemModel){
        this.items=m.getItems();
    }
}